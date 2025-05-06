import { downloadAsPDF } from './pdfUtils.js';


let isDownloading = false;

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const result = document.getElementById('result');
    const statusMessage = document.getElementById('statusMessage');
    const quizBtn = document.getElementById("quizBtn");
    const citationBtn = document.getElementById("citationBtn");
    const voiceBtn = document.getElementById("voiceBtn");
    const relatedBtn = document.getElementById("relatedBtn");
    const summarizeBtn = document.getElementById('summarizeBtn');
    const saveBtn = document.getElementById("saveBtn");
    
    // Early exit if required elements missing
    if (!result || !summarizeBtn || !statusMessage) {  
        console.error("Critical Error: Required elements not found");
        return;
    }

    // Content formatter
    function formatContent(content, type = 'summary') {
        return `
            <div class="content-${type}">
                ${content
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\:/g, '<strong>$1:</strong>')
                    .replace(/\* /g, '• ')
                    .replace(/\n/g, '<br>')}
            </div>
        `;
    }

    // Related content formatter
    function formatRelatedContent(content) {
        return `
            <div class="related-content">
                <h2>Related Content</h2>
                <ul class="related-list">
                    ${content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\:/g, '<h3>$1</h3>')
                        .replace(/\* /g, '<li>')
                        .replace(/\n/g, '<br>')
                        .replace(/(<li>.*?)(<br>|$)/g, '$1</li>$2')}
                </ul>
            </div>
        `;
    }

    // Status message handler
    function showStatus(message, type) {
        if (!statusMessage) return;
        
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`;
        statusMessage.style.display = 'block';
        statusMessage.style.opacity = '1';
        
        setTimeout(() => {
            statusMessage.style.opacity = '0';
            setTimeout(() => statusMessage.style.display = 'none', 500);
        }, 5000);
    }

    // Text extraction function
    async function extractingText(buttonType = 'summary') {
        try {
            // Cancel any ongoing speech
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }

            // Show loading state
            const loadingMessages = {
                'summary': "Extracting text for summary...",
                'quiz': "Preparing text for quiz...",
                'citation': "Collecting text for citations...",
                'voice': "Processing text for voice...",
                'graph': "Analyzing text for graph...",
                'related': "Examining text for relations..."
            };
            result.innerHTML = `<div class="loading">${loadingMessages[buttonType] || "Processing text..."}</div>`;

            // Get stored settings
            const { apiKey, knowledgeLevel = 'undergrad' } = await new Promise(resolve => {
                chrome.storage.sync.get(['apiKey', 'knowledgeLevel'], resolve);
            });

            if (!apiKey) {
                showStatus('API key required', 'error');
                result.innerHTML = '<div class="error">Please configure your API key in settings</div>';

                return { text: null, apiKey: null, knowledgeLevel: null };
            }

            // Get active tab content
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (!tab) {
                throw new Error("No active tab found");
            }

            // Extract page content
            const injectionResults = await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    const selectors = ['article', '.post-content', '.article-content', 'main'];
                    const contentEl = selectors.map(s => document.querySelector(s)).find(el => el) || document.body;
                    return contentEl.innerText.replace(/\s+/g, ' ').trim();
                }
            });

            const text = injectionResults[0]?.result;
            if (!text) {
                throw new Error("No extractable text found");
            }

            // Show generation status
            const knowledgeLabels = {
                'child': 'for children',
                'teen': 'for teens',
                'undergrad': 'for undergrads',
                'graduate': 'for grad students',
                'phd': 'for experts'
            };
            
            result.innerHTML = `
                <div class="generating">
                    ${loadingMessages[buttonType] || "Generating content"} 
                    ${knowledgeLabels[knowledgeLevel] || ''}
                </div>
            `;

            return { text, apiKey, knowledgeLevel, buttonType };

        } catch (error) {
            console.error("Extraction error:", error);
            result.innerHTML = `<div class="error">${error.message}</div>`;
            return { text: null, apiKey: null, knowledgeLevel: null };
        }
    }

    // Gemini API caller
    async function getSummaryGemini(text, apiKey, prompt, model="gemini-2.0-flash") {
        try {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
            
            const response = await fetch(`${apiUrl}?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: `${prompt}\n\n${text.substring(0, 30000)}` }]
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API Error ${response.status}`);
            }

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No content generated";

        } catch (error) {
            console.error("API Error:", error);
            throw new Error(`Failed to get response: ${error.message}`);
        }
    }

    async function getSummaryDeepSeek(text, apiKey, prompt, model = 'deepseek-chat') {
        try {
            const apiUrl = 'https://api.deepseek.com/v1/chat/completions';
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}` 
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        { role: "user", content: `${prompt}\n\n${text.substring(0, 30000)}` }
                    ],
                    stream: false
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API Error ${response.status}`);
            }
    
            const data = await response.json();
            return data.choices?.[0]?.message?.content || "No content generated";
    
        } catch (error) {
            console.error("DeepSeek API Error:", error);
            throw new Error(`Failed to get response: ${error.message}`);
        }
    }


    // Text-to-speech handler
    async function speakText(text) {
        if (!window.speechSynthesis) {
            throw new Error("Speech synthesis not supported");
        }

        return new Promise((resolve, reject) => {
            const voicesReady = () => {
                const voices = speechSynthesis.getVoices();
                if (voices.length === 0) {
                    reject(new Error("No voices available"));
                    return;
                }

                const utterance = new SpeechSynthesisUtterance(text.substring(0, 300));
                utterance.voice = voices.find(v => v.name.includes('Google')) || voices[0];
                utterance.rate = 0.95;
                utterance.pitch = 1.1;
                utterance.volume = 0.9;
                utterance.onend = resolve;
                utterance.onerror = reject;

                speechSynthesis.speak(utterance);
            };

            // Handle voice loading
            const voices = speechSynthesis.getVoices();
            if (voices.length) {
                voicesReady();
            } else {
                speechSynthesis.onvoiceschanged = voicesReady;
            }
        });
    }

    // Button Handlers
    quizBtn?.addEventListener("click", async () => {
        try {
            const { text, apiKey, knowledgeLevel } = await extractingText('quiz');
            if (!text || !apiKey) return;
    
            const prompt = `Create 5 quiz questions (with 4 options each, mark correct answer) 
            at ${knowledgeLevel} level about this text:`;
            
            const quizContent = await getSummaryGemini(text, apiKey, prompt);
            result.innerHTML = formatContent(quizContent, 'quiz');
        } catch (error) {
            result.innerHTML = `<div class="error">Quiz Error: ${error.message}</div>`;
        }
    });

    citationBtn?.addEventListener("click", async () => {
        try {
            const { text, apiKey, buttonType, knowledgeLevel } = await extractingText('citation');
            if (!text) return;

            const prompt = `Generate ${knowledgeLevel}-level citations in APA, MLA and Chicago styles.
            ${knowledgeLevel === 'child' ? 'Use simple explanations:' : 'Include technical details:'}`;
            
            const citations = await getSummaryGemini(text, apiKey, prompt);
            result.innerHTML = formatContent(citations, 'citation');
        } catch (error) {
            result.innerHTML = `<div class="error">Citation Error: ${error.message}</div>`;
        }
    });

    relatedBtn?.addEventListener("click", async () => {
        try {
            const { text, apiKey, knowledgeLevel } = await extractingText('related');
            if (!text) return;

            const prompt = `Suggest 3-5 ${knowledgeLevel}-appropriate related topics with:
            • Clear titles
            • Connection explanations
            • ${knowledgeLevel === 'phd' ? 'Academic references' : 'Simple examples'}`;
            
            const related = await getSummaryGemini(text, apiKey, prompt);
            result.innerHTML = formatRelatedContent(related);
        } catch (error) {
            result.innerHTML = `<div class="error">Related Error: ${error.message}</div>`;
        }
    });

    voiceBtn?.addEventListener("click", async () => {
        try {
            const { text, apiKey, knowledgeLevel } = await extractingText('voice');
            if (!text) return;

            const prompt = `Create a ${knowledgeLevel}-level spoken summary with:
            - Conversational tone
            - ${knowledgeLevel === 'child' ? 'Simple words' : 'Appropriate terminology'}
            - Clear structure`;
            
            const summary = await getSummaryGemini(text, apiKey, prompt);
            await speakText(summary);
            result.textContent = "Speaking...";
        } catch (error) {
            result.innerHTML = `<div class="error">Voice Error: ${error.message}</div>`;
        }
    });

    summarizeBtn?.addEventListener('click', async () => {
        try {
            const { text, apiKey, knowledgeLevel } = await extractingText('summary');
            if (!text || !apiKey) return;
            
            const prompt = `Provide ${knowledgeLevel}-level summary with:
            - 5-10 key points
            - ${knowledgeLevel === 'phd' ? 'Technical depth' : 'Simple language'}
            - Bullet format`;
            
            const summary = await getSummaryGemini(text, apiKey, prompt);
            result.innerHTML = formatContent(summary, 'summary');
        } catch (error) {
            result.innerHTML = `<div class="error">Summary Error: ${error.message}</div>`;
        }
    });

    saveBtn?.addEventListener("click", async function handleSave() {
        if (isDownloading) return;
        isDownloading = true;
        
        try {
            // Get the current result content
            const resultContent = document.getElementById('result').innerHTML;
            
            // Create a temporary div to extract clean text from HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = resultContent;
            const cleanText = tempDiv.textContent || tempDiv.innerText || '';
            
            // Download as PDF
            const success = await downloadAsPDF(cleanText, 'summary.pdf');
            
            if (!success) {
                showStatus('PDF generation failed', 'error');
            } else {
                showStatus('PDF saved successfully', 'success');
                // Send message AFTER successful download
                chrome.runtime.sendMessage({ 
                    type: "save_summary",
                    content: cleanText 
                });
            }
            
        } catch (error) {
            console.error('Save error:', error);
            showStatus('Save failed: ' + error.message, 'error');
        } finally {
            isDownloading = false;
        }
    });
});

