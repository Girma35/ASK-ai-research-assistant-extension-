document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optionsForm');
    const apiKeyInput = document.getElementById('apiKey');
    const deepseekApiKeyInput = document.getElementById('deepseekApiKey');
    const saveBtn = document.getElementById('saveBtn');
    const testGeminiApiBtn = document.getElementById('testGeminiApiBtn');
    const testDeepseekApiBtn = document.getElementById('testDeepseekApiBtn');
    const statusMessage = document.getElementById('statusMessage');
    const knowledgeLevel = document.getElementById('knowledgeLevel');
    const aiOptions = document.querySelectorAll('.ai-option');
    const selectedAIInput = document.getElementById('selectedAI');
    const geminiFields = document.querySelector('.gemini-fields');
    const deepseekFields = document.querySelector('.deepseek-fields');
    const testButtons = document.getElementById('testButtons');
    const geminiIcon = document.getElementById('gemini-icon');
    const deepseekIcon = document.getElementById('deepseek-icon');



    const setFallbackIcon = (imgElement, color) => {
        imgElement.onerror = null; // Prevent infinite loop if fallback fails
        imgElement.src = `data:image/svg+xml;base64,${btoa(
            `<svg width="40" height="40" viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"/>
                <text x="12" y="16" font-size="10" text-anchor="middle" fill="white">
                    ${color === '#4285F4' ? 'G' : 'D'}
                </text>
            </svg>`
        )}`;
    };

    geminiIcon.onerror = () => setFallbackIcon(geminiIcon, '#4285F4');
    deepseekIcon.onerror = () => setFallbackIcon(deepseekIcon, '#00A67E');

    try {
        geminiIcon.src = chrome.runtime.getURL('images/gemini-icon.png');
        deepseekIcon.src = chrome.runtime.getURL('images/deepseek-icon.png');
    } catch (error) {
        console.error('Error loading extension images:', error);
        
        setFallbackIcon(geminiIcon, '#4285F4');
        setFallbackIcon(deepseekIcon, '#00A67E');
    }


    aiOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Update UI
            aiOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Update hidden input
            const selectedAI = this.dataset.ai;
            selectedAIInput.value = selectedAI;
            
            // Toggle fields visibility
            if (selectedAI === 'gemini') {
                geminiFields.classList.add('active');
                deepseekFields.classList.remove('active');
                testButtons.classList.add('active');
                testGeminiApiBtn.style.display = 'block';
                testDeepseekApiBtn.style.display = 'none';
            } else {
                geminiFields.classList.remove('active');
                deepseekFields.classList.add('active');
                testButtons.classList.add('active');
                testGeminiApiBtn.style.display = 'none';
                testDeepseekApiBtn.style.display = 'block';
            }
        });
    });


    document.querySelector('.ai-option[data-ai="gemini"]').click();
    
    // Initialize AI selection
    function initAISelection() {
        aiOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Update UI
                aiOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                // Update hidden input
                const selectedAI = this.dataset.ai;
                selectedAIInput.value = selectedAI;
                
                // Show appropriate fields and test buttons
                if (selectedAI === 'gemini') {
                    geminiFields.classList.add('active');
                    deepseekFields.classList.remove('active');
                    testButtons.classList.add('active');
                    testGeminiApiBtn.style.display = 'block';
                    testDeepseekApiBtn.style.display = 'none';
                } else {
                    geminiFields.classList.remove('active');
                    deepseekFields.classList.add('active');
                    testButtons.classList.add('active');
                    testGeminiApiBtn.style.display = 'none';
                    testDeepseekApiBtn.style.display = 'block';
                }
            });
        });
    }

    // 1. Load saved settings when options page opens
    function loadSettings() {
        chrome.storage.sync.get(['apiKey', 'deepseekApiKey', 'knowledgeLevel', 'selectedAI'], (result) => {
            if (result.apiKey) {
                apiKeyInput.value = result.apiKey;
            }
            if (result.deepseekApiKey) {
                deepseekApiKeyInput.value = result.deepseekApiKey;
            }
            if (result.knowledgeLevel) {
                knowledgeLevel.value = result.knowledgeLevel;
            }
            if (result.selectedAI) {
                selectedAIInput.value = result.selectedAI;
                // Trigger click on the selected AI option
                document.querySelector(`.ai-option[data-ai="${result.selectedAI}"]`).click();
            } else {
                // Default to Gemini
                document.querySelector('.ai-option[data-ai="gemini"]').click();
            }
            
            showStatus('Settings loaded', 'success');
        });
    }

    // 2. Save settings to storage
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const selectedAI = selectedAIInput.value;
        const apiKey = selectedAI === 'gemini' ? apiKeyInput.value.trim() : deepseekApiKeyInput.value.trim();
        const selectedKnowledgeLevel = knowledgeLevel.value;
        
        if (!apiKey) {
            showStatus(`${selectedAI === 'gemini' ? 'Gemini' : 'DeepSeek'} API key cannot be empty`, 'error');
            return;
        }

        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;

        try {
            const settingsToSave = {
                knowledgeLevel: selectedKnowledgeLevel,
                selectedAI: selectedAI
            };

            // Only save the relevant API key
            if (selectedAI === 'gemini') {
                settingsToSave.apiKey = apiKey;
                // Clear DeepSeek key if switching from DeepSeek to Gemini
                settingsToSave.deepseekApiKey = '';
            } else {
                settingsToSave.deepseekApiKey = apiKey;
                // Clear Gemini key if switching from Gemini to DeepSeek
                settingsToSave.apiKey = '';
            }

            await chrome.storage.sync.set(settingsToSave);
            showStatus('Settings saved successfully!', 'success');
            saveBtn.textContent = 'Saved!';
        } catch (error) {
            showStatus(`Failed to save: ${error.message}`, 'error');
            saveBtn.textContent = 'Save Failed';
            console.error('Storage error:', error);
        } finally {
            setTimeout(() => {
                saveBtn.textContent = 'Save Settings';
                saveBtn.disabled = false;
            }, 2000);
        }
    });

    // 3. Test Gemini API connection
    testGeminiApiBtn.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey) {
            showStatus('Please enter a Gemini API key first', 'error');
            apiKeyInput.focus();
            return;
        }

        testGeminiApiBtn.textContent = 'Testing Gemini...';
        testGeminiApiBtn.disabled = true;

        try {
            const responseText = await testGeminiApi(apiKey);
            showStatus('✅ Gemini API key is valid! Response: ' + responseText, 'success');
        } catch (error) {
            showStatus(`❌ Gemini API Error: ${error.message}`, 'error');
            console.error('Gemini API test error:', error);
        } finally {
            testGeminiApiBtn.textContent = 'Test Gemini API';
            testGeminiApiBtn.disabled = false;
        }
    });

    // 4. Test DeepSeek API connection
    testDeepseekApiBtn.addEventListener('click', async () => {
        const apiKey = deepseekApiKeyInput.value.trim();
        
        if (!apiKey) {
            showStatus('Please enter a DeepSeek API key first', 'error');
            deepseekApiKeyInput.focus();
            return;
        }

        testDeepseekApiBtn.textContent = 'Testing DeepSeek...';
        testDeepseekApiBtn.disabled = true;

        try {
            const responseText = await testDeepseekApi(apiKey);
            showStatus('✅ DeepSeek API key is valid! Response: ' + responseText, 'success');
        } catch (error) {
            showStatus(`❌ DeepSeek API Error: ${error.message}`, 'error');
            console.error('DeepSeek API test error:', error);
        } finally {
            testDeepseekApiBtn.textContent = 'Test DeepSeek API';
            testDeepseekApiBtn.disabled = false;
        }
    });

    // Gemini API test function
    async function testGeminiApi(apiKey) {
        const prompt = 'Explain how AI works in one sentence';
        const model = 'gemini-1.5-flash';
        
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }

    // DeepSeek API test function
    async function testDeepseekApi(apiKey) {
        const prompt = 'Explain how AI works in one sentence';
        
        const response = await fetch(
            'https://api.deepseek.com/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 100
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }

    // Status message helper
    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`;
        statusMessage.style.display = 'block';
        statusMessage.style.opacity = '1';
        
        setTimeout(() => {
            statusMessage.style.opacity = '0';
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 500);
        }, 5000);
    }

    // Initialize the page
    initAISelection();
    loadSettings();
});