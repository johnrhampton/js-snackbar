/******/ (function(modules) { // webpackBootstrap
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

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';\n\nvar _defaults = __webpack_require__(3);\n\nvar _extend = __webpack_require__(4);\n\nvar _util = __webpack_require__(5);\n\n/*!\n * Snackbar v0.1.5\n * http://polonel.com/Snackbar\n *\n * Copyright 2016 Chris Brame and other contributors\n * Released under the MIT license\n * https://github.com/polonel/Snackbar/blob/master/LICENSE\n */\n\n// main stylesheet\n__webpack_require__(74);\n\n(function () {\n  'use strict';\n\n  // get the snackbar context\n\n  var root = _util.getContext.call(this, self, global);\n\n  var Snackbar = function Snackbar(obj) {\n    if (obj instanceof Snackbar) {\n      return Snackbar;\n    }\n    if (!(this instanceof Snackbar)) {\n      return new Snackbar(obj);\n    }\n    this._wrapped = obj;\n  };\n\n  if (typeof exports != 'undefined' && !exports.nodeType) {\n    if (typeof module != 'undefined' && !module.nodeType && module.exports) {\n      exports = module.exports = Snackbar;\n    }\n    exports.Snackbar = Snackbar;\n  } else {\n    root.Snackbar = Snackbar;\n  }\n\n  Snackbar.current = null;\n  var $defaults = _defaults.SNACKBAR;\n\n  /**\n   * show Snackbar\n   */\n  Snackbar.show = function ($options) {\n    var options = (0, _extend.extend)(true, $defaults, $options);\n\n    // remove current snackbar\n    if (Snackbar.current) {\n      Snackbar.current.style.opacity = 0;\n      setTimeout(removeCurrent.bind(Snackbar.current), 500);\n    }\n\n    // build snackbar container\n    buildContainerElement(options);\n\n    // build inner snackbar element\n    buildInnerElement(options);\n\n    // conditionally add action button\n    addActionButton(options);\n\n    // hide current - delayed by options.duration\n    setTimeout(handleHideCurrent.bind(Snackbar.snackbar), options.duration);\n\n    // add transition end handler\n    Snackbar.snackbar.addEventListener('transitionend', handleTransitioned.bind(Snackbar.snackbar));\n\n    // set current snackbar\n    Snackbar.current = Snackbar.snackbar;\n\n    // adjust style prior to appending to body\n    preStyleAdjust(options);\n\n    // append to body, set opacity and class\n    displaySnackbar(options);\n\n    // adjust style after appending to body\n    postStyleAdjust(options);\n  };\n\n  /**\n   * close Snackbar\n   */\n  Snackbar.close = function () {\n    if (Snackbar.current) {\n      Snackbar.current.style.opacity = 0;\n    }\n  };\n\n  /**\n   * conditionally add an action button\n   */\n  var addActionButton = function addActionButton(options) {\n    switch (options.actionType) {\n      case _defaults.ACTION_TYPE.TEXT:\n        return appendTextButton(options);\n      case _defaults.ACTION_TYPE.CLOSE:\n        return appendCloseButton(options);\n      case _defaults.ACTION_TYPE.NONE:\n        break;\n    }\n  };\n\n  /**\n   * add text action button\n   */\n  var appendTextButton = function appendTextButton(options) {\n    var actionButton = document.createElement('button');\n    actionButton.className = 'action';\n    actionButton.innerHTML = options.actionText;\n    actionButton.style.color = options.actionTextColor;\n\n    actionButton.addEventListener('click', function () {\n      options.onActionClick(Snackbar.snackbar);\n    });\n\n    Snackbar.snackbar.appendChild(actionButton);\n  };\n\n  /**\n   * add icon action button\n   */\n  var appendCloseButton = function appendCloseButton(options) {\n    var closeButton = document.createElement('button');\n    closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';\n\n    var $icon = document.createElement('i');\n    $icon.className = 'material-icons';\n    $icon.innerHTML = 'close';\n    closeButton.appendChild($icon);\n\n    closeButton.addEventListener('click', function () {\n      options.onActionClick(Snackbar.snackbar);\n    });\n\n    Snackbar.snackbar.appendChild(closeButton);\n  };\n\n  /**\n   * build Snackbar container element\n   */\n  var buildContainerElement = function buildContainerElement(options) {\n    Snackbar.snackbar = document.createElement('div');\n    Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;\n    Snackbar.snackbar.style.width = options.width;\n  };\n\n  /**\n   * build Snackbar inner element\n   */\n  var buildInnerElement = function buildInnerElement(options) {\n    var $p = document.createElement('p');\n    $p.style.margin = _defaults.INNER_ELEMENT.margin;\n    $p.style.padding = _defaults.INNER_ELEMENT.padding;\n    $p.style.color = options.textColor;\n    $p.style.fontSize = _defaults.INNER_ELEMENT.fontSize;\n    $p.style.fontWeight = _defaults.INNER_ELEMENT.fontWeight;\n    $p.style.lineHeight = _defaults.INNER_ELEMENT.lineHeight;\n    $p.innerHTML = options.text;\n\n    // should we add notify icon\n    options.notifyIcon && !options.imgSrc && addNotifyIcon($p, options);\n\n    // should we add an image\n    options.imgSrc && addNotifyImage($p, options);\n\n    Snackbar.snackbar.appendChild($p);\n    Snackbar.snackbar.style.background = options.backgroundColor;\n  };\n\n  /**\n   * add notify icon to inner element, override defaults\n   */\n  var addNotifyIcon = function addNotifyIcon($element, options) {\n    var $icon = document.createElement('i');\n    $icon.className = 'material-icons snackbar-icon';\n    $icon.innerHTML = options.notifyIcon;\n    Snackbar.snackbar.appendChild($icon);\n\n    // override inner element style\n    $element.style.fontSize = _defaults.NOTIFY_ICON_OVERRIDES.fontSize;\n    $element.style.fontWeight = _defaults.NOTIFY_ICON_OVERRIDES.fontWeight;\n    $element.style.lineHeight = _defaults.NOTIFY_ICON_OVERRIDES.lineHeight;\n  };\n\n  /**\n   * add notify image to inner element, override defaults\n   */\n  var addNotifyImage = function addNotifyImage($element, options) {\n    var $image = document.createElement('img');\n    $image.src = options.imgSrc;\n    $image.className = 'snackbar-icon';\n    Snackbar.snackbar.appendChild($image);\n\n    // override inner element style\n    $element.style.fontSize = _defaults.NOTIFY_ICON_OVERRIDES.fontSize;\n    $element.style.fontWeight = _defaults.NOTIFY_ICON_OVERRIDES.fontWeight;\n    $element.style.lineHeight = _defaults.NOTIFY_ICON_OVERRIDES.lineHeight;\n  };\n\n  /**\n   * append to body, set opacity to 1, set classes\n   */\n  var displaySnackbar = function displaySnackbar(options) {\n    document.body.appendChild(Snackbar.snackbar);\n\n    /**\n     * gives the values of all the CSS properties of an element after applying the active\n     * stylesheets and resolving any basic computation those values may contain\n     */\n    var $bottom = getComputedStyle(Snackbar.snackbar).bottom;\n    var $top = getComputedStyle(Snackbar.snackbar).top;\n\n    Snackbar.snackbar.style.opacity = 1;\n    Snackbar.snackbar.className = 'snackbar-container ' + options.customClass + ' snackbar-pos ' + options.pos;\n  };\n\n  /**\n   * transitioned callback\n   */\n  function handleTransitioned(event, elapsed) {\n    if (event.propertyName === 'opacity' && this.style.opacity === '0') {\n      this.parentElement.removeChild(this);\n\n      if (Snackbar.current === this) {\n        Snackbar.current = null;\n      }\n    }\n  }\n\n  /**\n   * hide current snackbar - invoked after options.duration\n   */\n  function handleHideCurrent() {\n    if (Snackbar.current === this) {\n      Snackbar.current.style.opacity = 0;\n    }\n  }\n\n  /**\n   * adjust style prior to appending to body\n   */\n  var preStyleAdjust = function preStyleAdjust(options) {\n    if (options.pos.includes('top')) {\n      Snackbar.snackbar.style.top = '-100px';\n    }\n  };\n\n  /**\n   * adjust style after appending to body\n   */\n  var postStyleAdjust = function postStyleAdjust(options) {\n    switch (options.pos) {\n      case 'top-left':\n      case 'top-right':\n        Snackbar.snackbar.style.top = 0;\n        break;\n      case 'top':\n      case 'top-center':\n        Snackbar.snackbar.style.top = '39px';\n        break;\n      case 'bottom':\n      case 'bottom-center':\n        Snackbar.snackbar.style.bottom = '-39px';\n        break;\n    }\n  };\n\n  /**\n   * removes the current snackbar\n   */\n  function removeCurrent() {\n    var $parent = this.parentElement;\n\n    // possible null if too many/fast Snackbars\n    $parent && $parent.removeChild(this);\n  }\n\n  return Snackbar;\n})();\n/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./snackbar.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./snackbar.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tmodule.children = [];\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** (webpack)/buildin/module.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ACTION_TYPE = exports.ACTION_TYPE = {\n  TEXT: 'TEXT',\n  CLOSE: 'CLOSE',\n  NONE: 'NONE'\n};\n\nvar SNACKBAR = exports.SNACKBAR = {\n  text: 'Default Text',\n  textColor: '#ffffff',\n  width: 'auto',\n  actionType: ACTION_TYPE.CLOSE,\n  actionText: 'Dismiss',\n  actionTextColor: '#4caf50',\n  backgroundColor: '#323232',\n  pos: 'bottom-left',\n  duration: 5000,\n  customClass: '',\n  notifyIcon: null, //'info_outline',\n  imgSrc: null,\n  onActionClick: function onActionClick(element) {\n    element.style.opacity = 0;\n  }\n};\n\nvar INNER_ELEMENT = exports.INNER_ELEMENT = {\n  margin: 0,\n  padding: 0,\n  fontSize: '14px',\n  fontWeight: 300,\n  lineHeight: '1em'\n};\n\nvar NOTIFY_ICON_OVERRIDES = exports.NOTIFY_ICON_OVERRIDES = {\n  fontSize: '26px',\n  fontWeight: '500',\n  lineHeight: '1.3em'\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./defaults.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./defaults.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\n// Pure JS Extend\n// http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/\n\nmodule.exports = {\n  extend: extend\n};\n\nfunction extend() {\n  var extended = {};\n  var deep = false;\n  var i = 0;\n  var length = arguments.length;\n\n  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {\n    deep = arguments[0];\n    i++;\n  }\n\n  var merge = function merge(obj) {\n    for (var prop in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, prop)) {\n        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {\n          extended[prop] = extend(true, extended[prop], obj[prop]);\n        } else {\n          extended[prop] = obj[prop];\n        }\n      }\n    }\n  };\n\n  for (; i < length; i++) {\n    var obj = arguments[i];\n    merge(obj);\n  }\n\n  return extended;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./extend.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./extend.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n/**\n * returns the current context for the snackbar - i.e window\n *  invoke with .call\n */\n\nvar _iterator = __webpack_require__(6);\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _typeof3 = __webpack_require__(57);\n\nvar _typeof4 = _interopRequireDefault(_typeof3);\n\nvar _symbol = __webpack_require__(58);\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof _symbol2.default === \"function\" && (0, _typeof4.default)(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : (0, _typeof4.default)(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : (0, _typeof4.default)(obj);\n};\n\nexports.getContext = getContext;\nfunction getContext(self, global) {\n  return (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global.global === global && global || this;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./util.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./util.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(7), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/core-js/symbol/iterator.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/core-js/symbol/iterator.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(8);\n__webpack_require__(52);\nmodule.exports = __webpack_require__(56).f('iterator');\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/fn/symbol/iterator.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/fn/symbol/iterator.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar $at  = __webpack_require__(9)(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(12)(String, 'String', function(iterated){\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function(){\n  var O     = this._t\n    , index = this._i\n    , point;\n  if(index >= O.length)return {value: undefined, done: true};\n  point = $at(O, index);\n  this._i += point.length;\n  return {value: point, done: false};\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.string.iterator.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.string.iterator.js?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toInteger = __webpack_require__(10)\n  , defined   = __webpack_require__(11);\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function(TO_STRING){\n  return function(that, pos){\n    var s = String(defined(that))\n      , i = toInteger(pos)\n      , l = s.length\n      , a, b;\n    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_string-at.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_string-at.js?");

/***/ },
/* 10 */
/***/ function(module, exports) {

	eval("// 7.1.4 ToInteger\nvar ceil  = Math.ceil\n  , floor = Math.floor;\nmodule.exports = function(it){\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-integer.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-integer.js?");

/***/ },
/* 11 */
/***/ function(module, exports) {

	eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function(it){\n  if(it == undefined)throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_defined.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_defined.js?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar LIBRARY        = __webpack_require__(13)\n  , $export        = __webpack_require__(14)\n  , redefine       = __webpack_require__(29)\n  , hide           = __webpack_require__(19)\n  , has            = __webpack_require__(30)\n  , Iterators      = __webpack_require__(31)\n  , $iterCreate    = __webpack_require__(32)\n  , setToStringTag = __webpack_require__(48)\n  , getPrototypeOf = __webpack_require__(50)\n  , ITERATOR       = __webpack_require__(49)('iterator')\n  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`\n  , FF_ITERATOR    = '@@iterator'\n  , KEYS           = 'keys'\n  , VALUES         = 'values';\n\nvar returnThis = function(){ return this; };\n\nmodule.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function(kind){\n    if(!BUGGY && kind in proto)return proto[kind];\n    switch(kind){\n      case KEYS: return function keys(){ return new Constructor(this, kind); };\n      case VALUES: return function values(){ return new Constructor(this, kind); };\n    } return function entries(){ return new Constructor(this, kind); };\n  };\n  var TAG        = NAME + ' Iterator'\n    , DEF_VALUES = DEFAULT == VALUES\n    , VALUES_BUG = false\n    , proto      = Base.prototype\n    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]\n    , $default   = $native || getMethod(DEFAULT)\n    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined\n    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native\n    , methods, key, IteratorPrototype;\n  // Fix native\n  if($anyNative){\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));\n    if(IteratorPrototype !== Object.prototype){\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if(DEF_VALUES && $native && $native.name !== VALUES){\n    VALUES_BUG = true;\n    $default = function values(){ return $native.call(this); };\n  }\n  // Define iterator\n  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG]  = returnThis;\n  if(DEFAULT){\n    methods = {\n      values:  DEF_VALUES ? $default : getMethod(VALUES),\n      keys:    IS_SET     ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if(FORCED)for(key in methods){\n      if(!(key in proto))redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-define.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-define.js?");

/***/ },
/* 13 */
/***/ function(module, exports) {

	eval("module.exports = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_library.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_library.js?");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global    = __webpack_require__(15)\n  , core      = __webpack_require__(16)\n  , ctx       = __webpack_require__(17)\n  , hide      = __webpack_require__(19)\n  , PROTOTYPE = 'prototype';\n\nvar $export = function(type, name, source){\n  var IS_FORCED = type & $export.F\n    , IS_GLOBAL = type & $export.G\n    , IS_STATIC = type & $export.S\n    , IS_PROTO  = type & $export.P\n    , IS_BIND   = type & $export.B\n    , IS_WRAP   = type & $export.W\n    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})\n    , expProto  = exports[PROTOTYPE]\n    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]\n    , key, own, out;\n  if(IS_GLOBAL)source = name;\n  for(key in source){\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if(own && key in exports)continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function(C){\n      var F = function(a, b, c){\n        if(this instanceof C){\n          switch(arguments.length){\n            case 0: return new C;\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if(IS_PROTO){\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library` \nmodule.exports = $export;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_export.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_export.js?");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();\nif(typeof __g == 'number')__g = global; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_global.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_global.js?");

/***/ },
/* 16 */
/***/ function(module, exports) {

	eval("var core = module.exports = {version: '2.4.0'};\nif(typeof __e == 'number')__e = core; // eslint-disable-line no-undef\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_core.js\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_core.js?");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	eval("// optional / simple context binding\nvar aFunction = __webpack_require__(18);\nmodule.exports = function(fn, that, length){\n  aFunction(fn);\n  if(that === undefined)return fn;\n  switch(length){\n    case 1: return function(a){\n      return fn.call(that, a);\n    };\n    case 2: return function(a, b){\n      return fn.call(that, a, b);\n    };\n    case 3: return function(a, b, c){\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function(/* ...args */){\n    return fn.apply(that, arguments);\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_ctx.js\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_ctx.js?");

/***/ },
/* 18 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  if(typeof it != 'function')throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_a-function.js\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_a-function.js?");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	eval("var dP         = __webpack_require__(20)\n  , createDesc = __webpack_require__(28);\nmodule.exports = __webpack_require__(24) ? function(object, key, value){\n  return dP.f(object, key, createDesc(1, value));\n} : function(object, key, value){\n  object[key] = value;\n  return object;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_hide.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_hide.js?");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	eval("var anObject       = __webpack_require__(21)\n  , IE8_DOM_DEFINE = __webpack_require__(23)\n  , toPrimitive    = __webpack_require__(27)\n  , dP             = Object.defineProperty;\n\nexports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes){\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if(IE8_DOM_DEFINE)try {\n    return dP(O, P, Attributes);\n  } catch(e){ /* empty */ }\n  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');\n  if('value' in Attributes)O[P] = Attributes.value;\n  return O;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-dp.js\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-dp.js?");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(22);\nmodule.exports = function(it){\n  if(!isObject(it))throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_an-object.js\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_an-object.js?");

