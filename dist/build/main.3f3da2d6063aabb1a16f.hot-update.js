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
          LAYER: settings.dataSettings.LAYER
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
/******/ 	__webpack_require__.h = () => ("42ea543fe29c903c6108")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZjNkYTJkNjA2M2FhYmIxYTE2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDQztBQUM3QjtBQUNLO0FBQ007QUFDVjtBQUV2QyxJQUFNUSxJQUFJLEdBQUdILHFEQUFVLENBQUNHLElBQUk7QUFBQyxJQUV2QkMsY0FBYywwQkFBQUMsZ0JBQUE7RUFDaEIsU0FBQUQsZUFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsY0FBQTtJQUFBLE9BQUFJLFVBQUEsT0FBQUosY0FBQSxHQUNURSxLQUFLO0VBQ2Y7RUFBQ0csU0FBQSxDQUFBTCxjQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixjQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQUFDLFdBQUEsR0FBdUIsSUFBSSxDQUFDUixLQUFLO1FBQXpCUyxDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxRQUFRLEdBQUFGLFdBQUEsQ0FBUkUsUUFBUTtNQUNuQjs7TUFFQSxJQUFNQyxtQkFBbUIsR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsQ0FBQztRQUFBLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNwQ0QsQ0FBQyxDQUFDRSxVQUFVO1VBQ2ZDLFFBQVEsRUFBRUgsQ0FBQyxDQUFDRztRQUFRO01BQUEsQ0FDdEIsQ0FBQztNQUVILElBQU1DLG1CQUFtQixHQUFHMUIsOERBQWlCLENBQUMyQixZQUFZLENBQUMscUJBQXFCLENBQUM7TUFDakYsSUFBTUMsc0JBQXNCLEdBQUc1Qiw4REFBaUIsQ0FBQzJCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUV2RixJQUFNRSxZQUFZLEdBQUcsQ0FDakI7UUFBRUMsU0FBUyxFQUFFSixtQkFBbUI7UUFBRUssUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ2hEO1FBQUVELFNBQVMsRUFBRUYsc0JBQXNCO1FBQUVHLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUN0RDtNQUNELElBQU1DLGNBQWMsR0FBRyxDQUNuQjtRQUFFRixTQUFTLEVBQUVKLG1CQUFtQjtRQUFFSyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsRUFDaEQ7UUFBRUQsU0FBUyxFQUFFRixzQkFBc0I7UUFBRUcsUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ25EO1FBQ0lELFNBQVMsRUFBRXpCLG1EQUFVO1FBQ3JCMEIsUUFBUSxFQUFFO1VBQ05FLEtBQUssRUFBRUYsUUFBUSxDQUFDRyxZQUFZLENBQUNEO1FBQ2pDO01BQ0osQ0FBQyxDQUNKO01BRUQsb0JBQ0luQywwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ1EsSUFBSTtRQUNEeUIsUUFBUSxFQUFFO1VBQ05LLElBQUksRUFBRSxhQUFhO1VBQ25CQyxhQUFhLEVBQUUsSUFBSTtVQUNuQkMsVUFBVSxFQUFFLEtBQUs7VUFDakJDLFFBQVEsRUFBRSxJQUFJO1VBQ2RDLFVBQVUsRUFBRSxJQUFJO1VBQ2hCQyxlQUFlLEVBQUUsSUFBSTtVQUNyQkMsWUFBWSxFQUFFLENBQUM7VUFDZkMsU0FBUyxFQUFFLElBQUk7VUFDZkMsT0FBTyxFQUFFLENBQ0w7WUFDSUMsRUFBRSxFQUFFLElBQUk7WUFDUlQsSUFBSSxFQUFFbEIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNiNEIsSUFBSSxFQUFFLFFBQVE7WUFDZEMsT0FBTyxFQUFFLE9BQU87WUFDaEJQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLEVBQ0Q7WUFDSU0sRUFBRSxFQUFFLGFBQWE7WUFDakJULElBQUksRUFBRWxCLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDdEI0QixJQUFJLEVBQUUsUUFBUTtZQUNkQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLElBQUk7WUFDaEJELFFBQVEsRUFBRTtVQUNkLENBQUMsRUFDRDtZQUNJTSxFQUFFLEVBQUUsVUFBVTtZQUNkVCxJQUFJLEVBQUUsRUFBRTtZQUNSVSxJQUFJLEVBQUUsV0FBVztZQUNqQkMsT0FBTyxFQUFFLE9BQU87WUFDaEJQLFVBQVUsRUFBRSxLQUFLO1lBQ2pCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLENBQ0o7VUFDRFMsSUFBSSxFQUFFNUI7UUFDVixDQUFFO1FBQ0ZTLFlBQVksRUFBS0EsWUFBYztRQUMvQkcsY0FBYyxFQUFLQTtNQUFnQixDQUN0QyxDQUNBLENBQUM7SUFFZDtFQUFDO0FBQUEsRUE3RXdCbEMsd0RBQWU7QUFnRjVDLElBQU1vRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBRUMsUUFBUSxFQUFLO0VBQ3pDLE9BQU87SUFDSGpDLFFBQVEsRUFBRWYsMERBQWMsQ0FBQytDLEtBQUs7RUFDbEMsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWpELG9EQUFPLENBQUNnRCxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUNuRCw2REFBWSxDQUFDUSxjQUFjLEVBQUVOLHdFQUFzQixDQUFDLENBQUM7Ozs7Ozs7O1VDaEduRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoTG9jYWxpemUsIGNvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQHBlbnRhLWIvbWEtbGliJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQHBlbnRhLWIvZ3JpZCc7XHJcbmltcG9ydCB7IHNlbGVjdEZlYXR1cmVzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJztcclxuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSAnLi4vRm9ybUJ1dHRvbic7XHJcblxyXG5jb25zdCBHcmlkID0gY29tcG9uZW50cy5HcmlkO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgZmVhdHVyZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvL2NvbnN0IGZlYXR1cmVzUHJvcHMgPSBmZWF0dXJlcy5tYXAoKGYpID0+IGYucHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzUHJvcHNXaXRoQ28gPSBmZWF0dXJlcy5tYXAoKGYpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmYucHJvcGVydGllcyxcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGYuZ2VvbWV0cnksXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBab29tVG9GZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdab29tVG9GZWF0dXJlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEZvcm1CdXR0b24sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSOiBzZXR0aW5ncy5kYXRhU2V0dGluZ3MuTEFZRVIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYnVmZmVyIGRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93SWRlbnRpZmllcjogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxhcmdlVmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q29tcG9uZW50OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWFya2VyX25hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0KFwiTWFya2VyIG5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZlYXR1cmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZWF0dXJlc1Byb3BzV2l0aENvLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHJDb21wb25lbnRzID0geyB0ckNvbXBvbmVudHMgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb21wb25lbnRzID0geyBncmlkQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKHdpdGhMb2NhbGl6ZShNYXBDbGlja1Jlc3VsdCwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQyZWE1NDNmZTI5YzkwM2M2MTA4XCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aExvY2FsaXplIiwiY29tcG9uZW50UmVnaXN0cnkiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiY29ubmVjdCIsImNvbXBvbmVudHMiLCJzZWxlY3RGZWF0dXJlcyIsIkZvcm1CdXR0b24iLCJHcmlkIiwiTWFwQ2xpY2tSZXN1bHQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInQiLCJmZWF0dXJlcyIsImZlYXR1cmVzUHJvcHNXaXRoQ28iLCJtYXAiLCJmIiwiX29iamVjdFNwcmVhZCIsInByb3BlcnRpZXMiLCJnZW9tZXRyeSIsIlpvb21Ub0ZlYXR1cmVCdXR0b24iLCJnZXRDb21wb25lbnQiLCJIaWdobGlnaHRGZWF0dXJlQnV0dG9uIiwidHJDb21wb25lbnRzIiwiY29tcG9uZW50Iiwic2V0dGluZ3MiLCJncmlkQ29tcG9uZW50cyIsIkxBWUVSIiwiZGF0YVNldHRpbmdzIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJyb3dJZGVudGlmaWVyIiwic2VsZWN0YWJsZSIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsImVuYWJsZUxhcmdlVmlldyIsIm1heENvbXBvbmVudCIsInJlc2l6YWJsZSIsImNvbHVtbnMiLCJpZCIsInR5cGUiLCJkaXNwbGF5IiwiZGF0YSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9