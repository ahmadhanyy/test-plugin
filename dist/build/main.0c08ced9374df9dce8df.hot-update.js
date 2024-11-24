"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SET_FEATURES: () => (/* binding */ SET_FEATURES),
/* harmony export */   setFeatures: () => (/* binding */ setFeatures)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");

var SET_FEATURES = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LOCALIZATION_NAMESPACE, "_SET_FEATURES");
var setFeatures = function setFeatures(features) {
  return {
    type: SET_FEATURES,
    payload: features
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions),
/* harmony export */   components: () => (/* binding */ components),
/* harmony export */   localization: () => (/* binding */ localization),
/* harmony export */   reducers: () => (/* binding */ reducers),
/* harmony export */   selectors: () => (/* binding */ selectors)
/* harmony export */ });
/* harmony import */ var _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MapClick/MapClick.component */ "./src/components/MapClick/MapClick.component.js");
/* harmony import */ var _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MapClickResult/MapClickResult.component */ "./src/components/MapClickResult/MapClickResult.component.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./src/selectors/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Description: 
 *  - This index file exports plugin's components and/or reducers and/or actions.
 */








_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Title = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":title";
_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Icon = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":icon";
var components = {
  MapClick: _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"],
  MapClickResult: _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var localization = {
  namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE,
  defaultLocalization: _messages__WEBPACK_IMPORTED_MODULE_2__["default"]
};
var reducers = {
  testingPluginReducer: _reducers__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var actions = _objectSpread({}, _actions__WEBPACK_IMPORTED_MODULE_5__);
var selectors = _objectSpread({}, _selectors__WEBPACK_IMPORTED_MODULE_6__);


/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var INITIAL_STATE = {
  features: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_FEATURES:
      return _objectSpread(_objectSpread({}, state), {}, {
        features: _toConsumableArray(action.payload)
      });
    default:
      return _objectSpread({}, state);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/selectors/index.js":
/*!********************************!*\
  !*** ./src/selectors/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectFeatures: () => (/* binding */ selectFeatures)
/* harmony export */ });
var selectFeatures = function selectFeatures(state) {
  return state.testingPluginReducer.features;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b2280701c163a14b29f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wYzA4Y2VkOTM3NGRmOWRjZThkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUV6RCxJQUFNQyxZQUFZLE1BQUFDLE1BQUEsQ0FBTUYsd0VBQXNCLGtCQUFlO0FBRTdELElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxRQUFRLEVBQUs7RUFDckMsT0FBTztJQUNIQyxJQUFJLEVBQUVKLFlBQVk7SUFDbEJLLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFDQTtBQUNBOztBQUVnRTtBQUNrQjtBQUNyQztBQUNrQjtBQUNqQjtBQUNJO0FBQ0k7QUFFdERHLCtFQUFRLENBQUNNLEtBQUssR0FBR2Isd0VBQXNCLEdBQUcsUUFBUTtBQUNsRE8sK0VBQVEsQ0FBQ08sSUFBSSxHQUFHZCx3RUFBc0IsR0FBRyxPQUFPO0FBRWhELElBQU1lLFVBQVUsR0FBRztFQUNmUixRQUFRLEVBQVJBLCtFQUFRO0VBQ1JDLGNBQWMsRUFBZEEsMkZBQWNBO0FBQ2xCLENBQUM7QUFFRCxJQUFNUSxZQUFZLEdBQUc7RUFDakJDLFNBQVMsRUFBRWpCLHdFQUFzQjtFQUNqQ1MsbUJBQW1CLEVBQW5CQSxpREFBbUJBO0FBQ3ZCLENBQUM7QUFFRCxJQUFNUyxRQUFRLEdBQUc7RUFBRVIsb0JBQW9CLEVBQXBCQSxpREFBb0JBO0FBQUMsQ0FBQztBQUN6QyxJQUFNUyxPQUFPLEdBQUFDLGFBQUEsS0FBUVQscUNBQW9CLENBQUU7QUFDM0MsSUFBTVUsU0FBUyxHQUFBRCxhQUFBLEtBQVFSLHVDQUFzQixDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJUO0FBRXRDLElBQU1VLGFBQWEsR0FBRztFQUNsQmxCLFFBQVEsRUFBRTtBQUNkLENBQUM7QUFFRCxJQUFNbUIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBc0M7RUFBQSxJQUFsQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR0gsYUFBYTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMxQyxRQUFRQyxNQUFNLENBQUN2QixJQUFJO0lBQ2YsS0FBS2Msa0RBQW9CO01BQ3JCLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNPSSxLQUFLO1FBQ1JwQixRQUFRLEVBQUF5QixrQkFBQSxDQUFNRCxNQUFNLENBQUN0QixPQUFPO01BQUM7SUFFckM7TUFDSSxPQUFBYyxhQUFBLEtBQVdJLEtBQUs7RUFDeEI7QUFDSixDQUFDO0FBRUQsaUVBQWVELE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDbEJmLElBQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSU4sS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ2Qsb0JBQW9CLENBQUNOLFFBQVE7QUFBQTs7Ozs7Ozs7VUNBNUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL3NlbGVjdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9GRUFUVVJFUyA9IGAke0xPQ0FMSVpBVElPTl9OQU1FU1BBQ0V9X1NFVF9GRUFUVVJFU2A7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RmVhdHVyZXMgPSAoZmVhdHVyZXMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0VUX0ZFQVRVUkVTLFxyXG4gICAgICAgIHBheWxvYWQ6IGZlYXR1cmVzLFxyXG4gICAgfTtcclxufTtcclxuIiwiLypcclxuICogRGVzY3JpcHRpb246IFxyXG4gKiAgLSBUaGlzIGluZGV4IGZpbGUgZXhwb3J0cyBwbHVnaW4ncyBjb21wb25lbnRzIGFuZC9vciByZWR1Y2VycyBhbmQvb3IgYWN0aW9ucy5cclxuICovXHJcblxyXG5pbXBvcnQgTWFwQ2xpY2sgZnJvbSAnLi9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCBNYXBDbGlja1Jlc3VsdCBmcm9tICcuL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IGRlZmF1bHRMb2NhbGl6YXRpb24gZnJvbSAnLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgdGVzdGluZ1BsdWdpblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCAqIGFzIHRlc3RpbmdQbHVnaW5BY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHRlc3RpbmdQbHVnaW5TZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xyXG5cclxuTWFwQ2xpY2suVGl0bGUgPSBMT0NBTElaQVRJT05fTkFNRVNQQUNFICsgXCI6dGl0bGVcIjtcclxuTWFwQ2xpY2suSWNvbiA9IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgKyBcIjppY29uXCI7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgTWFwQ2xpY2ssXHJcbiAgICBNYXBDbGlja1Jlc3VsdFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgbmFtZXNwYWNlOiBMT0NBTElaQVRJT05fTkFNRVNQQUNFLFxyXG4gICAgZGVmYXVsdExvY2FsaXphdGlvbiAgICBcclxufVxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSB7IHRlc3RpbmdQbHVnaW5SZWR1Y2VyIH07XHJcbmNvbnN0IGFjdGlvbnMgPSB7IC4uLnRlc3RpbmdQbHVnaW5BY3Rpb25zIH07XHJcbmNvbnN0IHNlbGVjdG9ycyA9IHsgLi4udGVzdGluZ1BsdWdpblNlbGVjdG9ycyB9O1xyXG5cclxuZXhwb3J0IHsgY29tcG9uZW50cywgbG9jYWxpemF0aW9uLCByZWR1Y2VycywgYWN0aW9ucywgc2VsZWN0b3JzIH07IiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgICBmZWF0dXJlczogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9GRUFUVVJFUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IFsuLi5hY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZX07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlcyA9IChzdGF0ZSkgPT4gc3RhdGUudGVzdGluZ1BsdWdpblJlZHVjZXIuZmVhdHVyZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjIyODA3MDFjMTYzYTE0YjI5ZjVcIikiXSwibmFtZXMiOlsiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsIlNFVF9GRUFUVVJFUyIsImNvbmNhdCIsInNldEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJ0eXBlIiwicGF5bG9hZCIsIk1hcENsaWNrIiwiTWFwQ2xpY2tSZXN1bHQiLCJkZWZhdWx0TG9jYWxpemF0aW9uIiwidGVzdGluZ1BsdWdpblJlZHVjZXIiLCJ0ZXN0aW5nUGx1Z2luQWN0aW9ucyIsInRlc3RpbmdQbHVnaW5TZWxlY3RvcnMiLCJUaXRsZSIsIkljb24iLCJjb21wb25lbnRzIiwibG9jYWxpemF0aW9uIiwibmFtZXNwYWNlIiwicmVkdWNlcnMiLCJhY3Rpb25zIiwiX29iamVjdFNwcmVhZCIsInNlbGVjdG9ycyIsIklOSVRJQUxfU1RBVEUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzZWxlY3RGZWF0dXJlcyJdLCJzb3VyY2VSb290IjoiIn0=