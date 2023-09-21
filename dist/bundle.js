/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin:0;\n\n}\n\n:root{\n    --colorA: rgb(0, 163, 217);\n    --colorB: rgb(0, 255, 255);\n    --colorC: rgb(176, 177, 177);\n    --colorD: rgb(255, 255, 255);\n    --colorE: rgb(112, 112, 112);\n\n\n    --fontSizeA: 44px;\n    --fontSizeB: 36px;\n    --fontSizeC: 24px;\n    --fontSizeD: 18px;\n}\n\n#content{\n    height:100vh;\n    width:100vw;\n    display:flex;\n    flex-direction:column;\n    position:relative;\n}\n\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 24\n}\n\n\n#header{\n    /* background-color: rgb(0, 255, 255); */\n    grid-column-start: 1;\n    grid-column-end: 3;\n    background-image: linear-gradient(to top left,var(--colorA), var(--colorB));\n    display:flex;\n    height: auto;\n}\n\n#title{\n    color: var(--colorD);\n    font-size:var(--fontSizeA);\n    padding:16px;\n    margin-top:auto;\n}\n\n#body{\n    display:flex;\n    flex-direction:row;\n    flex-grow:1;\n}\n\n#sidebar{\n    background-color: var(--colorC);\n    width:350px;\n    /* min-width:300px; */\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n\n    color:var(--colorD);\n}\n.addBtn{\n    display:flex;\n    flex-direction:row;\n    justify-content:center;\n    align-content:center;\n    cursor:pointer;\n    font-size: var(--fontSizeD);\n    transition: color .7s, font-size .7s;\n}\n\n.addBtn:hover{\n    color:var(--colorB);\n    font-size: var(--fontSizeC);\n}\n\n.formDiv{\n    height:50vh;\n    width:70vw;\n    background-color: var(--colorC);\n    display:none;\n    justify-content: center;\n    color: var(--colorE);\n    border: 3px solid var(--colorA);\n    background-color: var(--colorD);\n    border-radius:15px;\n    position:absolute;\n    top:50%;\n    left:50%;\n    transform:translate(-50%, -50%);\n    flex-direction:column;\n    justify-content:flex-start;\n    align-items:center;\n}\n\n.formDiv .title {\n    font-size: var(--fontSizeC);\n}\n\n.form{\n    display:flex;\n    flex-direction:column;\n    align-items:flex-start;\n    width:50vw;\n}\n\n.formContainer {\n    margin:3px;\n}\n\n.button{\n    display:inline;\n    margin:16px;\n    cursor:pointer;\n}\n\n\n.title{\n    font-size: var(--fontSizeC);\n    margin:8px;\n    padding-left: 36px;\n    padding-right: 36px;\n    padding-bottom:8px;\n}\n\n#sidebarTitle{\n    border-bottom:solid var(--colorD) 3px;\n}\n\n#bodyTitle{\n    border-bottom:solid var(--colorC) 3px;\n}\n\n\n#mainBody{\n    background-color: var(--colorD);\n    display:flex;\n    color:var(--colorE);\n    flex-direction:column;\n    align-items:center;\n    flex-grow:1;\n    min-width:500px;\n}\n\n#bodyTitle{\n}\n\n#footer{\n    grid-column-start: 1;\n    grid-column-end: 3;\n    background-image: linear-gradient(to top right,var(--colorA), var(--colorB));\n    height:60px;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    color:var(--colorD);\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domManipulator.js":
/*!*******************************!*\
  !*** ./src/domManipulator.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const projectManager = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\nconst Task = projectManager.Task;\nconst Project = projectManager.Project;\n\n\n\nfunction toggleDisplay(id, standardDisplay){\n    const element = document.getElementById(id);\n    const elementDisplayValue = window.getComputedStyle(element).getPropertyValue(`display`);\n    if(elementDisplayValue == standardDisplay){\n        element.style.display = 'none'\n        return;\n    }\n    element.style.display = standardDisplay;\n    return;\n\n}\n\n\nfunction addEventListeners(projectList){\n    const newProjectBtn = document.getElementById(`newProjectBtn`);\n        newProjectBtn.addEventListener(`click`, function(){\n        toggleDisplay(`projectFormDiv`, `flex`)\n        })\n\n    const newTaskBtn = document.getElementById(`newTaskBtn`);\n        newTaskBtn.addEventListener(`click`, function(){\n//populate dropdown menu with current projects:\n        let option = ``;\n        for(let i = 0; i < projectList.length; i++){\n            option += `<option value=${projectList[i].name}\">` + projectList[i].name+\"</option>\"\n        }\n        projectDropDown.innerHTML = option;\n        toggleDisplay(`taskFormDiv`, `flex`)\n    })\n\n\n    const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);\n    newProjectCancelButton.addEventListener(`click`, function(){\n        this.form.reset();\n        toggleDisplay(`projectFormDiv`, `flex`);\n    })\n    const newTaskCancelButton = document.getElementById(`newTaskCancelButton`);\n    newTaskCancelButton.addEventListener(`click`, function(){\n        this.form.reset();\n        toggleDisplay(`taskFormDiv`, `flex`);\n    })\n\n\n\n\n\n    const projectForm = document.getElementById(`projectForm`);\n    projectForm.addEventListener(`submit`, function(event){\n        event.preventDefault();\n        \n        const projectNameInput = document.getElementById(`projectNameInput`);\n        \n        const newProject = new Project(projectNameInput.ariaValueMax, `no`, []);\n        projectList.push(newProject)\n        toggleDisplay(`projectFormDiv`, `flex`);\n        projectForm.reset();\n        // const newProject = projectNameInput.value;\n        // console.log(`the name of the new project is ${newProject}`);\n        //need function for project creation\n    })\n\n\n\n\n}\n\n\nmodule.exports = {\n    toggleDisplay,\n    addEventListeners\n}\n\n//# sourceURL=webpack://todo/./src/domManipulator.js?");

/***/ }),

