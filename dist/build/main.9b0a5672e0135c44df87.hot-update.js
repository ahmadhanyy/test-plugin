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
      var ClearHighlightButton = _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.componentRegistry.getComponent('ClearHighlightButton');
      var isHighlight = false;
      var trComponents = [];
      var gridComponents = [];
      if (isHighlight) {
        trComponents = [{
          component: ZoomToFeatureButton,
          settings: {}
        },
        //{ component: HighlightFeatureButton, settings: {} },
        {
          component: ClearHighlightButton,
          settings: {}
        }];
        gridComponents = [{
          component: ZoomToFeatureButton,
          settings: {}
        },
        //{ component: HighlightFeatureButton, settings: {} },
        {
          component: ClearHighlightButton,
          settings: {}
        }, {
          component: _FormButton__WEBPACK_IMPORTED_MODULE_6__["default"],
          settings: {
            LAYER: this.props.settings.dataSettings.ddd
          }
        }];
      } else {
        var _trComponents = [{
          component: ZoomToFeatureButton,
          settings: {}
        }, {
          component: HighlightFeatureButton,
          settings: {}
        }
        //{ component: ClearHighlightButton, settings: {} },
        ];
        var _gridComponents = [{
          component: ZoomToFeatureButton,
          settings: {}
        }, {
          component: HighlightFeatureButton,
          settings: {}
        },
        //{ component: ClearHighlightButton, settings: {} },
        {
          component: _FormButton__WEBPACK_IMPORTED_MODULE_6__["default"],
          settings: {
            LAYER: this.props.settings.dataSettings.ddd
          }
        }];
      }
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
/******/ 	__webpack_require__.h = () => ("86b441a6acff21e37716")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YjBhNTY3MmUwMTM1YzQ0ZGY4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDQztBQUM3QjtBQUNLO0FBQ007QUFDVjtBQUV2QyxJQUFNUSxJQUFJLEdBQUdILHFEQUFVLENBQUNHLElBQUk7QUFBQyxJQUV2QkMsY0FBYywwQkFBQUMsZ0JBQUE7RUFDaEIsU0FBQUQsZUFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsY0FBQTtJQUFBLE9BQUFJLFVBQUEsT0FBQUosY0FBQSxHQUNURSxLQUFLO0VBQ2Y7RUFBQ0csU0FBQSxDQUFBTCxjQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixjQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQUFDLFdBQUEsR0FBdUIsSUFBSSxDQUFDUixLQUFLO1FBQXpCUyxDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxRQUFRLEdBQUFGLFdBQUEsQ0FBUkUsUUFBUTtNQUNuQjs7TUFFQSxJQUFNQyxtQkFBbUIsR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsQ0FBQztRQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNwQ0QsQ0FBQyxDQUFDRSxVQUFVO1VBQ2ZDLFFBQVEsRUFBRUgsQ0FBQyxDQUFDRztRQUFRO01BQUEsQ0FDdEIsQ0FBQztNQUVILElBQU1DLG1CQUFtQixHQUFHMUIsOERBQWlCLENBQUMyQixZQUFZLENBQUMscUJBQXFCLENBQUM7TUFDakYsSUFBTUMsc0JBQXNCLEdBQUc1Qiw4REFBaUIsQ0FBQzJCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUN2RixJQUFNRSxvQkFBb0IsR0FBRzdCLDhEQUFpQixDQUFDMkIsWUFBWSxDQUFDLHNCQUFzQixDQUFDO01BRW5GLElBQUlHLFdBQVcsR0FBRyxL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RyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIcEMsUUFBUSxFQUFFZiwwREFBYyxDQUFDa0QsS0FBSztFQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlcEQsb0RBQU8sQ0FBQ21ELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQ3RELDZEQUFZLENBQUNRLGNBQWMsRUFBRU4sd0VBQXNCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsSG5HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9NYXBDbGlja1Jlc3VsdC9NYXBDbGlja1Jlc3VsdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhMb2NhbGl6ZSwgY29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAcGVudGEtYi9tYS1saWInO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdAcGVudGEtYi9ncmlkJztcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXMgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tICcuLi9Gb3JtQnV0dG9uJztcclxuXHJcbmNvbnN0IEdyaWQgPSBjb21wb25lbnRzLkdyaWQ7XHJcblxyXG5jbGFzcyBNYXBDbGlja1Jlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBmZWF0dXJlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vY29uc3QgZmVhdHVyZXNQcm9wcyA9IGZlYXR1cmVzLm1hcCgoZikgPT4gZi5wcm9wZXJ0aWVzKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXNQcm9wc1dpdGhDbyA9IGZlYXR1cmVzLm1hcCgoZikgPT4gKHtcclxuICAgICAgICAgICAgLi4uZi5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBnZW9tZXRyeTogZi5nZW9tZXRyeSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFpvb21Ub0ZlYXR1cmVCdXR0b24gPSBjb21wb25lbnRSZWdpc3RyeS5nZXRDb21wb25lbnQoJ1pvb21Ub0ZlYXR1cmVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBIaWdobGlnaHRGZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdIaWdobGlnaHRGZWF0dXJlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgQ2xlYXJIaWdobGlnaHRCdXR0b24gPSBjb21wb25lbnRSZWdpc3RyeS5nZXRDb21wb25lbnQoJ0NsZWFySGlnaGxpZ2h0QnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGxldCBpc0hpZ2hsaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgdHJDb21wb25lbnRzID0gW107XHJcbiAgICAgICAgbGV0IGdyaWRDb21wb25lbnRzID0gW107XHJcblxyXG4gICAgICAgIGlmIChpc0hpZ2hsaWdodCkge1xyXG4gICAgICAgICAgICB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgICAgICAvL3sgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50OiBDbGVhckhpZ2hsaWdodEJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGdyaWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IFpvb21Ub0ZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICAgICAgLy97IGNvbXBvbmVudDogSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudDogQ2xlYXJIaWdobGlnaHRCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IEZvcm1CdXR0b24sIHNldHRpbmdzOiB7TEFZRVI6IHRoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVNldHRpbmdzLmRkZH19LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRyQ29tcG9uZW50cyA9IFtcclxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgICAgIC8veyBjb21wb25lbnQ6IENsZWFySGlnaGxpZ2h0QnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgbGV0IGdyaWRDb21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IFpvb21Ub0ZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICAgICAgLy97IGNvbXBvbmVudDogQ2xlYXJIaWdobGlnaHRCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnQ6IEZvcm1CdXR0b24sIHNldHRpbmdzOiB7TEFZRVI6IHRoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVNldHRpbmdzLmRkZH19LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidWZmZXIgZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJZGVudGlmaWVyOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGFyZ2VWaWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhDb21wb25lbnQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXJrZXJfbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJNYXJrZXIgbmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmVhdHVyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZlYXR1cmVzUHJvcHNXaXRoQ28sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0ckNvbXBvbmVudHMgPSB7IHRyQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbXBvbmVudHMgPSB7IGdyaWRDb21wb25lbnRzIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkod2l0aExvY2FsaXplKE1hcENsaWNrUmVzdWx0LCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODZiNDQxYTZhY2ZmMjFlMzc3MTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoTG9jYWxpemUiLCJjb21wb25lbnRSZWdpc3RyeSIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJjb25uZWN0IiwiY29tcG9uZW50cyIsInNlbGVjdEZlYXR1cmVzIiwiRm9ybUJ1dHRvbiIsIkdyaWQiLCJNYXBDbGlja1Jlc3VsdCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzJHByb3BzIiwidCIsImZlYXR1cmVzIiwiZmVhdHVyZXNQcm9wc1dpdGhDbyIsIm1hcCIsImYiLCJfb2JqZWN0U3ByZWFkIiwicHJvcGVydGllcyIsImdlb21ldHJ5IiwiWm9vbVRvRmVhdHVyZUJ1dHRvbiIsImdldENvbXBvbmVudCIsIkhpZ2hsaWdodEZlYXR1cmVCdXR0b24iLCJDbGVhckhpZ2hsaWdodEJ1dHRvbiIsImlzSGlnaGxpZ2h0IiwidHJDb21wb25lbnRzIiwiZ3JpZENvbXBvbmVudHMiLCJjb21wb25lbnQiLCJzZXR0aW5ncyIsIkxBWUVSIiwiZGF0YVNldHRpbmdzIiwiZGRkIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJyb3dJZGVudGlmaWVyIiwic2VsZWN0YWJsZSIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsImVuYWJsZUxhcmdlVmlldyIsIm1heENvbXBvbmVudCIsInJlc2l6YWJsZSIsImNvbHVtbnMiLCJpZCIsInR5cGUiLCJkaXNwbGF5IiwiZGF0YSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9