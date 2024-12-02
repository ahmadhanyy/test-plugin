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
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormButton */ "./src/components/FormButton/index.js");
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
    _classCallCheck(this, MapClickResult);
    return _callSuper(this, MapClickResult, [props]);
  }
  _inherits(MapClickResult, _React$Component);
  return _createClass(MapClickResult, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        t = _this$props.t,
        features = _this$props.features;
      //const featuresProps = features.map((f) => f.properties);

      var featuresPropsWithCo = features.map(function (f) {
        return _objectSpread(_objectSpread({}, f.properties), {}, {
          geometry: f.geometry
        });
      });
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
      }, {
        component: _FormButton__WEBPACK_IMPORTED_MODULE_6__["default"],
        settings: {
          LAYER: this.props.settings.dataSettings.ddd
        }
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
/******/ 	__webpack_require__.h = () => ("9953d31c5d29f869517d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NWZlNjU0Zjc3NzRiMmZjOTE5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDQztBQUM3QjtBQUNLO0FBQ007QUFDVjtBQUV2QyxJQUFNUSxJQUFJLEdBQUdILHFEQUFVLENBQUNHLElBQUk7QUFBQyxJQUV2QkMsY0FBYywwQkFBQUMsZ0JBQUE7RUFDaEIsU0FBQUQsZUFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsY0FBQTtJQUFBLE9BQUFJLFVBQUEsT0FBQUosY0FBQSxHQUNURSxLQUFLO0VBQ2Y7RUFBQ0csU0FBQSxDQUFBTCxjQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixjQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQUFDLFdBQUEsR0FBdUIsSUFBSSxDQUFDUixLQUFLO1FBQXpCUyxDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxRQUFRLEdBQUFGLFdBQUEsQ0FBUkUsUUFBUTtNQUNuQjs7TUFFQSxJQUFNQyxtQkFBbUIsR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsQ0FBQztRQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNwQ0QsQ0FBQyxDQUFDRSxVQUFVO1VBQ2ZDLFFBQVEsRUFBRUgsQ0FBQyxDQUFDRztRQUFRO01BQUEsQ0FDdEIsQ0FBQztNQUVILElBQU1DLG1CQUFtQixHQUFHMUIsOERBQWlCLENBQUMyQixZQUFZLENBQUMscUJBQXFCLENBQUM7TUFDakYsSUFBTUMsc0JBQXNCLEdBQUc1Qiw4REFBaUIsQ0FBQzJCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUV2RixJQUFNRSxZQUFZLEdBQUcsQ0FDakI7UUFBRUMsU0FBUyxFQUFFSixtQkFBbUI7UUFBRUssUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ2hEO1FBQUVELFNBQVMsRUFBRUYsc0JBQXNCO1FBQUVHLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUN0RDtNQUNELElBQU1DLGNBQWMsR0FBRyxDQUNuQjtRQUFFRixTQUFTLEVBQUVKLG1CQUFtQjtRQUFFSyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsRUFDaEQ7UUFBRUQsU0FBUyxFQUFFRixzQkFBc0I7UUFBRUcsUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ25EO1FBQUVELFNBQVMsRUFBRXpCLG1EQUFVO1FBQUUwQixRQUFRLEVBQUU7VUFBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ3NCLFFBQVEsQ0FBQ0csWUFBWSxDQUFDQztRQUFHO01BQUMsQ0FBQyxDQUNwRjtNQUVELG9CQUNJckMsMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNRLElBQUk7UUFDRHlCLFFBQVEsRUFBRTtVQUNOTSxJQUFJLEVBQUUsYUFBYTtVQUNuQkMsYUFBYSxFQUFFLElBQUk7VUFDbkJDLFVBQVUsRUFBRSxLQUFLO1VBQ2pCQyxRQUFRLEVBQUUsSUFBSTtVQUNkQyxVQUFVLEVBQUUsSUFBSTtVQUNoQkMsZUFBZSxFQUFFLElBQUk7VUFDckJDLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLFNBQVMsRUFBRSxJQUFJO1VBQ2ZDLE9BQU8sRUFBRSxDQUNMO1lBQ0lDLEVBQUUsRUFBRSxJQUFJO1lBQ1JULElBQUksRUFBRW5CLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDYjZCLElBQUksRUFBRSxRQUFRO1lBQ2RDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCUCxVQUFVLEVBQUUsSUFBSTtZQUNoQkQsUUFBUSxFQUFFO1VBQ2QsQ0FBQyxFQUNEO1lBQ0lNLEVBQUUsRUFBRSxhQUFhO1lBQ2pCVCxJQUFJLEVBQUVuQixDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3RCNkIsSUFBSSxFQUFFLFFBQVE7WUFDZEMsT0FBTyxFQUFFLE9BQU87WUFDaEJQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLEVBQ0Q7WUFDSU0sRUFBRSxFQUFFLFVBQVU7WUFDZFQsSUFBSSxFQUFFLEVBQUU7WUFDUlUsSUFBSSxFQUFFLFdBQVc7WUFDakJDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCUCxVQUFVLEVBQUUsS0FBSztZQUNqQkQsUUFBUSxFQUFFO1VBQ2QsQ0FBQyxDQUNKO1VBQ0RTLElBQUksRUFBRTdCO1FBQ1YsQ0FBRTtRQUNGUyxZQUFZLEVBQUtBLFlBQWM7UUFDL0JHLGNBQWMsRUFBS0E7TUFBZ0IsQ0FDdEMsQ0FDQSxDQUFDO0lBRWQ7RUFBQztBQUFBLEVBeEV3QmxDLHdEQUFlO0FBMkU1QyxJQUFNcUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztFQUN6QyxPQUFPO0lBQ0hsQyxRQUFRLEVBQUVmLDBEQUFjLENBQUNnRCxLQUFLO0VBQ2xDLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVsRCxvREFBTyxDQUFDaUQsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDcEQsNkRBQVksQ0FBQ1EsY0FBYyxFQUFFTix3RUFBc0IsQ0FBQyxDQUFDOzs7Ozs7OztVQzNGbkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aExvY2FsaXplLCBjb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ0BwZW50YS1iL2dyaWQnO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlcyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycyc7XHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy4uL0Zvcm1CdXR0b24nO1xyXG5cclxuY29uc3QgR3JpZCA9IGNvbXBvbmVudHMuR3JpZDtcclxuXHJcbmNsYXNzIE1hcENsaWNrUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHQsIGZlYXR1cmVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy9jb25zdCBmZWF0dXJlc1Byb3BzID0gZmVhdHVyZXMubWFwKChmKSA9PiBmLnByb3BlcnRpZXMpO1xyXG5cclxuICAgICAgICBjb25zdCBmZWF0dXJlc1Byb3BzV2l0aENvID0gZmVhdHVyZXMubWFwKChmKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5mLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBmLmdlb21ldHJ5LFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgWm9vbVRvRmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnWm9vbVRvRmVhdHVyZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24gPSBjb21wb25lbnRSZWdpc3RyeS5nZXRDb21wb25lbnQoJ0hpZ2hsaWdodEZlYXR1cmVCdXR0b24nKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEZvcm1CdXR0b24sIHNldHRpbmdzOiB7TEFZRVI6IHRoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVNldHRpbmdzLmRkZH19LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYnVmZmVyIGRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93SWRlbnRpZmllcjogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxhcmdlVmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q29tcG9uZW50OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWFya2VyX25hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0KFwiTWFya2VyIG5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZlYXR1cmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZWF0dXJlc1Byb3BzV2l0aENvLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHJDb21wb25lbnRzID0geyB0ckNvbXBvbmVudHMgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb21wb25lbnRzID0geyBncmlkQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKHdpdGhMb2NhbGl6ZShNYXBDbGlja1Jlc3VsdCwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5NTNkMzFjNWQyOWY4Njk1MTdkXCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aExvY2FsaXplIiwiY29tcG9uZW50UmVnaXN0cnkiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiY29ubmVjdCIsImNvbXBvbmVudHMiLCJzZWxlY3RGZWF0dXJlcyIsIkZvcm1CdXR0b24iLCJHcmlkIiwiTWFwQ2xpY2tSZXN1bHQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInQiLCJmZWF0dXJlcyIsImZlYXR1cmVzUHJvcHNXaXRoQ28iLCJtYXAiLCJmIiwiX29iamVjdFNwcmVhZCIsInByb3BlcnRpZXMiLCJnZW9tZXRyeSIsIlpvb21Ub0ZlYXR1cmVCdXR0b24iLCJnZXRDb21wb25lbnQiLCJIaWdobGlnaHRGZWF0dXJlQnV0dG9uIiwidHJDb21wb25lbnRzIiwiY29tcG9uZW50Iiwic2V0dGluZ3MiLCJncmlkQ29tcG9uZW50cyIsIkxBWUVSIiwiZGF0YVNldHRpbmdzIiwiZGRkIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJyb3dJZGVudGlmaWVyIiwic2VsZWN0YWJsZSIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsImVuYWJsZUxhcmdlVmlldyIsIm1heENvbXBvbmVudCIsInJlc2l6YWJsZSIsImNvbHVtbnMiLCJpZCIsInR5cGUiLCJkaXNwbGF5IiwiZGF0YSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9