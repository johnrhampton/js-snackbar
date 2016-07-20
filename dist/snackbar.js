(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("js-snackbar", [], factory);
	else if(typeof exports === 'object')
		exports["js-snackbar"] = factory();
	else
		root["js-snackbar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(40);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _assign = __webpack_require__(2);\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.hide = exports.show = undefined;\n\nvar _defaults = __webpack_require__(39);\n\n/**\n * functions to export\n */\nexports.show = show;\nexports.hide = hide;\n\n/**\n * define Snackbar object\n */\n\nvar Snackbar = { current: null };\n\n/**\n * hide current snackbar\n */\nfunction hide() {\n  if (Snackbar.current) {\n    Snackbar.current.style.opacity = 0;\n  }\n}\n\n/**\n * show current snackbar\n */\nfunction show($options) {\n  var options = (0, _assign2.default)({}, _defaults.SNACKBAR, $options);\n\n  // remove current snackbar\n  if (Snackbar.current) {\n    Snackbar.current.style.opacity = 0;\n    setTimeout(removeCurrent.bind(Snackbar.current), 500);\n  }\n\n  // build snackbar container\n  buildContainerElement(options);\n\n  // build inner snackbar element\n  buildInnerElement(options);\n\n  // conditionally add action button\n  addActionButton(options);\n\n  // hide current - delayed by options.duration\n  setTimeout(handleHideCurrent.bind(Snackbar.snackbar), options.duration);\n\n  // add transition end handler\n  Snackbar.snackbar.addEventListener('transitionend', handleTransitioned.bind(Snackbar.snackbar));\n\n  // set current snackbar\n  Snackbar.current = Snackbar.snackbar;\n\n  // adjust style prior to appending to body\n  preStyleAdjust(options);\n\n  // append to body, set opacity and class\n  displaySnackbar(options);\n\n  // adjust style after appending to body\n  postStyleAdjust(options);\n}\n\n/**\n * conditionally add an action button\n */\nfunction addActionButton(options) {\n  switch (options.actionType) {\n    case _defaults.ACTION_TYPE.TEXT:\n      return appendTextButton(options);\n    case _defaults.ACTION_TYPE.CLOSE:\n      return appendCloseButton(options);\n    case _defaults.ACTION_TYPE.NONE:\n      break;\n  }\n}\n\n/**\n * add text action button\n */\nfunction appendTextButton(options) {\n  var actionButton = document.createElement('button');\n  actionButton.className = 'action';\n  actionButton.innerHTML = options.actionText;\n  actionButton.style.color = options.actionTextColor;\n\n  actionButton.addEventListener('click', function () {\n    options.onActionClick(Snackbar.snackbar);\n  });\n\n  Snackbar.snackbar.appendChild(actionButton);\n}\n\n/**\n * add icon action button\n */\nfunction appendCloseButton(options) {\n  var closeButton = document.createElement('button');\n  closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';\n\n  var $icon = document.createElement('i');\n  $icon.className = 'material-icons';\n  $icon.innerHTML = 'close';\n  closeButton.appendChild($icon);\n\n  closeButton.addEventListener('click', function () {\n    options.onActionClick(Snackbar.snackbar);\n  });\n\n  Snackbar.snackbar.appendChild(closeButton);\n}\n\n/**\n * build Snackbar container element\n */\nfunction buildContainerElement(options) {\n  Snackbar.snackbar = document.createElement('div');\n  Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;\n  Snackbar.snackbar.style.width = options.width;\n}\n\n/**\n * build Snackbar inner element\n */\nfunction buildInnerElement(options) {\n  var $p = document.createElement('p');\n  $p.style.margin = _defaults.INNER_ELEMENT.margin;\n  $p.style.padding = _defaults.INNER_ELEMENT.padding;\n  $p.style.color = options.textColor;\n  $p.style.fontSize = _defaults.INNER_ELEMENT.fontSize;\n  $p.style.fontWeight = _defaults.INNER_ELEMENT.fontWeight;\n  $p.style.lineHeight = _defaults.INNER_ELEMENT.lineHeight;\n  $p.innerHTML = options.text;\n\n  // should we add notify icon\n  options.notifyIcon && !options.imgSrc && addNotifyIcon($p, options);\n\n  // should we add an image\n  options.imgSrc && addNotifyImage($p, options);\n\n  Snackbar.snackbar.appendChild($p);\n  Snackbar.snackbar.style.background = options.backgroundColor;\n}\n\n/**\n * add notify icon to inner element, override defaults\n */\nfunction addNotifyIcon($element, options) {\n  var $icon = document.createElement('i');\n  $icon.className = 'material-icons snackbar-icon';\n  $icon.innerHTML = options.notifyIcon;\n  Snackbar.snackbar.appendChild($icon);\n\n  // override inner element style\n  $element.style.fontSize = _defaults.NOTIFY_ICON_OVERRIDES.fontSize;\n  $element.style.fontWeight = _defaults.NOTIFY_ICON_OVERRIDES.fontWeight;\n  $element.style.lineHeight = _defaults.NOTIFY_ICON_OVERRIDES.lineHeight;\n}\n\n/**\n * add notify image to inner element, override defaults\n */\nfunction addNotifyImage($element, options) {\n  var $image = document.createElement('img');\n  $image.src = options.imgSrc;\n  $image.className = 'snackbar-icon';\n  Snackbar.snackbar.appendChild($image);\n\n  // override inner element style\n  $element.style.fontSize = _defaults.NOTIFY_ICON_OVERRIDES.fontSize;\n  $element.style.fontWeight = _defaults.NOTIFY_ICON_OVERRIDES.fontWeight;\n  $element.style.lineHeight = _defaults.NOTIFY_ICON_OVERRIDES.lineHeight;\n}\n\n/**\n * append to body, set opacity to 1, set classes\n */\nfunction displaySnackbar(options) {\n  document.body.appendChild(Snackbar.snackbar);\n\n  /**\n   * gives the values of all the CSS properties of an element after applying the active\n   * stylesheets and resolving any basic computation those values may contain\n   */\n  var $bottom = getComputedStyle(Snackbar.snackbar).bottom;\n  var $top = getComputedStyle(Snackbar.snackbar).top;\n\n  Snackbar.snackbar.style.opacity = 1;\n  Snackbar.snackbar.className = 'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;\n}\n\n/**\n * transitioned callback\n */\nfunction handleTransitioned(event, elapsed) {\n  if (event.propertyName === 'opacity' && this.style.opacity === '0') {\n    this.parentElement.removeChild(this);\n\n    if (Snackbar.current === this) {\n      Snackbar.current = null;\n    }\n  }\n}\n\n/**\n * hide current snackbar - invoked after options.duration\n */\nfunction handleHideCurrent() {\n  if (Snackbar.current === this) {\n    Snackbar.current.style.opacity = 0;\n  }\n}\n\n/**\n * adjust style prior to appending to body\n */\nfunction preStyleAdjust(options) {\n  if (options.pos.includes('top')) {\n    Snackbar.snackbar.style.top = '-100px';\n  }\n}\n\n/**\n * adjust style after appending to body\n */\nfunction postStyleAdjust(options) {\n  switch (options.pos) {\n    case 'top-left':\n    case 'top-right':\n      Snackbar.snackbar.style.top = 0;\n      break;\n    case 'top':\n    case 'top-center':\n      Snackbar.snackbar.style.top = '39px';\n      break;\n    case 'bottom':\n    case 'bottom-center':\n      Snackbar.snackbar.style.bottom = '-39px';\n      break;\n  }\n}\n\n/**\n * removes the current snackbar\n */\nfunction removeCurrent() {\n  var $parent = this.parentElement;\n  $parent && $parent.removeChild(this);\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./lib/snackbar.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./lib/snackbar.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(3), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/babel-runtime/core-js/object/assign.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/babel-runtime/core-js/object/assign.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(4);\nmodule.exports = __webpack_require__(7).Object.assign;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/fn/object/assign.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/fn/object/assign.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(5);\n\n$export($export.S + $export.F, 'Object', {assign: __webpack_require__(20)});\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/es6.object.assign.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/es6.object.assign.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global    = __webpack_require__(6)\n  , core      = __webpack_require__(7)\n  , ctx       = __webpack_require__(8)\n  , hide      = __webpack_require__(10)\n  , PROTOTYPE = 'prototype';\n\nvar $export = function(type, name, source){\n  var IS_FORCED = type & $export.F\n    , IS_GLOBAL = type & $export.G\n    , IS_STATIC = type & $export.S\n    , IS_PROTO  = type & $export.P\n    , IS_BIND   = type & $export.B\n    , IS_WRAP   = type & $export.W\n    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})\n    , expProto  = exports[PROTOTYPE]\n    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]\n    , key, own, out;\n  if(IS_GLOBAL)source = name;\n  for(key in source){\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if(own && key in exports)continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function(C){\n      var F = function(a, b, c){\n        if(this instanceof C){\n          switch(arguments.length){\n            case 0: return new C;\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if(IS_PROTO){\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library` \nmodule.exports = $export;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_export.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_export.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();\nif(typeof __g == 'number')__g = global; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_global.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_global.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("var core = module.exports = {version: '2.4.0'};\nif(typeof __e == 'number')__e = core; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_core.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_core.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("// optional / simple context binding\nvar aFunction = __webpack_require__(9);\nmodule.exports = function(fn, that, length){\n  aFunction(fn);\n  if(that === undefined)return fn;\n  switch(length){\n    case 1: return function(a){\n      return fn.call(that, a);\n    };\n    case 2: return function(a, b){\n      return fn.call(that, a, b);\n    };\n    case 3: return function(a, b, c){\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function(/* ...args */){\n    return fn.apply(that, arguments);\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_ctx.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_ctx.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  if(typeof it != 'function')throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_a-function.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_a-function.js?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("var dP         = __webpack_require__(11)\n  , createDesc = __webpack_require__(19);\nmodule.exports = __webpack_require__(15) ? function(object, key, value){\n  return dP.f(object, key, createDesc(1, value));\n} : function(object, key, value){\n  object[key] = value;\n  return object;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_hide.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_hide.js?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("var anObject       = __webpack_require__(12)\n  , IE8_DOM_DEFINE = __webpack_require__(14)\n  , toPrimitive    = __webpack_require__(18)\n  , dP             = Object.defineProperty;\n\nexports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if(IE8_DOM_DEFINE)try {\n    return dP(O, P, Attributes);\n  } catch(e){ /* empty */ }\n  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');\n  if('value' in Attributes)O[P] = Attributes.value;\n  return O;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-dp.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-dp.js?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(13);\nmodule.exports = function(it){\n  if(!isObject(it))throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_an-object.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_an-object.js?");

/***/ },
/* 13 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_is-object.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_is-object.js?");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function(){\n  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_ie8-dom-define.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_ie8-dom-define.js?");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(16)(function(){\n  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_descriptors.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_descriptors.js?");

/***/ },
/* 16 */
/***/ function(module, exports) {

	eval("module.exports = function(exec){\n  try {\n    return !!exec();\n  } catch(e){\n    return true;\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_fails.js\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_fails.js?");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(13)\n  , document = __webpack_require__(6).document\n  // in old IE typeof document.createElement is 'object'\n  , is = isObject(document) && isObject(document.createElement);\nmodule.exports = function(it){\n  return is ? document.createElement(it) : {};\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_dom-create.js\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_dom-create.js?");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(13);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function(it, S){\n  if(!isObject(it))return it;\n  var fn, val;\n  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;\n  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;\n  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-primitive.js\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-primitive.js?");

/***/ },
/* 19 */
/***/ function(module, exports) {

	eval("module.exports = function(bitmap, value){\n  return {\n    enumerable  : !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable    : !(bitmap & 4),\n    value       : value\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_property-desc.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_property-desc.js?");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys  = __webpack_require__(21)\n  , gOPS     = __webpack_require__(36)\n  , pIE      = __webpack_require__(37)\n  , toObject = __webpack_require__(38)\n  , IObject  = __webpack_require__(25)\n  , $assign  = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(16)(function(){\n  var A = {}\n    , B = {}\n    , S = Symbol()\n    , K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function(k){ B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source){ // eslint-disable-line no-unused-vars\n  var T     = toObject(target)\n    , aLen  = arguments.length\n    , index = 1\n    , getSymbols = gOPS.f\n    , isEnum     = pIE.f;\n  while(aLen > index){\n    var S      = IObject(arguments[index++])\n      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)\n      , length = keys.length\n      , j      = 0\n      , key;\n    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];\n  } return T;\n} : $assign;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-assign.js\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-assign.js?");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys       = __webpack_require__(22)\n  , enumBugKeys = __webpack_require__(35);\n\nmodule.exports = Object.keys || function keys(O){\n  return $keys(O, enumBugKeys);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-keys.js\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-keys.js?");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	eval("var has          = __webpack_require__(23)\n  , toIObject    = __webpack_require__(24)\n  , arrayIndexOf = __webpack_require__(28)(false)\n  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');\n\nmodule.exports = function(object, names){\n  var O      = toIObject(object)\n    , i      = 0\n    , result = []\n    , key;\n  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while(names.length > i)if(has(O, key = names[i++])){\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-keys-internal.js\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-keys-internal.js?");

/***/ },
/* 23 */
/***/ function(module, exports) {

	eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function(it, key){\n  return hasOwnProperty.call(it, key);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_has.js\n ** module id = 23\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_has.js?");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(25)\n  , defined = __webpack_require__(27);\nmodule.exports = function(it){\n  return IObject(defined(it));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-iobject.js\n ** module id = 24\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-iobject.js?");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(26);\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_iobject.js\n ** module id = 25\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_iobject.js?");

/***/ },
/* 26 */
/***/ function(module, exports) {

	eval("var toString = {}.toString;\n\nmodule.exports = function(it){\n  return toString.call(it).slice(8, -1);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_cof.js\n ** module id = 26\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_cof.js?");

/***/ },
/* 27 */
/***/ function(module, exports) {

	eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function(it){\n  if(it == undefined)throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_defined.js\n ** module id = 27\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_defined.js?");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(24)\n  , toLength  = __webpack_require__(29)\n  , toIndex   = __webpack_require__(31);\nmodule.exports = function(IS_INCLUDES){\n  return function($this, el, fromIndex){\n    var O      = toIObject($this)\n      , length = toLength(O.length)\n      , index  = toIndex(fromIndex, length)\n      , value;\n    // Array#includes uses SameValueZero equality algorithm\n    if(IS_INCLUDES && el != el)while(length > index){\n      value = O[index++];\n      if(value != value)return true;\n    // Array#toIndex ignores holes, Array#includes - not\n    } else for(;length > index; index++)if(IS_INCLUDES || index in O){\n      if(O[index] === el)return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_array-includes.js\n ** module id = 28\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_array-includes.js?");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(30)\n  , min       = Math.min;\nmodule.exports = function(it){\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-length.js\n ** module id = 29\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-length.js?");

/***/ },
/* 30 */
/***/ function(module, exports) {

	eval("// 7.1.4 ToInteger\nvar ceil  = Math.ceil\n  , floor = Math.floor;\nmodule.exports = function(it){\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-integer.js\n ** module id = 30\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-integer.js?");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toInteger = __webpack_require__(30)\n  , max       = Math.max\n  , min       = Math.min;\nmodule.exports = function(index, length){\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-index.js\n ** module id = 31\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-index.js?");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	eval("var shared = __webpack_require__(33)('keys')\n  , uid    = __webpack_require__(34);\nmodule.exports = function(key){\n  return shared[key] || (shared[key] = uid(key));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_shared-key.js\n ** module id = 32\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_shared-key.js?");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global = __webpack_require__(6)\n  , SHARED = '__core-js_shared__'\n  , store  = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function(key){\n  return store[key] || (store[key] = {});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_shared.js\n ** module id = 33\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_shared.js?");

/***/ },
/* 34 */
/***/ function(module, exports) {

	eval("var id = 0\n  , px = Math.random();\nmodule.exports = function(key){\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_uid.js\n ** module id = 34\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_uid.js?");

/***/ },
/* 35 */
/***/ function(module, exports) {

	eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_enum-bug-keys.js\n ** module id = 35\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_enum-bug-keys.js?");

/***/ },
/* 36 */
/***/ function(module, exports) {

	eval("exports.f = Object.getOwnPropertySymbols;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-gops.js\n ** module id = 36\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-gops.js?");

/***/ },
/* 37 */
/***/ function(module, exports) {

	eval("exports.f = {}.propertyIsEnumerable;\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_object-pie.js\n ** module id = 37\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_object-pie.js?");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(27);\nmodule.exports = function(it){\n  return Object(defined(it));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ../~/core-js/library/modules/_to-object.js\n ** module id = 38\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../~/core-js/library/modules/_to-object.js?");

/***/ },
/* 39 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ACTION_TYPE = exports.ACTION_TYPE = {\n  TEXT: 'TEXT',\n  CLOSE: 'CLOSE',\n  NONE: 'NONE'\n};\n\nvar SNACKBAR = exports.SNACKBAR = {\n  text: 'Default Text',\n  textColor: '#ffffff',\n  width: 'auto',\n  actionType: ACTION_TYPE.CLOSE,\n  actionText: 'Dismiss',\n  actionTextColor: '#4caf50',\n  backgroundColor: '#323232',\n  pos: 'bottom-left',\n  duration: 5000,\n  customClass: '',\n  notifyIcon: null, //'info_outline',\n  imgSrc: null,\n  onActionClick: function onActionClick(element) {\n    element.style.opacity = 0;\n  }\n};\n\nvar INNER_ELEMENT = exports.INNER_ELEMENT = {\n  margin: 0,\n  padding: 0,\n  fontSize: '14px',\n  fontWeight: 300,\n  lineHeight: '1em'\n};\n\nvar NOTIFY_ICON_OVERRIDES = exports.NOTIFY_ICON_OVERRIDES = {\n  fontSize: '26px',\n  fontWeight: '500',\n  lineHeight: '1.3em'\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./lib/defaults.js\n ** module id = 39\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./lib/defaults.js?");

/***/ },
/* 40 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./assets/styles/snackbar.scss\n ** module id = 40\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./assets/styles/snackbar.scss?");

/***/ }
/******/ ])
});
;