/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./src/js/pdfUtils.js":
/*!****************************!*\
  !*** ./src/js/pdfUtils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadAsPDF: () => (/* binding */ downloadAsPDF)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);



function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Generates a professional PDF document from text content
 * @param {string} text - The content to convert to PDF
 * @param {string} [filename="document.pdf"] - Output filename
 * @returns {Promise<boolean>} - True if successful, false if failed
 */
function downloadAsPDF(_x) {
  return _downloadAsPDF.apply(this, arguments);
}

/**
 * Adds a professional footer to the document
 * @param {jsPDF} doc - The PDF document instance
 * @param {number} margin - Left margin position
 */
function _downloadAsPDF() {
  _downloadAsPDF = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
    var filename,
      DOC_CONFIG,
      TYPOGRAPHY,
      _yield$import,
      jsPDF,
      doc,
      maxWidth,
      yPos,
      paragraphs,
      _iterator,
      _step,
      paragraph,
      lines,
      _iterator2,
      _step2,
      line,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filename = _args.length > 1 && _args[1] !== undefined ? _args[1] : "document.pdf";
          if (!(!text || typeof text !== 'string')) {
            _context.next = 4;
            break;
          }
          showErrorNotification('Invalid content for PDF generation');
          return _context.abrupt("return", false);
        case 4:
          _context.prev = 4;
          // Configuration constants
          DOC_CONFIG = {
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            margins: {
              top: 15,
              right: 15,
              bottom: 25,
              left: 15
            }
          };
          TYPOGRAPHY = {
            font: 'helvetica',
            style: 'normal',
            size: 11,
            color: [40, 40, 40],
            lineHeight: 7,
            paragraphSpacing: 4
          }; // Dynamically import jsPDF
          _context.next = 9;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fflate_esm_browser_js-node_modules_babel_runtime_helpers_esm_typeof_js"), __webpack_require__.e("vendors-node_modules_jspdf_dist_jspdf_es_min_js")]).then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js"));
        case 9:
          _yield$import = _context.sent;
          jsPDF = _yield$import.jsPDF;
          // Initialize document
          doc = new jsPDF(DOC_CONFIG); // Apply typography settings
          doc.setFont(TYPOGRAPHY.font, TYPOGRAPHY.style);
          doc.setFontSize(TYPOGRAPHY.size);
          doc.setTextColor.apply(doc, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(TYPOGRAPHY.color));
          doc.setLineHeightFactor(1.5);

          // Calculate available width
          maxWidth = doc.internal.pageSize.getWidth() - (DOC_CONFIG.margins.left + DOC_CONFIG.margins.right);
          yPos = DOC_CONFIG.margins.top; // Process content
          paragraphs = text.split('\n').filter(function (p) {
            return p.trim().length > 0;
          }).map(function (p) {
            return p.trim();
          });
          _iterator = _createForOfIteratorHelper(paragraphs);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              paragraph = _step.value;
              lines = doc.splitTextToSize(paragraph, maxWidth);
              _iterator2 = _createForOfIteratorHelper(lines);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  line = _step2.value;
                  // Check for page break
                  if (yPos > doc.internal.pageSize.getHeight() - DOC_CONFIG.margins.bottom) {
                    doc.addPage();
                    yPos = DOC_CONFIG.margins.top;
                  }
                  doc.text(line, DOC_CONFIG.margins.left, yPos);
                  yPos += TYPOGRAPHY.lineHeight;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              yPos += TYPOGRAPHY.paragraphSpacing;
            }

            // Add professional footer
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          addDocumentFooter(doc, DOC_CONFIG.margins.left);

          // Save PDF
          doc.save(filename);
          return _context.abrupt("return", true);
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](4);
          console.error('PDF generation error:', _context.t0);
          showErrorNotification("PDF generation failed: ".concat(_context.t0.message));
          return _context.abrupt("return", false);
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 26]]);
  }));
  return _downloadAsPDF.apply(this, arguments);
}
function addDocumentFooter(doc, margin) {
  var footerConfig = {
    text: "Generated on ".concat(new Date().toLocaleDateString()),
    fontSize: 9,
    color: [100, 100, 100],
    position: doc.internal.pageSize.getHeight() - 10
  };
  doc.setFontSize(footerConfig.fontSize);
  doc.setTextColor.apply(doc, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(footerConfig.color));
  doc.text(footerConfig.text, margin, footerConfig.position);
}

/**
 * Displays error notification to user
 * @param {string} message - Error message to display
 */