/***/ },
/* 22 */
/***/ function(module, exports) {

	eval("module.exports = function(it){\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_is-object.js\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_is-object.js?");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function(){\n  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_ie8-dom-define.js\n ** module id = 23\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_ie8-dom-define.js?");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(25)(function(){\n  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_descriptors.js\n ** module id = 24\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_descriptors.js?");

/***/ },
/* 25 */
/***/ function(module, exports) {

	eval("module.exports = function(exec){\n  try {\n    return !!exec();\n  } catch(e){\n    return true;\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_fails.js\n ** module id = 25\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_fails.js?");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	eval("var isObject = __webpack_require__(22)\n  , document = __webpack_require__(15).document\n  // in old IE typeof document.createElement is 'object'\n  , is = isObject(document) && isObject(document.createElement);\nmodule.exports = function(it){\n  return is ? document.createElement(it) : {};\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_dom-create.js\n ** module id = 26\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_dom-create.js?");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(22);\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function(it, S){\n  if(!isObject(it))return it;\n  var fn, val;\n  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;\n  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;\n  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-primitive.js\n ** module id = 27\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-primitive.js?");

/***/ },
/* 28 */
/***/ function(module, exports) {

	eval("module.exports = function(bitmap, value){\n  return {\n    enumerable  : !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable    : !(bitmap & 4),\n    value       : value\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_property-desc.js\n ** module id = 28\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_property-desc.js?");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(19);\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_redefine.js\n ** module id = 29\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_redefine.js?");

/***/ },
/* 30 */
/***/ function(module, exports) {

	eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function(it, key){\n  return hasOwnProperty.call(it, key);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_has.js\n ** module id = 30\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_has.js?");

/***/ },
/* 31 */
/***/ function(module, exports) {

	eval("module.exports = {};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iterators.js\n ** module id = 31\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iterators.js?");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar create         = __webpack_require__(33)\n  , descriptor     = __webpack_require__(28)\n  , setToStringTag = __webpack_require__(48)\n  , IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function(){ return this; });\n\nmodule.exports = function(Constructor, NAME, next){\n  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-create.js\n ** module id = 32\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-create.js?");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject    = __webpack_require__(21)\n  , dPs         = __webpack_require__(34)\n  , enumBugKeys = __webpack_require__(46)\n  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')\n  , Empty       = function(){ /* empty */ }\n  , PROTOTYPE   = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function(){\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(26)('iframe')\n    , i      = enumBugKeys.length\n    , lt     = '<'\n    , gt     = '>'\n    , iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(47).appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties){\n  var result;\n  if(O !== null){\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty;\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-create.js\n ** module id = 33\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-create.js?");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	eval("var dP       = __webpack_require__(20)\n  , anObject = __webpack_require__(21)\n  , getKeys  = __webpack_require__(35);\n\nmodule.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties){\n  anObject(O);\n  var keys   = getKeys(Properties)\n    , length = keys.length\n    , i = 0\n    , P;\n  while(length > i)dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-dps.js\n ** module id = 34\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-dps.js?");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys       = __webpack_require__(36)\n  , enumBugKeys = __webpack_require__(46);\n\nmodule.exports = Object.keys || function keys(O){\n  return $keys(O, enumBugKeys);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-keys.js\n ** module id = 35\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-keys.js?");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	eval("var has          = __webpack_require__(30)\n  , toIObject    = __webpack_require__(37)\n  , arrayIndexOf = __webpack_require__(40)(false)\n  , IE_PROTO     = __webpack_require__(43)('IE_PROTO');\n\nmodule.exports = function(object, names){\n  var O      = toIObject(object)\n    , i      = 0\n    , result = []\n    , key;\n  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while(names.length > i)if(has(O, key = names[i++])){\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-keys-internal.js\n ** module id = 36\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-keys-internal.js?");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(38)\n  , defined = __webpack_require__(11);\nmodule.exports = function(it){\n  return IObject(defined(it));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-iobject.js\n ** module id = 37\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-iobject.js?");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(39);\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iobject.js\n ** module id = 38\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iobject.js?");

/***/ },
/* 39 */
/***/ function(module, exports) {

	eval("var toString = {}.toString;\n\nmodule.exports = function(it){\n  return toString.call(it).slice(8, -1);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_cof.js\n ** module id = 39\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_cof.js?");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(37)\n  , toLength  = __webpack_require__(41)\n  , toIndex   = __webpack_require__(42);\nmodule.exports = function(IS_INCLUDES){\n  return function($this, el, fromIndex){\n    var O      = toIObject($this)\n      , length = toLength(O.length)\n      , index  = toIndex(fromIndex, length)\n      , value;\n    // Array#includes uses SameValueZero equality algorithm\n    if(IS_INCLUDES && el != el)while(length > index){\n      value = O[index++];\n      if(value != value)return true;\n    // Array#toIndex ignores holes, Array#includes - not\n    } else for(;length > index; index++)if(IS_INCLUDES || index in O){\n      if(O[index] === el)return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_array-includes.js\n ** module id = 40\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_array-includes.js?");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(10)\n  , min       = Math.min;\nmodule.exports = function(it){\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-length.js\n ** module id = 41\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-length.js?");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	eval("var toInteger = __webpack_require__(10)\n  , max       = Math.max\n  , min       = Math.min;\nmodule.exports = function(index, length){\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-index.js\n ** module id = 42\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-index.js?");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	eval("var shared = __webpack_require__(44)('keys')\n  , uid    = __webpack_require__(45);\nmodule.exports = function(key){\n  return shared[key] || (shared[key] = uid(key));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_shared-key.js\n ** module id = 43\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_shared-key.js?");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global = __webpack_require__(15)\n  , SHARED = '__core-js_shared__'\n  , store  = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function(key){\n  return store[key] || (store[key] = {});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_shared.js\n ** module id = 44\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_shared.js?");

/***/ },
/* 45 */
/***/ function(module, exports) {

	eval("var id = 0\n  , px = Math.random();\nmodule.exports = function(key){\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_uid.js\n ** module id = 45\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_uid.js?");

/***/ },
/* 46 */
/***/ function(module, exports) {

	eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_enum-bug-keys.js\n ** module id = 46\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_enum-bug-keys.js?");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(15).document && document.documentElement;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_html.js\n ** module id = 47\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_html.js?");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	eval("var def = __webpack_require__(20).f\n  , has = __webpack_require__(30)\n  , TAG = __webpack_require__(49)('toStringTag');\n\nmodule.exports = function(it, tag, stat){\n  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_set-to-string-tag.js\n ** module id = 48\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_set-to-string-tag.js?");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	eval("var store      = __webpack_require__(44)('wks')\n  , uid        = __webpack_require__(45)\n  , Symbol     = __webpack_require__(15).Symbol\n  , USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function(name){\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks.js\n ** module id = 49\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks.js?");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has         = __webpack_require__(30)\n  , toObject    = __webpack_require__(51)\n  , IE_PROTO    = __webpack_require__(43)('IE_PROTO')\n  , ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function(O){\n  O = toObject(O);\n  if(has(O, IE_PROTO))return O[IE_PROTO];\n  if(typeof O.constructor == 'function' && O instanceof O.constructor){\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gpo.js\n ** module id = 50\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gpo.js?");

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(11);\nmodule.exports = function(it){\n  return Object(defined(it));\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-object.js\n ** module id = 51\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_to-object.js?");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(53);\nvar global        = __webpack_require__(15)\n  , hide          = __webpack_require__(19)\n  , Iterators     = __webpack_require__(31)\n  , TO_STRING_TAG = __webpack_require__(49)('toStringTag');\n\nfor(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){\n  var NAME       = collections[i]\n    , Collection = global[NAME]\n    , proto      = Collection && Collection.prototype;\n  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/web.dom.iterable.js\n ** module id = 52\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/web.dom.iterable.js?");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar addToUnscopables = __webpack_require__(54)\n  , step             = __webpack_require__(55)\n  , Iterators        = __webpack_require__(31)\n  , toIObject        = __webpack_require__(37);\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(12)(Array, 'Array', function(iterated, kind){\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function(){\n  var O     = this._t\n    , kind  = this._k\n    , index = this._i++;\n  if(!O || index >= O.length){\n    this._t = undefined;\n    return step(1);\n  }\n  if(kind == 'keys'  )return step(0, index);\n  if(kind == 'values')return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.array.iterator.js\n ** module id = 53\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.array.iterator.js?");

/***/ },
/* 54 */
/***/ function(module, exports) {

	eval("module.exports = function(){ /* empty */ };\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_add-to-unscopables.js\n ** module id = 54\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_add-to-unscopables.js?");

/***/ },
/* 55 */
/***/ function(module, exports) {

	eval("module.exports = function(done, value){\n  return {value: value, done: !!done};\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-step.js\n ** module id = 55\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_iter-step.js?");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports.f = __webpack_require__(49);\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks-ext.js\n ** module id = 56\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks-ext.js?");

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(6);\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(58);\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/helpers/typeof.js\n ** module id = 57\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/helpers/typeof.js?");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(59), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/core-js/symbol.js\n ** module id = 58\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/babel-runtime/core-js/symbol.js?");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(60);\n__webpack_require__(71);\n__webpack_require__(72);\n__webpack_require__(73);\nmodule.exports = __webpack_require__(16).Symbol;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/fn/symbol/index.js\n ** module id = 59\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/fn/symbol/index.js?");

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n// ECMAScript 6 symbols shim\nvar global         = __webpack_require__(15)\n  , has            = __webpack_require__(30)\n  , DESCRIPTORS    = __webpack_require__(24)\n  , $export        = __webpack_require__(14)\n  , redefine       = __webpack_require__(29)\n  , META           = __webpack_require__(61).KEY\n  , $fails         = __webpack_require__(25)\n  , shared         = __webpack_require__(44)\n  , setToStringTag = __webpack_require__(48)\n  , uid            = __webpack_require__(45)\n  , wks            = __webpack_require__(49)\n  , wksExt         = __webpack_require__(56)\n  , wksDefine      = __webpack_require__(62)\n  , keyOf          = __webpack_require__(63)\n  , enumKeys       = __webpack_require__(64)\n  , isArray        = __webpack_require__(67)\n  , anObject       = __webpack_require__(21)\n  , toIObject      = __webpack_require__(37)\n  , toPrimitive    = __webpack_require__(27)\n  , createDesc     = __webpack_require__(28)\n  , _create        = __webpack_require__(33)\n  , gOPNExt        = __webpack_require__(68)\n  , $GOPD          = __webpack_require__(70)\n  , $DP            = __webpack_require__(20)\n  , $keys          = __webpack_require__(35)\n  , gOPD           = $GOPD.f\n  , dP             = $DP.f\n  , gOPN           = gOPNExt.f\n  , $Symbol        = global.Symbol\n  , $JSON          = global.JSON\n  , _stringify     = $JSON && $JSON.stringify\n  , PROTOTYPE      = 'prototype'\n  , HIDDEN         = wks('_hidden')\n  , TO_PRIMITIVE   = wks('toPrimitive')\n  , isEnum         = {}.propertyIsEnumerable\n  , SymbolRegistry = shared('symbol-registry')\n  , AllSymbols     = shared('symbols')\n  , OPSymbols      = shared('op-symbols')\n  , ObjectProto    = Object[PROTOTYPE]\n  , USE_NATIVE     = typeof $Symbol == 'function'\n  , QObject        = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function(){\n  return _create(dP({}, 'a', {\n    get: function(){ return dP(this, 'a', {value: 7}).a; }\n  })).a != 7;\n}) ? function(it, key, D){\n  var protoDesc = gOPD(ObjectProto, key);\n  if(protoDesc)delete ObjectProto[key];\n  dP(it, key, D);\n  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function(tag){\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){\n  return typeof it == 'symbol';\n} : function(it){\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D){\n  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if(has(AllSymbols, key)){\n    if(!D.enumerable){\n      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;\n      D = _create(D, {enumerable: createDesc(0, false)});\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P){\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P))\n    , i    = 0\n    , l = keys.length\n    , key;\n  while(l > i)$defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P){\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key){\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){\n  it  = toIObject(it);\n  key = toPrimitive(key, true);\n  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;\n  var D = gOPD(it, key);\n  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it){\n  var names  = gOPN(toIObject(it))\n    , result = []\n    , i      = 0\n    , key;\n  while(names.length > i){\n    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it){\n  var IS_OP  = it === ObjectProto\n    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))\n    , result = []\n    , i      = 0\n    , key;\n  while(names.length > i){\n    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif(!USE_NATIVE){\n  $Symbol = function Symbol(){\n    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function(value){\n      if(this === ObjectProto)$set.call(OPSymbols, value);\n      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString(){\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f   = $defineProperty;\n  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(66).f  = $propertyIsEnumerable;\n  __webpack_require__(65).f = $getOwnPropertySymbols;\n\n  if(DESCRIPTORS && !__webpack_require__(13)){\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function(name){\n    return wrap(wks(name));\n  }\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});\n\nfor(var symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);\n\nfor(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function(key){\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(key){\n    if(isSymbol(key))return keyOf(SymbolRegistry, key);\n    throw TypeError(key + ' is not a symbol!');\n  },\n  useSetter: function(){ setter = true; },\n  useSimple: function(){ setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it){\n    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined\n    var args = [it]\n      , i    = 1\n      , replacer, $replacer;\n    while(arguments.length > i)args.push(arguments[i++]);\n    replacer = args[1];\n    if(typeof replacer == 'function')$replacer = replacer;\n    if($replacer || !isArray(replacer))replacer = function(key, value){\n      if($replacer)value = $replacer.call(this, key, value);\n      if(!isSymbol(value))return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.symbol.js\n ** module id = 60\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.symbol.js?");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	eval("var META     = __webpack_require__(45)('meta')\n  , isObject = __webpack_require__(22)\n  , has      = __webpack_require__(30)\n  , setDesc  = __webpack_require__(20).f\n  , id       = 0;\nvar isExtensible = Object.isExtensible || function(){\n  return true;\n};\nvar FREEZE = !__webpack_require__(25)(function(){\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function(it){\n  setDesc(it, META, {value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  }});\n};\nvar fastKey = function(it, create){\n  // return primitive with prefix\n  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if(!has(it, META)){\n    // can't set metadata to uncaught frozen object\n    if(!isExtensible(it))return 'F';\n    // not necessary to add metadata\n    if(!create)return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function(it, create){\n  if(!has(it, META)){\n    // can't set metadata to uncaught frozen object\n    if(!isExtensible(it))return true;\n    // not necessary to add metadata\n    if(!create)return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function(it){\n  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY:      META,\n  NEED:     false,\n  fastKey:  fastKey,\n  getWeak:  getWeak,\n  onFreeze: onFreeze\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_meta.js\n ** module id = 61\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_meta.js?");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	eval("var global         = __webpack_require__(15)\n  , core           = __webpack_require__(16)\n  , LIBRARY        = __webpack_require__(13)\n  , wksExt         = __webpack_require__(56)\n  , defineProperty = __webpack_require__(20).f;\nmodule.exports = function(name){\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks-define.js\n ** module id = 62\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_wks-define.js?");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	eval("var getKeys   = __webpack_require__(35)\n  , toIObject = __webpack_require__(37);\nmodule.exports = function(object, el){\n  var O      = toIObject(object)\n    , keys   = getKeys(O)\n    , length = keys.length\n    , index  = 0\n    , key;\n  while(length > index)if(O[key = keys[index++]] === el)return key;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_keyof.js\n ** module id = 63\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_keyof.js?");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(35)\n  , gOPS    = __webpack_require__(65)\n  , pIE     = __webpack_require__(66);\nmodule.exports = function(it){\n  var result     = getKeys(it)\n    , getSymbols = gOPS.f;\n  if(getSymbols){\n    var symbols = getSymbols(it)\n      , isEnum  = pIE.f\n      , i       = 0\n      , key;\n    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);\n  } return result;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_enum-keys.js\n ** module id = 64\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_enum-keys.js?");

/***/ },
/* 65 */
/***/ function(module, exports) {

	eval("exports.f = Object.getOwnPropertySymbols;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gops.js\n ** module id = 65\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gops.js?");

/***/ },
/* 66 */
/***/ function(module, exports) {

	eval("exports.f = {}.propertyIsEnumerable;\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-pie.js\n ** module id = 66\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-pie.js?");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(39);\nmodule.exports = Array.isArray || function isArray(arg){\n  return cof(arg) == 'Array';\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_is-array.js\n ** module id = 67\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_is-array.js?");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(37)\n  , gOPN      = __webpack_require__(69).f\n  , toString  = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function(it){\n  try {\n    return gOPN(it);\n  } catch(e){\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it){\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopn-ext.js\n ** module id = 68\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopn-ext.js?");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys      = __webpack_require__(36)\n  , hiddenKeys = __webpack_require__(46).concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){\n  return $keys(O, hiddenKeys);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopn.js\n ** module id = 69\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopn.js?");

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	eval("var pIE            = __webpack_require__(66)\n  , createDesc     = __webpack_require__(28)\n  , toIObject      = __webpack_require__(37)\n  , toPrimitive    = __webpack_require__(27)\n  , has            = __webpack_require__(30)\n  , IE8_DOM_DEFINE = __webpack_require__(23)\n  , gOPD           = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P){\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if(IE8_DOM_DEFINE)try {\n    return gOPD(O, P);\n  } catch(e){ /* empty */ }\n  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopd.js\n ** module id = 70\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/_object-gopd.js?");

/***/ },
/* 71 */
/***/ function(module, exports) {

	eval("\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.object.to-string.js\n ** module id = 71\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es6.object.to-string.js?");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(62)('asyncIterator');\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es7.symbol.async-iterator.js\n ** module id = 72\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(62)('observable');\n\n/*****************\n ** WEBPACK FOOTER\n ** /Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es7.symbol.observable.js\n ** module id = 73\n ** module chunks = 0\n **/\n//# sourceURL=webpack:////Users/jrh/crafty/open-source/SnackBar/~/core-js/library/modules/es7.symbol.observable.js?");

/***/ },
/* 74 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ../assets/styles/snackbar.scss\n ** module id = 74\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///../assets/styles/snackbar.scss?");

/***/ }
/******/ ]);