/***/ "./src/elementMaker.js":
/*!*****************************!*\
  !*** ./src/elementMaker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//div creation function:\n\n//  Create element takes 4 arguments:\n//  1. Array containing first the id, then any class attributes.\n//  2. A string indicating the type of the new element    'div'\n//  3. A string containing the innerhtml content.\n//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.\n\n\nfunction makeEl(array, type){\n    const element = document.createElement(`${type}`);\n    let id = array[0];\n    element.setAttribute(`id`, `${id}`);\n    element.innerHTML = `something`;\n    if (array.length > 1){\n        for (let i = 1; i < array.length; i++ ){\n            element.classList.add(`${array[i]}`)\n        }\n    }\n    return element;\n}\nfunction populateEl(element, content){\n    element.innerHTML = content;\n    return element;\n}\nfunction placeEl(element, location){\n    const locationDiv = document.getElementById(`${location}`);\n    locationDiv.appendChild(element);\n    return;\n}\nfunction createElement(array, type, content, location){\n    let element = makeEl(array, type);\n    populateEl(element, content);\n    placeEl(element,location);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n\n//# sourceURL=webpack://todo/./src/elementMaker.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementMaker.js */ \"./src/elementMaker.js\");\n\n\n\n//createElement([`id`, `class`], `div`,`innerText`, `locationId`)\n\n\n\nfunction generateForms(){\n    function taskForm(){\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormDiv`, `formDiv`], `div`, ``, `content`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskForm`, `form`], `form`, ``, `taskFormDiv`);\n                const taskForm = document.getElementById(`taskForm`);\n                taskForm.setAttribute(`autocomplete`, `off`);\n\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer1`, `formContainer`], `div`, ``, `taskForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectSelectorLabel`, `label`], `label`, `Project:`, `taskFormContainer1`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectDropDown`], `select`, ``, `taskFormContainer1`);\n\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer2`, `formContainer`], `div`, ``, `taskForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskNameLabel`, `label`], `label`, `Task Name: `, `taskFormContainer2`);\n                    const taskNameLabel = document.getElementById(`taskNameLabel`);\n                    taskNameLabel.setAttribute(`for`, `taskName`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskNameInput`, `textInput`], `input`, ``, `taskFormContainer2`);\n                    const taskNameInput = document.getElementById(`taskNameInput`);\n                    taskNameInput.setAttribute(`required`, `true`);\n                    taskNameInput.setAttribute(`name`, `taskName`);\n                            \n\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer3`, `formContainer`], `div`, ``, `taskForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskDescriptionLabel`, `label`], `label`, `Task Description: `, `taskFormContainer3`);\n                    const taskDescriptionLabel = document.getElementById(`taskDescriptionLabel`);                            \n                    taskDescriptionLabel.setAttribute(`for`, `taskDescription`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskDescriptionInput`, `textInput`], `input`, ``, `taskFormContainer3`);\n                    const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);\n                    taskDescriptionInput.setAttribute(`name`, `taskDescription`);\n    \n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer4`, `formContainer`], `div`, ``, `taskForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskUrgencyLabel`, `label`], `label`, `Urgency:`, `taskFormContainer4`);\n                    const taskUrgencyLabel = document.getElementById(`taskUrgencyLabel`);                            \n                    taskUrgencyLabel.setAttribute(`for`, `taskUrgency`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`urgencyDropDown`], `select`, ``, `taskFormContainer4`);\n                    const urgencyDropDown = document.getElementById(`urgencyDropDown`);                            \n                    urgencyDropDown.setAttribute(`name`, `taskUrgency`);\n                    let urgencyOption = '';\n                    let urgency = [`HIGH`, `Mid`, `Low`];\n                    for(let i = 0; i < urgency.length; i++){\n                        urgencyOption += '<option value=\"'+urgency[i] + '\">' + urgency[i]+\"</option>\"\n                    }\n                    urgencyDropDown.innerHTML = urgencyOption;\n                    urgencyDropDown.selectedIndex = 1;\n\n\n\n\n                    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer5`, `formContainer`], `div`, ``, `taskForm`)\n                    ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskStatusLabel`, `label`], `label`, `Status:`, `taskFormContainer5`);\n                        const taskStatusLabel = document.getElementById(`taskStatusLabel`);                            \n                        taskStatusLabel.setAttribute(`for`, `taskStatus`);\n                    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`statusDropDown`], `select`, ``, `taskFormContainer5`);\n                        const statusDropDown = document.getElementById(`statusDropDown`);                            \n                        statusDropDown.setAttribute(`name`, `taskStatus`);\n                        let statusOption = '';\n                        let status = [`Not Started`, `In Progress`, `Parts On Order`, `Nearly Complete`, `Complete`];\n                        for(let i = 0; i < status.length; i++){\n                            statusOption += '<option value=\"'+status[i] + '\">' + status[i]+\"</option>\"\n                        }\n                        statusDropDown.innerHTML = statusOption;\n                        statusDropDown.selectedIndex = 0;\n    \n\n\n\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`taskFormContainer-1`, `formContainer`], `div`, ``, `taskForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newTaskCancelButton`, `cancel`, `button`], `button`, `Cancel`, `taskFormContainer-1` )\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newTaskSubmitButton`, `submit`, `button`], `button`, `Submit`, `taskFormContainer-1` )\n                    const newTaskSubmitButton = document.getElementById(`newTaskSubmitButton`);\n                    newTaskSubmitButton.setAttribute(`type`, `submit`);\n            \n\n\n\n    }\n    function projectForm(){\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectFormDiv`, `formDiv`], `div`, ``, `content`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectFormTitle`, `title`], `div`, `Create New Project`, `projectFormDiv`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectForm`, `form`], `form`, ``, `projectFormDiv`);\n                const projectForm = document.getElementById(`projectForm`);\n                projectForm.setAttribute(`autocomplete`, `off`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectFormContainer1`, `formContainer`], `div`, ``, `projectForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectNameLabel`, `label`], `label`, `Project Name: `, `projectFormContainer1`);\n                    const projectNameLabel = document.getElementById(`projectNameLabel`);\n                    projectNameLabel.setAttribute(`for`, `projectName`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectNameInput`, `textInput`], `input`, ``, `projectFormContainer1`);\n                    const projectNameInput = document.getElementById(`projectNameInput`);\n                    projectNameInput.setAttribute(`required`, `true`);\n                    projectNameInput.setAttribute(`name`, `projectName`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectFormContainer2`, `formContainer`], `div`, ``, `projectForm`)\n                ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newProjectCancelButton`, `cancel`, `button`], `button`, `Cancel`, `projectFormContainer2` )\n                    const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);\n                    newProjectCancelButton.setAttribute(`type`, `reset`);\n                (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newProjectSubmitButton`, `submit`, `button`], `button`, `Submit`, `projectFormContainer2` )\n                    const newProjectSubmitButton = document.getElementById(`newProjectSubmitButton`);\n                    newProjectSubmitButton.setAttribute(`type`, `submit`);\n\n\n    }\n\n\n    taskForm();\n    projectForm();\n}\n\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateForms);\n\n\n    // module.exports = {\n    //    taskForm,\n    //    projectForm\n    // }\n\n//# sourceURL=webpack://todo/./src/forms.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementMaker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementMaker.js */ \"./src/elementMaker.js\");\n\n\n\n//  Create element takes 4 arguments:\n//  1. Array containing first the id, then any class attributes.\n//  2. A string indicating the type of the new element    'div'\n//  3. A string containing the innerhtml content.\n//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.\n\n//createElement([`id`, `class`], `div`,`innerText`, `locationId`)\n\n\nfunction buildPage(){\n    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`header`], `div`, ``,`content`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`title`], `div`, `To Do List`, `header`);\n    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`body`], `div`, ``, `content`)\n    ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`sidebar`], `div`, ``, `body`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`sidebarTitle`, `title`], `div`, `Projects`, `sidebar`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newProjectBtn`, `addBtn`], `div`, ``, `sidebar`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`addGraphic`, `material-symbols-outlined`], `span`, `add`, `newProjectBtn`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`addProject`, `btnText`], `span`, `New Project`, `newProjectBtn`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`projectsContainer`], `div`, ``, `sidebar`);\n    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`mainBody`], `div`, ``, `body`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`bodyTitle`, `title`], `div`, `Tasks`, `mainBody`)\n        ;(0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`newTaskBtn`, `addBtn`], `div`, ``, `mainBody`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`addGraphic2`, `material-symbols-outlined`], `span`, `add`, `newTaskBtn`);\n            (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`addTask`, `btnText`], `span`, `New Task`, `newTaskBtn`);\n\n    (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`footer`], `div`, ``, `content`);\n        (0,_elementMaker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`signature`], `div`, `Kbouti 2023`, `footer`);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildPage);\n\n//# sourceURL=webpack://todo/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n// run \"npm start\" in terminal to watch project.\n// \"control+c\" to close, or kill terminal.\n\n\n// In order to push changes to live site on github pages, run the following command:\n//git subtree push --prefix dist origin gh-pages\n\n\n\n\n\n\n\n\n\nconst projectManager = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\nconst Task = projectManager.Task;\nconst Project = projectManager.Project;\nconst projectList = projectManager.projectList;\n\nconst domManipulator = __webpack_require__(/*! ./domManipulator.js */ \"./src/domManipulator.js\")\nconst toggleDisplay = domManipulator.toggleDisplay;\nconst addEventListeners = domManipulator.addEventListeners;\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_forms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\naddEventListeners(projectList);\n\nconsole.log(`index.js loaded`);\n\nconst task1 = new Task(`Car`, `Roof Bike Rack`, `Mount fork clamp on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((module) => {

eval("\nlet projectList = [];\n\n\nclass Project {\n    constructor(name, canDelete, contents){\n        this.name = name;\n        this.canDelete = canDelete;\n        this.contents = contents;\n    }\n\n    delete(){\n        //to delete this project and all tasks it contains. Cannot be performed on the default \"misc\" project.\n        if (this.canDelete = true){\n        }\n    }\n    clearContents(){\n        //to remove all tasks from this project\n    }\n}\n\n\nclass Task {\n    constructor(project, name, description, urgency, status){\n        this.project = project;\n        this.name = name;\n        this.description = description;\n        this.urgency = urgency;\n        this.status = status;\n    }\n    log(){\n        console.log(this);\n    }\n}\n\nlet project1 = new Project(`Misc`, `no`, ``);\nlet project2 = new Project(`cars`, `yes`, ``);\n\nprojectList.push(project1, project2);\n\n\n\n\nmodule.exports = {\n    Task,\n    Project,\n    projectList\n}\n\n//# sourceURL=webpack://todo/./src/projectManager.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;