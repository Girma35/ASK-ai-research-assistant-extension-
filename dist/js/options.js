/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/options.js":
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('optionsForm');
  var apiKeyInput = document.getElementById('apiKey');
  var deepseekApiKeyInput = document.getElementById('deepseekApiKey');
  var saveBtn = document.getElementById('saveBtn');
  var testGeminiApiBtn = document.getElementById('testGeminiApiBtn');
  var testDeepseekApiBtn = document.getElementById('testDeepseekApiBtn');
  var statusMessage = document.getElementById('statusMessage');
  var knowledgeLevel = document.getElementById('knowledgeLevel');
  var aiOptions = document.querySelectorAll('.ai-option');
  var selectedAIInput = document.getElementById('selectedAI');
  var geminiFields = document.querySelector('.gemini-fields');
  var deepseekFields = document.querySelector('.deepseek-fields');
  var testButtons = document.getElementById('testButtons');
  var geminiIcon = document.getElementById('gemini-icon');
  var deepseekIcon = document.getElementById('deepseek-icon');
  var setFallbackIcon = function setFallbackIcon(imgElement, color) {
    imgElement.onerror = null; // Prevent infinite loop if fallback fails
    imgElement.src = "data:image/svg+xml;base64,".concat(btoa("<svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"".concat(color, "\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n                <text x=\"12\" y=\"16\" font-size=\"10\" text-anchor=\"middle\" fill=\"white\">\n                    ").concat(color === '#4285F4' ? 'G' : 'D', "\n                </text>\n            </svg>")));
  };
  geminiIcon.onerror = function () {
    return setFallbackIcon(geminiIcon, '#4285F4');
  };
  deepseekIcon.onerror = function () {
    return setFallbackIcon(deepseekIcon, '#00A67E');
  };
  try {
    geminiIcon.src = chrome.runtime.getURL('images/gemini-icon.png');
    deepseekIcon.src = chrome.runtime.getURL('images/deepseek-icon.png');
  } catch (error) {
    console.error('Error loading extension images:', error);
    setFallbackIcon(geminiIcon, '#4285F4');
    setFallbackIcon(deepseekIcon, '#00A67E');
  }
  aiOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      // Update UI
      aiOptions.forEach(function (opt) {
        return opt.classList.remove('selected');
      });
      this.classList.add('selected');

      // Update hidden input
      var selectedAI = this.dataset.ai;
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
    aiOptions.forEach(function (option) {
      option.addEventListener('click', function () {
        // Update UI
        aiOptions.forEach(function (opt) {
          return opt.classList.remove('selected');
        });
        this.classList.add('selected');

        // Update hidden input
        var selectedAI = this.dataset.ai;
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
    chrome.storage.sync.get(['apiKey', 'deepseekApiKey', 'knowledgeLevel', 'selectedAI'], function (result) {
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
        document.querySelector(".ai-option[data-ai=\"".concat(result.selectedAI, "\"]")).click();
      } else {
        // Default to Gemini
        document.querySelector('.ai-option[data-ai="gemini"]').click();
      }
      showStatus('Settings loaded', 'success');
    });
  }

  // 2. Save settings to storage
  form.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var selectedAI, apiKey, selectedKnowledgeLevel, settingsToSave;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            selectedAI = selectedAIInput.value;
            apiKey = selectedAI === 'gemini' ? apiKeyInput.value.trim() : deepseekApiKeyInput.value.trim();
            selectedKnowledgeLevel = knowledgeLevel.value;
            if (apiKey) {
              _context.next = 7;
              break;
            }
            showStatus("".concat(selectedAI === 'gemini' ? 'Gemini' : 'DeepSeek', " API key cannot be empty"), 'error');
            return _context.abrupt("return");
          case 7:
            saveBtn.textContent = 'Saving...';
            saveBtn.disabled = true;
            _context.prev = 9;
            settingsToSave = {
              knowledgeLevel: selectedKnowledgeLevel,
              selectedAI: selectedAI
            }; // Only save the relevant API key
            if (selectedAI === 'gemini') {
              settingsToSave.apiKey = apiKey;
              // Clear DeepSeek key if switching from DeepSeek to Gemini
              settingsToSave.deepseekApiKey = '';
            } else {
              settingsToSave.deepseekApiKey = apiKey;
              // Clear Gemini key if switching from Gemini to DeepSeek
              settingsToSave.apiKey = '';
            }
            _context.next = 14;
            return chrome.storage.sync.set(settingsToSave);
          case 14:
            showStatus('Settings saved successfully!', 'success');
            saveBtn.textContent = 'Saved!';
            _context.next = 23;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](9);
            showStatus("Failed to save: ".concat(_context.t0.message), 'error');
            saveBtn.textContent = 'Save Failed';
            console.error('Storage error:', _context.t0);
          case 23:
            _context.prev = 23;
            setTimeout(function () {
              saveBtn.textContent = 'Save Settings';
              saveBtn.disabled = false;
            }, 2000);
            return _context.finish(23);
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[9, 18, 23, 26]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  // 3. Test Gemini API connection
  testGeminiApiBtn.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var apiKey, responseText;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          apiKey = apiKeyInput.value.trim();
          if (apiKey) {
            _context2.next = 5;
            break;
          }
          showStatus('Please enter a Gemini API key first', 'error');
          apiKeyInput.focus();
          return _context2.abrupt("return");
        case 5:
          testGeminiApiBtn.textContent = 'Testing Gemini...';
          testGeminiApiBtn.disabled = true;
          _context2.prev = 7;
          _context2.next = 10;
          return testGeminiApi(apiKey);
        case 10:
          responseText = _context2.sent;
          showStatus('✅ Gemini API key is valid! Response: ' + responseText, 'success');
          _context2.next = 18;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](7);
          showStatus("\u274C Gemini API Error: ".concat(_context2.t0.message), 'error');
          console.error('Gemini API test error:', _context2.t0);
        case 18:
          _context2.prev = 18;
          testGeminiApiBtn.textContent = 'Test Gemini API';
          testGeminiApiBtn.disabled = false;
          return _context2.finish(18);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[7, 14, 18, 22]]);
  })));

  // 4. Test DeepSeek API connection
  testDeepseekApiBtn.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var apiKey, responseText;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          apiKey = deepseekApiKeyInput.value.trim();
          if (apiKey) {
            _context3.next = 5;
            break;
          }
          showStatus('Please enter a DeepSeek API key first', 'error');
          deepseekApiKeyInput.focus();
          return _context3.abrupt("return");
        case 5:
          testDeepseekApiBtn.textContent = 'Testing DeepSeek...';
          testDeepseekApiBtn.disabled = true;
          _context3.prev = 7;
          _context3.next = 10;
          return testDeepseekApi(apiKey);
        case 10:
          responseText = _context3.sent;
          showStatus('✅ DeepSeek API key is valid! Response: ' + responseText, 'success');
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](7);
          showStatus("\u274C DeepSeek API Error: ".concat(_context3.t0.message), 'error');
          console.error('DeepSeek API test error:', _context3.t0);
        case 18:
          _context3.prev = 18;
          testDeepseekApiBtn.textContent = 'Test DeepSeek API';
          testDeepseekApiBtn.disabled = false;
          return _context3.finish(18);
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[7, 14, 18, 22]]);
  })));

  // Gemini API test function
  function testGeminiApi(_x2) {
    return _testGeminiApi.apply(this, arguments);
  } // DeepSeek API test function
  function _testGeminiApi() {
    _testGeminiApi = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(apiKey) {
      var prompt, model, response, _errorData$error, errorData, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            prompt = 'Explain how AI works in one sentence';
            model = 'gemini-1.5-flash';
            _context4.next = 4;
            return fetch("https://generativelanguage.googleapis.com/v1beta/models/".concat(model, ":generateContent?key=").concat(apiKey), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: prompt
                  }]
                }]
              })
            });
          case 4:
            response = _context4.sent;
            if (response.ok) {
              _context4.next = 10;
              break;
            }
            _context4.next = 8;
            return response.json();
          case 8:
            errorData = _context4.sent;
            throw new Error(((_errorData$error = errorData.error) === null || _errorData$error === void 0 ? void 0 : _errorData$error.message) || "HTTP ".concat(response.status));
          case 10:
            _context4.next = 12;
            return response.json();
          case 12:
            data = _context4.sent;
            return _context4.abrupt("return", data.candidates[0].content.parts[0].text);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _testGeminiApi.apply(this, arguments);
  }
  function testDeepseekApi(_x3) {
    return _testDeepseekApi.apply(this, arguments);
  } // Status message helper
  function _testDeepseekApi() {
    _testDeepseekApi = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(apiKey) {
      var prompt, response, _errorData$error2, errorData, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            prompt = 'Explain how AI works in one sentence';
            _context5.next = 3;
            return fetch('https://api.deepseek.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiKey)
              },
              body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [{
                  role: 'user',
                  content: prompt
                }],
                temperature: 0.7,
                max_tokens: 100
              })
            });
          case 3:
            response = _context5.sent;
            if (response.ok) {
              _context5.next = 9;
              break;
            }
            _context5.next = 7;
            return response.json();
          case 7:
            errorData = _context5.sent;
            throw new Error(((_errorData$error2 = errorData.error) === null || _errorData$error2 === void 0 ? void 0 : _errorData$error2.message) || "HTTP ".concat(response.status));
          case 9:
            _context5.next = 11;
            return response.json();
          case 11:
            data = _context5.sent;
            return _context5.abrupt("return", data.choices[0].message.content);
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _testDeepseekApi.apply(this, arguments);
  }
  function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = "status-message ".concat(type);
    statusMessage.style.display = 'block';
    statusMessage.style.opacity = '1';
    setTimeout(function () {
      statusMessage.style.opacity = '0';
      setTimeout(function () {
        statusMessage.style.display = 'none';
      }, 500);
    }, 5000);
  }

  // Initialize the page
  initAISelection();
  loadSettings();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"options": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension"] = self["webpackChunkchrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e"], () => (__webpack_require__("./src/js/options.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map