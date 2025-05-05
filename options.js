document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optionsForm');
    const apiKeyInput = document.getElementById('apiKey');
    const saveBtn = document.getElementById('saveBtn');
    const testApiBtn = document.getElementById('testApiBtn');
    const statusMessage = document.getElementById('statusMessage');
    const knowledgeLevel = document.getElementById('knowledgeLevel');

    // 1. Load saved settings when options page opens
    chrome.storage.sync.get(['apiKey', 'knowledgeLevel'], (result) => {
        if (result.apiKey) {
            apiKeyInput.value = result.apiKey;
            showStatus('Loaded saved settings', 'success');
        } else {
            showStatus('No API key found. Please add one.', 'warning');
        }
        
        if (result.knowledgeLevel) {
            knowledgeLevel.value = result.knowledgeLevel;
        }
    });

    // 2. Save settings to storage
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const apiKey = apiKeyInput.value.trim();
        const selectedKnowledgeLevel = knowledgeLevel.value;
        
        if (!apiKey) {
            showStatus('API key cannot be empty', 'error');
            return;
        }

        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;

        try {
            await chrome.storage.sync.set({ 
                apiKey,
                knowledgeLevel: selectedKnowledgeLevel
            });
            showStatus('Settings saved successfully!' , 'success');
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

    // 3. Test API connection with real validation
    testApiBtn.addEventListener('click', async () => {
        const apiKey = apiKeyInput.value.trim();
        
        if (!apiKey) {
            showStatus('Please enter an API key first', 'error');
            apiKeyInput.focus();
            return;
        }

        testApiBtn.textContent = 'Testing...';
        testApiBtn.disabled = true;

        try {
            const responseText = await testGeminiApi(apiKey);
            showStatus('✅ API key is valid! Response: ' + responseText, 'success');
        } catch (error) {
            showStatus(`❌ API Error: ${error.message}`, 'error');
            console.error('API test error:', error);
        } finally {
            testApiBtn.textContent = 'Test API Connection';
            testApiBtn.disabled = false;
        }
    });

    // Real API test function
    async function testGeminiApi(apiKey) {
        const prompt = 'Explain how AI works in one sentence';
        const model = 'gemini-1.5-flash'; // Updated to current model
        
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
});