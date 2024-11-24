"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/MapClickResult/MapClickResult.component.js":
/*!*******************************************************************!*\
  !*** ./src/components/MapClickResult/MapClickResult.component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors */ "./src/selectors/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }




//import { components } from '@penta-b/grid';


//const Grid = components.Grid;

var ZoomToFeatureButton = _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.componentRegistry.getComponent('ZoomToFeatureButton');
var HighlightFeatureButton = _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.componentRegistry.getComponent('HighlightFeatureButton');
var trComponents = [{
  component: ZoomToFeatureButton,
  settings: {}
}, {
  component: HighlightFeatureButton,
  settings: {}
}];
var gridComponents = [{
  component: ZoomToFeatureButton,
  settings: {}
}, {
  component: HighlightFeatureButton,
  settings: {}
}];
({
  trComponents: trComponents
}), _readOnlyError("trComponents");
({
  gridComponents: gridComponents
}), _readOnlyError("gridComponents");
var MapClickResult = /*#__PURE__*/function (_React$Component) {
  function MapClickResult(props) {
    var _this;
    _classCallCheck(this, MapClickResult);
    _this = _callSuper(this, MapClickResult, [props]);
    console.log(_this.props.features);
    return _this;
  }
  _inherits(MapClickResult, _React$Component);
  return _createClass(MapClickResult, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        t = _this$props.t,
        features = _this$props.features;
      var featuresProps = features.map(function (f) {
        return f.properties;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hello World");
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    features: (0,_selectors__WEBPACK_IMPORTED_MODULE_4__.selectFeatures)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, null)((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.withLocalize)(MapClickResult, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE)));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18b84017d7c881333cd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NjhkMmUyMzAyZWU1Nzc4MTNiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dDO0FBQ0M7QUFDN0I7QUFDdEM7QUFDaUQ7O0FBRWpEOztBQUVBLElBQU1NLG1CQUFtQixHQUFHSiw4REFBaUIsQ0FBQ0ssWUFBWSxDQUFDLHFCQUFxQixDQUFDO0FBQ2pGLElBQU1DLHNCQUFzQixHQUFHTiw4REFBaUIsQ0FBQ0ssWUFBWSxDQUFDLHdCQUF3QixDQUFDO0FBRXZGLElBQU1FLFlBQVksR0FBRyxDQUNqQjtFQUFFQyxTQUFTLEVBQUVKLG1CQUFtQjtFQUFFSyxRQUFRLEVBQUUsQ0FBQztBQUFFLENBQUMsRUFDaEQ7RUFBRUQsU0FBUyxFQUFFRixzQkFBc0I7RUFBRUcsUUFBUSxFQUFFLENBQUM7QUFBRSxDQUFDLENBQ3REO0FBRUQsSUFBTUMsY0FBYyxHQUFHLENBQ25CO0VBQUVGLFNBQVMsRUFBRUosbUJBQW1CO0VBQUVLLFFBQVEsRUFBRSxDQUFDO0FBQUUsQ0FBQyxFQUNoRDtFQUFFRCxTQUFTLEVBQUVGLHNCQUFzQjtFQUFFRyxRQUFRLEVBQUUsQ0FBQztBQUFFLENBQUMsQ0FDdEQ7QUFFRCxDQUFlO0VBQUVGLFlBQVksRUFBWkE7QUFBYSxDQUFDLEdBQUFJLGNBQUE7QUFDL0IsQ0FBaUI7RUFBRUQsY0FBYyxFQUFkQTtBQUFlLENBQUMsR0FBQUMsY0FBQTtBQUFBLElBRTdCQyxjQUFjLDBCQUFBQyxnQkFBQTtFQUNoQixTQUFBRCxlQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosY0FBQTtJQUNmRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsY0FBQSxHQUFNRSxLQUFLO0lBQ1hJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFBLENBQUtELEtBQUssQ0FBQ00sUUFBUSxDQUFDO0lBQUMsT0FBQUwsS0FBQTtFQUNyQztFQUFDTSxTQUFBLENBQUFULGNBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGNBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsSUFBQUMsV0FBQSxHQUF1QixJQUFJLENBQUNaLEtBQUs7UUFBekJhLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVQLFFBQVEsR0FBQU0sV0FBQSxDQUFSTixRQUFRO01BQ25CLElBQU1RLGFBQWEsR0FBR1IsUUFBUSxDQUFDUyxHQUFHLENBQUMsVUFBQ0MsQ0FBQztRQUFBLE9BQUtBLENBQUMsQ0FBQ0MsVUFBVTtNQUFBLEVBQUM7TUFFdkQsb0JBQ0lqQywwREFBQSxjQUFLLGFBeUNBLENBQUM7SUFFZDtFQUFDO0FBQUEsRUF0RHdCQSx3REFBZTtBQXlENUMsSUFBTW9DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIaEIsUUFBUSxFQUFFakIsMERBQWMsQ0FBQ2dDLEtBQUs7RUFDbEMsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWpDLG9EQUFPLENBQUNnQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUNuQyw2REFBWSxDQUFDYSxjQUFjLEVBQUVYLHdFQUFzQixDQUFDLENBQUM7Ozs7Ozs7O1VDeEZuRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoTG9jYWxpemUsIGNvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQHBlbnRhLWIvbWEtbGliJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vL2ltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdAcGVudGEtYi9ncmlkJztcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXMgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMnO1xyXG5cclxuLy9jb25zdCBHcmlkID0gY29tcG9uZW50cy5HcmlkO1xyXG5cclxuY29uc3QgWm9vbVRvRmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnWm9vbVRvRmVhdHVyZUJ1dHRvbicpO1xyXG5jb25zdCBIaWdobGlnaHRGZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdIaWdobGlnaHRGZWF0dXJlQnV0dG9uJyk7XHJcblxyXG5jb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICB7IGNvbXBvbmVudDogSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbl07XHJcblxyXG5jb25zdCBncmlkQ29tcG9uZW50cyA9IFtcclxuICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuXTtcclxuXHJcbnRyQ29tcG9uZW50cyA9IHsgdHJDb21wb25lbnRzIH1cclxuZ3JpZENvbXBvbmVudHMgPSB7IGdyaWRDb21wb25lbnRzIH1cclxuXHJcbmNsYXNzIE1hcENsaWNrUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHQsIGZlYXR1cmVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXNQcm9wcyA9IGZlYXR1cmVzLm1hcCgoZikgPT4gZi5wcm9wZXJ0aWVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEhlbGxvIFdvcmxkXHJcbiAgICAgICAgICAgICAgICB7LyogPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJ1ZmZlciBkYXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkZW50aWZpZXI6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVMYXJnZVZpZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heENvbXBvbmVudDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hcmtlcl9uYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcIk1hcmtlciBuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmZWF0dXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmVhdHVyZXNQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkod2l0aExvY2FsaXplKE1hcENsaWNrUmVzdWx0LCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMThiODQwMTdkN2M4ODEzMzNjZDFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoTG9jYWxpemUiLCJjb21wb25lbnRSZWdpc3RyeSIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJjb25uZWN0Iiwic2VsZWN0RmVhdHVyZXMiLCJab29tVG9GZWF0dXJlQnV0dG9uIiwiZ2V0Q29tcG9uZW50IiwiSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiIsInRyQ29tcG9uZW50cyIsImNvbXBvbmVudCIsInNldHRpbmdzIiwiZ3JpZENvbXBvbmVudHMiLCJfcmVhZE9ubHlFcnJvciIsIk1hcENsaWNrUmVzdWx0IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiY29uc29sZSIsImxvZyIsImZlYXR1cmVzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInQiLCJmZWF0dXJlc1Byb3BzIiwibWFwIiwiZiIsInByb3BlcnRpZXMiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=