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
/* harmony import */ var _penta_b_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @penta-b/grid */ "./node_modules/@penta-b/grid/dist/build/plugin_grid.js");
/* harmony import */ var _penta_b_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_penta_b_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors */ "./src/selectors/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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






var Grid = _penta_b_grid__WEBPACK_IMPORTED_MODULE_4__.components.Grid;
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
      console.log("featuresProps : ", featuresProps);
      var featuresPropsWithCo = _objectSpread(_objectSpread({}, featuresProps), {}, {
        coordinates: features.geometry
      });
      console.log("featuresPropsWithCo : ", featuresPropsWithCo);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {
        settings: {
          name: "buffer data",
          rowIdentifier: "id",
          selectable: false,
          sortable: true,
          filterable: true,
          enableLargeView: true,
          maxComponent: 3,
          resizable: true,
          columns: [{
            id: "id",
            name: t("id"),
            type: "string",
            display: "basic",
            filterable: true,
            sortable: false
          }, {
            id: "marker_name",
            name: t("Marker name"),
            type: "string",
            display: "basic",
            filterable: true,
            sortable: false
          }, {
            id: "features",
            name: "",
            type: "component",
            display: "basic",
            filterable: false,
            sortable: false
          }],
          data: featuresPropsWithCo
        },
        trComponents: trComponents,
        gridComponents: gridComponents
      }));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    features: (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectFeatures)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, null)((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.withLocalize)(MapClickResult, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE)));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("437d64599a5f4c475bb3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNzYxNDIyYThhZGI2NGVjN2Q4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QztBQUNDO0FBQzdCO0FBQ0s7QUFDTTtBQUVqRCxJQUFNTyxJQUFJLEdBQUdGLHFEQUFVLENBQUNFLElBQUk7QUFBQyxJQUV2QkMsY0FBYywwQkFBQUMsZ0JBQUE7RUFDaEIsU0FBQUQsZUFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGNBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLGNBQUEsR0FBTUUsS0FBSztJQUNYSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBQSxDQUFLRCxLQUFLLENBQUNNLFFBQVEsQ0FBQztJQUFDLE9BQUFMLEtBQUE7RUFDckM7RUFBQ00sU0FBQSxDQUFBVCxjQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQVMsWUFBQSxDQUFBVixjQUFBO0lBQUFXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQUFDLFdBQUEsR0FBdUIsSUFBSSxDQUFDWixLQUFLO1FBQXpCYSxDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFUCxRQUFRLEdBQUFNLFdBQUEsQ0FBUk4sUUFBUTtNQUNuQixJQUFNUSxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLFVBQUNDLENBQUM7UUFBQSxPQUFLQSxDQUFDLENBQUNDLFVBQVU7TUFBQSxFQUFDO01BQ3ZEYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRVMsYUFBYSxDQUFDO01BRTlDLElBQU1JLG1CQUFtQixHQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBUUwsYUFBYTtRQUFFTSxXQUFXLEVBQUVkLFFBQVEsQ0FBQ2U7TUFBUSxFQUFDO01BQy9FakIsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVhLG1CQUFtQixDQUFDO01BRTFELElBQU1JLG1CQUFtQixHQUFHOUIsOERBQWlCLENBQUMrQixZQUFZLENBQUMscUJBQXFCLENBQUM7TUFDakYsSUFBTUMsc0JBQXNCLEdBQUdoQyw4REFBaUIsQ0FBQytCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUV2RixJQUFNRSxZQUFZLEdBQUcsQ0FDakI7UUFBRUMsU0FBUyxFQUFFSixtQkFBbUI7UUFBRUssUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ2hEO1FBQUVELFNBQVMsRUFBRUYsc0JBQXNCO1FBQUVHLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUN0RDtNQUNELElBQU1DLGNBQWMsR0FBRyxDQUNuQjtRQUFFRixTQUFTLEVBQUVKLG1CQUFtQjtRQUFFSyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsRUFDaEQ7UUFBRUQsU0FBUyxFQUFFRixzQkFBc0I7UUFBRUcsUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLENBQ3REO01BRUQsb0JBQ0lyQywwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ08sSUFBSTtRQUNEOEIsUUFBUSxFQUFFO1VBQ05HLElBQUksRUFBRSxhQUFhO1VBQ25CQyxhQUFhLEVBQUUsSUFBSTtVQUNuQkMsVUFBVSxFQUFFLEtBQUs7VUFDakJDLFFBQVEsRUFBRSxJQUFJO1VBQ2RDLFVBQVUsRUFBRSxJQUFJO1VBQ2hCQyxlQUFlLEVBQUUsSUFBSTtVQUNyQkMsWUFBWSxFQUFFLENBQUM7VUFDZkMsU0FBUyxFQUFFLElBQUk7VUFDZkMsT0FBTyxFQUFFLENBQ0w7WUFDSUMsRUFBRSxFQUFFLElBQUk7WUFDUlQsSUFBSSxFQUFFakIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNiMkIsSUFBSSxFQUFFLFFBQVE7WUFDZEMsT0FBTyxFQUFFLE9BQU87WUFDaEJQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLEVBQ0Q7WUFDSU0sRUFBRSxFQUFFLGFBQWE7WUFDakJULElBQUksRUFBRWpCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdEIyQixJQUFJLEVBQUUsUUFBUTtZQUNkQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLElBQUk7WUFDaEJELFFBQVEsRUFBRTtVQUNkLENBQUMsRUFDRDtZQUNJTSxFQUFFLEVBQUUsVUFBVTtZQUNkVCxJQUFJLEVBQUUsRUFBRTtZQUNSVSxJQUFJLEVBQUUsV0FBVztZQUNqQkMsT0FBTyxFQUFFLE9BQU87WUFDaEJQLFVBQVUsRUFBRSxLQUFLO1lBQ2pCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLENBQ0o7VUFDRFMsSUFBSSxFQUFFeEI7UUFDVixDQUFFO1FBQ0ZPLFlBQVksRUFBS0EsWUFBYztRQUMvQkcsY0FBYyxFQUFLQTtNQUFnQixDQUN0QyxDQUNBLENBQUM7SUFFZDtFQUFDO0FBQUEsRUF2RXdCdEMsd0RBQWU7QUEwRTVDLElBQU1zRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBRUMsUUFBUSxFQUFLO0VBQ3pDLE9BQU87SUFDSHhDLFFBQVEsRUFBRVYsMERBQWMsQ0FBQ2lELEtBQUs7RUFDbEMsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZW5ELG9EQUFPLENBQUNrRCxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUNyRCw2REFBWSxDQUFDTyxjQUFjLEVBQUVMLHdFQUFzQixDQUFDLENBQUM7Ozs7Ozs7O1VDekZuRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoTG9jYWxpemUsIGNvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQHBlbnRhLWIvbWEtbGliJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQHBlbnRhLWIvZ3JpZCc7XHJcbmltcG9ydCB7IHNlbGVjdEZlYXR1cmVzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJztcclxuXHJcbmNvbnN0IEdyaWQgPSBjb21wb25lbnRzLkdyaWQ7XHJcblxyXG5jbGFzcyBNYXBDbGlja1Jlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmZlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBmZWF0dXJlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzUHJvcHMgPSBmZWF0dXJlcy5tYXAoKGYpID0+IGYucHJvcGVydGllcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmZWF0dXJlc1Byb3BzIDogXCIsIGZlYXR1cmVzUHJvcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBmZWF0dXJlc1Byb3BzV2l0aENvID0gey4uLiBmZWF0dXJlc1Byb3BzLCBjb29yZGluYXRlczogZmVhdHVyZXMuZ2VvbWV0cnl9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmVhdHVyZXNQcm9wc1dpdGhDbyA6IFwiLCBmZWF0dXJlc1Byb3BzV2l0aENvKTtcclxuXHJcbiAgICAgICAgY29uc3QgWm9vbVRvRmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnWm9vbVRvRmVhdHVyZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24gPSBjb21wb25lbnRSZWdpc3RyeS5nZXRDb21wb25lbnQoJ0hpZ2hsaWdodEZlYXR1cmVCdXR0b24nKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJ1ZmZlciBkYXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkZW50aWZpZXI6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVMYXJnZVZpZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heENvbXBvbmVudDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1hcmtlcl9uYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcIk1hcmtlciBuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmZWF0dXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZmVhdHVyZXNQcm9wc1dpdGhDbyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRyQ29tcG9uZW50cyA9IHsgdHJDb21wb25lbnRzIH1cclxuICAgICAgICAgICAgICAgICAgICBncmlkQ29tcG9uZW50cyA9IHsgZ3JpZENvbXBvbmVudHMgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWF0dXJlczogc2VsZWN0RmVhdHVyZXMoc3RhdGUpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKSh3aXRoTG9jYWxpemUoTWFwQ2xpY2tSZXN1bHQsIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MzdkNjQ1OTlhNWY0YzQ3NWJiM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhMb2NhbGl6ZSIsImNvbXBvbmVudFJlZ2lzdHJ5IiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsImNvbm5lY3QiLCJjb21wb25lbnRzIiwic2VsZWN0RmVhdHVyZXMiLCJHcmlkIiwiTWFwQ2xpY2tSZXN1bHQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZXMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzJHByb3BzIiwidCIsImZlYXR1cmVzUHJvcHMiLCJtYXAiLCJmIiwicHJvcGVydGllcyIsImZlYXR1cmVzUHJvcHNXaXRoQ28iLCJfb2JqZWN0U3ByZWFkIiwiY29vcmRpbmF0ZXMiLCJnZW9tZXRyeSIsIlpvb21Ub0ZlYXR1cmVCdXR0b24iLCJnZXRDb21wb25lbnQiLCJIaWdobGlnaHRGZWF0dXJlQnV0dG9uIiwidHJDb21wb25lbnRzIiwiY29tcG9uZW50Iiwic2V0dGluZ3MiLCJncmlkQ29tcG9uZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwicm93SWRlbnRpZmllciIsInNlbGVjdGFibGUiLCJzb3J0YWJsZSIsImZpbHRlcmFibGUiLCJlbmFibGVMYXJnZVZpZXciLCJtYXhDb21wb25lbnQiLCJyZXNpemFibGUiLCJjb2x1bW5zIiwiaWQiLCJ0eXBlIiwiZGlzcGxheSIsImRhdGEiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==