function showErrorNotification(message) {
  try {
    if (typeof chrome !== 'undefined' && chrome.notifications) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: 'PDF Export Error',
        message: message.substring(0, 150) // Limit message length
      });
    } else {
      alert(message.substring(0, 500)); // Fallback with longer message
    }
  } catch (err) {
    console.error('Error notification failed:', err);
  }
}

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pdfUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdfUtils.js */ "./src/js/pdfUtils.js");




var isDownloading = false;
document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  var result = document.getElementById('result');
  var statusMessage = document.getElementById('statusMessage');
  var quizBtn = document.getElementById("quizBtn");
  var citationBtn = document.getElementById("citationBtn");
  var voiceBtn = document.getElementById("voiceBtn");
  var relatedBtn = document.getElementById("relatedBtn");
  var summarizeBtn = document.getElementById('summarizeBtn');
  var saveBtn = document.getElementById("saveBtn");

  // Early exit if required elements missing
  if (!result || !summarizeBtn || !statusMessage) {
    console.error("Critical Error: Required elements not found");
    return;
  }

  // Content formatter
  function formatContent(content) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'summary';
    return "\n            <div class=\"content-".concat(type, "\">\n                ").concat(content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\:/g, '<strong>$1:</strong>').replace(/\* /g, '• ').replace(/\n/g, '<br>'), "\n            </div>\n        ");
  }

  // Related content formatter
  function formatRelatedContent(content) {
    return "\n            <div class=\"related-content\">\n                <h2>Related Content</h2>\n                <ul class=\"related-list\">\n                    ".concat(content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\:/g, '<h3>$1</h3>').replace(/\* /g, '<li>').replace(/\n/g, '<br>').replace(/(<li>.*?)(<br>|$)/g, '$1</li>$2'), "\n                </ul>\n            </div>\n        ");
  }

  // Status message handler
  function showStatus(message, type) {
    if (!statusMessage) return;
    statusMessage.textContent = message;
    statusMessage.className = "status-message ".concat(type);
    statusMessage.style.display = 'block';
    statusMessage.style.opacity = '1';
    setTimeout(function () {
      statusMessage.style.opacity = '0';
      setTimeout(function () {
        return statusMessage.style.display = 'none';
      }, 500);
    }, 5000);
  }

  // Text extraction function
  function extractingText() {
    return _extractingText.apply(this, arguments);
  } // Gemini API caller
  function _extractingText() {
    _extractingText = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var buttonType,
        _injectionResults$,
        loadingMessages,
        _yield$Promise,
        apiKey,
        _yield$Promise$knowle,
        knowledgeLevel,
        _yield$chrome$tabs$qu,
        _yield$chrome$tabs$qu2,
        tab,
        injectionResults,
        text,
        knowledgeLabels,
        _args7 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            buttonType = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 'summary';
            _context7.prev = 1;
            // Cancel any ongoing speech
            if (window.speechSynthesis) {
              window.speechSynthesis.cancel();
            }

            // Show loading state
            loadingMessages = {
              'summary': "Extracting text for summary...",
              'quiz': "Preparing text for quiz...",
              'citation': "Collecting text for citations...",
              'voice': "Processing text for voice...",
              'graph': "Analyzing text for graph...",
              'related': "Examining text for relations..."
            };
            result.innerHTML = "<div class=\"loading\">".concat(loadingMessages[buttonType] || "Processing text...", "</div>");

            // Get stored settings
            _context7.next = 7;
            return new Promise(function (resolve) {
              chrome.storage.sync.get(['apiKey', 'knowledgeLevel'], resolve);
            });
          case 7:
            _yield$Promise = _context7.sent;
            apiKey = _yield$Promise.apiKey;
            _yield$Promise$knowle = _yield$Promise.knowledgeLevel;
            knowledgeLevel = _yield$Promise$knowle === void 0 ? 'undergrad' : _yield$Promise$knowle;
            if (apiKey) {
              _context7.next = 15;
              break;
            }
            showStatus('API key required', 'error');
            result.innerHTML = '<div class="error">Please configure your API key in settings</div>';
            return _context7.abrupt("return", {
              text: null,
              apiKey: null,
              knowledgeLevel: null
            });
          case 15:
            _context7.next = 17;
            return chrome.tabs.query({
              active: true,
              currentWindow: true
            });
          case 17:
            _yield$chrome$tabs$qu = _context7.sent;
            _yield$chrome$tabs$qu2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$chrome$tabs$qu, 1);
            tab = _yield$chrome$tabs$qu2[0];
            if (tab) {
              _context7.next = 22;
              break;
            }
            throw new Error("No active tab found");
          case 22:
            _context7.next = 24;
            return chrome.scripting.executeScript({
              target: {
                tabId: tab.id
              },
              func: function func() {
                var selectors = ['article', '.post-content', '.article-content', 'main'];
                var contentEl = selectors.map(function (s) {
                  return document.querySelector(s);
                }).find(function (el) {
                  return el;
                }) || document.body;
                return contentEl.innerText.replace(/\s+/g, ' ').trim();
              }
            });
          case 24:
            injectionResults = _context7.sent;
            text = (_injectionResults$ = injectionResults[0]) === null || _injectionResults$ === void 0 ? void 0 : _injectionResults$.result;
            if (text) {
              _context7.next = 28;
              break;
            }
            throw new Error("No extractable text found");
          case 28:
            // Show generation status
            knowledgeLabels = {
              'child': 'for children',
              'teen': 'for teens',
              'undergrad': 'for undergrads',
              'graduate': 'for grad students',
              'phd': 'for experts'
            };
            result.innerHTML = "\n                <div class=\"generating\">\n                    ".concat(loadingMessages[buttonType] || "Generating content", " \n                    ").concat(knowledgeLabels[knowledgeLevel] || '', "\n                </div>\n            ");
            return _context7.abrupt("return", {
              text: text,
              apiKey: apiKey,
              knowledgeLevel: knowledgeLevel,
              buttonType: buttonType
            });
          case 33:
            _context7.prev = 33;
            _context7.t0 = _context7["catch"](1);
            console.error("Extraction error:", _context7.t0);
            result.innerHTML = "<div class=\"error\">".concat(_context7.t0.message, "</div>");
            return _context7.abrupt("return", {
              text: null,
              apiKey: null,
              knowledgeLevel: null
            });
          case 38:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 33]]);
    }));
    return _extractingText.apply(this, arguments);
  }
  function getSummaryGemini(_x, _x2, _x3) {
    return _getSummaryGemini.apply(this, arguments);
  }
  function _getSummaryGemini() {
    _getSummaryGemini = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(text, apiKey, prompt) {
      var model,
        _data$candidates,
        apiUrl,
        response,
        _errorData$error,
        errorData,
        data,
        _args8 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            model = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : "gemini-2.0-flash";
            _context8.prev = 1;
            apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/".concat(model, ":generateContent");
            _context8.next = 5;
            return fetch("".concat(apiUrl, "?key=").concat(apiKey), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: "".concat(prompt, "\n\n").concat(text.substring(0, 30000))
                  }]
                }]
              })
            });
          case 5:
            response = _context8.sent;
            if (response.ok) {
              _context8.next = 11;
              break;
            }
            _context8.next = 9;
            return response.json()["catch"](function () {
              return {};
            });
          case 9:
            errorData = _context8.sent;
            throw new Error(((_errorData$error = errorData.error) === null || _errorData$error === void 0 ? void 0 : _errorData$error.message) || "API Error ".concat(response.status));
          case 11:
            _context8.next = 13;
            return response.json();
          case 13:
            data = _context8.sent;
            return _context8.abrupt("return", ((_data$candidates = data.candidates) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.content) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.parts) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 ? void 0 : _data$candidates.text) || "No content generated");
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](1);
            console.error("API Error:", _context8.t0);
            throw new Error("Failed to get response: ".concat(_context8.t0.message));
          case 21:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 17]]);
    }));
    return _getSummaryGemini.apply(this, arguments);
  }
  function getSummaryDeepSeek(_x4, _x5, _x6) {
    return _getSummaryDeepSeek.apply(this, arguments);
  } // Text-to-speech handler
  function _getSummaryDeepSeek() {
    _getSummaryDeepSeek = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9(text, apiKey, prompt) {
      var model,
        _data$choices,
        apiUrl,
        response,
        _errorData$error2,
        errorData,
        data,
        _args9 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            model = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : 'deepseek-chat';
            _context9.prev = 1;
            apiUrl = 'https://api.deepseek.com/v1/chat/completions';
            _context9.next = 5;
            return fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(apiKey)
              },
              body: JSON.stringify({
                model: model,
                messages: [{
                  role: "system",
                  content: "You are a helpful assistant."
                }, {
                  role: "user",
                  content: "".concat(prompt, "\n\n").concat(text.substring(0, 30000))
                }],
                stream: false
              })
            });
          case 5:
            response = _context9.sent;
            if (response.ok) {
              _context9.next = 11;
              break;
            }
            _context9.next = 9;
            return response.json()["catch"](function () {
              return {};
            });
          case 9:
            errorData = _context9.sent;
            throw new Error(((_errorData$error2 = errorData.error) === null || _errorData$error2 === void 0 ? void 0 : _errorData$error2.message) || "API Error ".concat(response.status));
          case 11:
            _context9.next = 13;
            return response.json();
          case 13:
            data = _context9.sent;
            return _context9.abrupt("return", ((_data$choices = data.choices) === null || _data$choices === void 0 || (_data$choices = _data$choices[0]) === null || _data$choices === void 0 || (_data$choices = _data$choices.message) === null || _data$choices === void 0 ? void 0 : _data$choices.content) || "No content generated");
          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](1);
            console.error("DeepSeek API Error:", _context9.t0);
            throw new Error("Failed to get response: ".concat(_context9.t0.message));
          case 21:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 17]]);
    }));
    return _getSummaryDeepSeek.apply(this, arguments);
  }
  function speakText(_x7) {
    return _speakText.apply(this, arguments);
  } // Button Handlers
  function _speakText() {
    _speakText = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee0(text) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            if (window.speechSynthesis) {
              _context0.next = 2;
              break;
            }
            throw new Error("Speech synthesis not supported");
          case 2:
            return _context0.abrupt("return", new Promise(function (resolve, reject) {
              var voicesReady = function voicesReady() {
                var voices = speechSynthesis.getVoices();
                if (voices.length === 0) {
                  reject(new Error("No voices available"));
                  return;
                }
                var utterance = new SpeechSynthesisUtterance(text.substring(0, 300));
                utterance.voice = voices.find(function (v) {
                  return v.name.includes('Google');
                }) || voices[0];
                utterance.rate = 0.95;
                utterance.pitch = 1.1;
                utterance.volume = 0.9;
                utterance.onend = resolve;
                utterance.onerror = reject;
                speechSynthesis.speak(utterance);
              };

              // Handle voice loading
              var voices = speechSynthesis.getVoices();
              if (voices.length) {
                voicesReady();
              } else {
                speechSynthesis.onvoiceschanged = voicesReady;
              }
            }));
          case 3:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }));
    return _speakText.apply(this, arguments);
  }
  quizBtn === null || quizBtn === void 0 || quizBtn.addEventListener("click", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var _yield$extractingText, text, apiKey, knowledgeLevel, prompt, quizContent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return extractingText('quiz');
        case 3:
          _yield$extractingText = _context.sent;
          text = _yield$extractingText.text;
          apiKey = _yield$extractingText.apiKey;
          knowledgeLevel = _yield$extractingText.knowledgeLevel;
          if (!(!text || !apiKey)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return");
        case 9:
          prompt = "Create 5 quiz questions (with 4 options each, mark correct answer) \n            at ".concat(knowledgeLevel, " level about this text:");
          _context.next = 12;
          return getSummaryGemini(text, apiKey, prompt);
        case 12:
          quizContent = _context.sent;
          result.innerHTML = formatContent(quizContent, 'quiz');
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          result.innerHTML = "<div class=\"error\">Quiz Error: ".concat(_context.t0.message, "</div>");
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  })));
  citationBtn === null || citationBtn === void 0 || citationBtn.addEventListener("click", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var _yield$extractingText2, text, apiKey, buttonType, knowledgeLevel, prompt, citations;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return extractingText('citation');
        case 3:
          _yield$extractingText2 = _context2.sent;
          text = _yield$extractingText2.text;
          apiKey = _yield$extractingText2.apiKey;
          buttonType = _yield$extractingText2.buttonType;
          knowledgeLevel = _yield$extractingText2.knowledgeLevel;
          if (text) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return");
        case 10:
          prompt = "Generate ".concat(knowledgeLevel, "-level citations in APA, MLA and Chicago styles.\n            ").concat(knowledgeLevel === 'child' ? 'Use simple explanations:' : 'Include technical details:');
          _context2.next = 13;
          return getSummaryGemini(text, apiKey, prompt);
        case 13:
          citations = _context2.sent;
          result.innerHTML = formatContent(citations, 'citation');
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          result.innerHTML = "<div class=\"error\">Citation Error: ".concat(_context2.t0.message, "</div>");
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  })));
  relatedBtn === null || relatedBtn === void 0 || relatedBtn.addEventListener("click", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
    var _yield$extractingText3, text, apiKey, knowledgeLevel, prompt, related;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return extractingText('related');
        case 3:
          _yield$extractingText3 = _context3.sent;
          text = _yield$extractingText3.text;
          apiKey = _yield$extractingText3.apiKey;
          knowledgeLevel = _yield$extractingText3.knowledgeLevel;
          if (text) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return");
        case 9:
          prompt = "Suggest 3-5 ".concat(knowledgeLevel, "-appropriate related topics with:\n            \u2022 Clear titles\n            \u2022 Connection explanations\n            \u2022 ").concat(knowledgeLevel === 'phd' ? 'Academic references' : 'Simple examples');
          _context3.next = 12;
          return getSummaryGemini(text, apiKey, prompt);
        case 12:
          related = _context3.sent;
          result.innerHTML = formatRelatedContent(related);
          _context3.next = 19;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          result.innerHTML = "<div class=\"error\">Related Error: ".concat(_context3.t0.message, "</div>");
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  })));
  voiceBtn === null || voiceBtn === void 0 || voiceBtn.addEventListener("click", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
    var _yield$extractingText4, text, apiKey, knowledgeLevel, prompt, summary;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return extractingText('voice');
        case 3:
          _yield$extractingText4 = _context4.sent;
          text = _yield$extractingText4.text;
          apiKey = _yield$extractingText4.apiKey;
          knowledgeLevel = _yield$extractingText4.knowledgeLevel;
          if (text) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return");
        case 9:
          prompt = "Create a ".concat(knowledgeLevel, "-level spoken summary with:\n            - Conversational tone\n            - ").concat(knowledgeLevel === 'child' ? 'Simple words' : 'Appropriate terminology', "\n            - Clear structure");
          _context4.next = 12;
          return getSummaryGemini(text, apiKey, prompt);
        case 12:
          summary = _context4.sent;
          _context4.next = 15;
          return speakText(summary);
        case 15:
          result.textContent = "Speaking...";
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](0);
          result.innerHTML = "<div class=\"error\">Voice Error: ".concat(_context4.t0.message, "</div>");
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 18]]);
  })));
  summarizeBtn === null || summarizeBtn === void 0 || summarizeBtn.addEventListener('click', /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
    var _yield$extractingText5, text, apiKey, knowledgeLevel, prompt, summary;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return extractingText('summary');
        case 3:
          _yield$extractingText5 = _context5.sent;
          text = _yield$extractingText5.text;
          apiKey = _yield$extractingText5.apiKey;
          knowledgeLevel = _yield$extractingText5.knowledgeLevel;
          if (!(!text || !apiKey)) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return");
        case 9:
          prompt = "Provide ".concat(knowledgeLevel, "-level summary with:\n            - 5-10 key points\n            - ").concat(knowledgeLevel === 'phd' ? 'Technical depth' : 'Simple language', "\n            - Bullet format");
          _context5.next = 12;
          return getSummaryGemini(text, apiKey, prompt);
        case 12:
          summary = _context5.sent;
          result.innerHTML = formatContent(summary, 'summary');
          _context5.next = 19;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          result.innerHTML = "<div class=\"error\">Summary Error: ".concat(_context5.t0.message, "</div>");
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 16]]);
  })));
  saveBtn === null || saveBtn === void 0 || saveBtn.addEventListener("click", /*#__PURE__*/function () {
    var _handleSave = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var resultContent, tempDiv, cleanText, success;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!isDownloading) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            isDownloading = true;
            _context6.prev = 3;
            // Get the current result content
            resultContent = document.getElementById('result').innerHTML; // Create a temporary div to extract clean text from HTML
            tempDiv = document.createElement('div');
            tempDiv.innerHTML = resultContent;
            cleanText = tempDiv.textContent || tempDiv.innerText || ''; // Download as PDF
            _context6.next = 10;
            return (0,_pdfUtils_js__WEBPACK_IMPORTED_MODULE_3__.downloadAsPDF)(cleanText, 'summary.pdf');
          case 10:
            success = _context6.sent;
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
            _context6.next = 18;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](3);
            console.error('Save error:', _context6.t0);
            showStatus('Save failed: ' + _context6.t0.message, 'error');
          case 18:
            _context6.prev = 18;
            isDownloading = false;
            return _context6.finish(18);
          case 21:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[3, 14, 18, 21]]);
    }));
    function handleSave() {
      return _handleSave.apply(this, arguments);
    }
    return handleSave;
  }());
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "chrome_extension:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e"], () => (__webpack_require__("./src/js/popup.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map