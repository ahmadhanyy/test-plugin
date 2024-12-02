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
var MapClickResults = /*#__PURE__*/function (_React$Component) {
  function MapClickResults(props) {
    _classCallCheck(this, MapClickResults);
    return _callSuper(this, MapClickResults, [props]);
  }
  _inherits(MapClickResults, _React$Component);
  return _createClass(MapClickResults, [{
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, null)((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.withLocalize)(MapClickResults, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE)));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a30881ca678df154b5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYTI3YjE3OGEzNzBjODIyNGRjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0M7QUFDQztBQUM3QjtBQUNLO0FBQ007QUFDVjtBQUV2QyxJQUFNUSxJQUFJLEdBQUdILHFEQUFVLENBQUNHLElBQUk7QUFBQyxJQUV2QkMsZUFBZSwwQkFBQUMsZ0JBQUE7RUFDakIsU0FBQUQsZ0JBQVlFLEtBQUssRUFBRTtJQUFBQyxlQUFBLE9BQUFILGVBQUE7SUFBQSxPQUFBSSxVQUFBLE9BQUFKLGVBQUEsR0FDVEUsS0FBSztFQUNmO0VBQUNHLFNBQUEsQ0FBQUwsZUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sZUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDTCxJQUFBQyxXQUFBLEdBQXVCLElBQUksQ0FBQ1IsS0FBSztRQUF6QlMsQ0FBQyxHQUFBRCxXQUFBLENBQURDLENBQUM7UUFBRUMsUUFBUSxHQUFBRixXQUFBLENBQVJFLFFBQVE7TUFDbkI7O01BRUEsSUFBTUMsbUJBQW1CLEdBQUdELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFVBQUNDLENBQUM7UUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDcENELENBQUMsQ0FBQ0UsVUFBVTtVQUNmQyxRQUFRLEVBQUVILENBQUMsQ0FBQ0c7UUFBUTtNQUFBLENBQ3RCLENBQUM7TUFFSCxJQUFNQyxtQkFBbUIsR0FBRzFCLDhEQUFpQixDQUFDMkIsWUFBWSxDQUFDLHFCQUFxQixDQUFDO01BQ2pGLElBQU1DLHNCQUFzQixHQUFHNUIsOERBQWlCLENBQUMyQixZQUFZLENBQUMsd0JBQXdCLENBQUM7TUFFdkYsSUFBTUUsWUFBWSxHQUFHLENBQ2pCO1FBQUVDLFNBQVMsRUFBRUosbUJBQW1CO1FBQUVLLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxFQUNoRDtRQUFFRCxTQUFTLEVBQUVGLHNCQUFzQjtRQUFFRyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsQ0FDdEQ7TUFDRCxJQUFNQyxjQUFjLEdBQUcsQ0FDbkI7UUFBRUYsU0FBUyxFQUFFSixtQkFBbUI7UUFBRUssUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLEVBQ2hEO1FBQUVELFNBQVMsRUFBRUYsc0JBQXNCO1FBQUVHLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxFQUNuRDtRQUFFRCxTQUFTLEVBQUV6QixtREFBVTtRQUFFMEIsUUFBUSxFQUFFO1VBQUNFLEtBQUssRUFBRSxJQUFJLENBQUN4QixLQUFLLENBQUNzQixRQUFRLENBQUNHLFlBQVksQ0FBQ0M7UUFBRztNQUFDLENBQUMsQ0FDcEY7TUFFRCxvQkFDSXJDLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDUSxJQUFJO1FBQ0R5QixRQUFRLEVBQUU7VUFDTk0sSUFBSSxFQUFFLGFBQWE7VUFDbkJDLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxVQUFVLEVBQUUsS0FBSztVQUNqQkMsUUFBUSxFQUFFLElBQUk7VUFDZEMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLGVBQWUsRUFBRSxJQUFJO1VBQ3JCQyxZQUFZLEVBQUUsQ0FBQztVQUNmQyxTQUFTLEVBQUUsSUFBSTtVQUNmQyxPQUFPLEVBQUUsQ0FDTDtZQUNJQyxFQUFFLEVBQUUsSUFBSTtZQUNSVCxJQUFJLEVBQUVuQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2I2QixJQUFJLEVBQUUsUUFBUTtZQUNkQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLElBQUk7WUFDaEJELFFBQVEsRUFBRTtVQUNkLENBQUMsRUFDRDtZQUNJTSxFQUFFLEVBQUUsYUFBYTtZQUNqQlQsSUFBSSxFQUFFbkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN0QjZCLElBQUksRUFBRSxRQUFRO1lBQ2RDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCUCxVQUFVLEVBQUUsSUFBSTtZQUNoQkQsUUFBUSxFQUFFO1VBQ2QsQ0FBQyxFQUNEO1lBQ0lNLEVBQUUsRUFBRSxVQUFVO1lBQ2RULElBQUksRUFBRSxFQUFFO1lBQ1JVLElBQUksRUFBRSxXQUFXO1lBQ2pCQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLEtBQUs7WUFDakJELFFBQVEsRUFBRTtVQUNkLENBQUMsQ0FDSjtVQUNEUyxJQUFJLEVBQUU3QjtRQUNWLENBQUU7UUFDRlMsWUFBWSxFQUFLQSxZQUFjO1FBQy9CRyxjQUFjLEVBQUtBO01BQWdCLENBQ3RDLENBQ0EsQ0FBQztJQUVkO0VBQUM7QUFBQSxFQXhFeUJsQyx3REFBZTtBQTJFN0MsSUFBTXFELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIbEMsUUFBUSxFQUFFZiwwREFBYyxDQUFDZ0QsS0FBSztFQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlbEQsb0RBQU8sQ0FBQ2lELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQ3BELDZEQUFZLENBQUNRLGVBQWUsRUFBRU4sd0VBQXNCLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzRnBHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9NYXBDbGlja1Jlc3VsdC9NYXBDbGlja1Jlc3VsdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhMb2NhbGl6ZSwgY29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAcGVudGEtYi9tYS1saWInO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdAcGVudGEtYi9ncmlkJztcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXMgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tICcuLi9Gb3JtQnV0dG9uJztcclxuXHJcbmNvbnN0IEdyaWQgPSBjb21wb25lbnRzLkdyaWQ7XHJcblxyXG5jbGFzcyBNYXBDbGlja1Jlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgZmVhdHVyZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvL2NvbnN0IGZlYXR1cmVzUHJvcHMgPSBmZWF0dXJlcy5tYXAoKGYpID0+IGYucHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzUHJvcHNXaXRoQ28gPSBmZWF0dXJlcy5tYXAoKGYpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmYucHJvcGVydGllcyxcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGYuZ2VvbWV0cnksXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBab29tVG9GZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdab29tVG9GZWF0dXJlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogRm9ybUJ1dHRvbiwgc2V0dGluZ3M6IHtMQVlFUjogdGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhU2V0dGluZ3MuZGRkfX0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidWZmZXIgZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJZGVudGlmaWVyOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGFyZ2VWaWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhDb21wb25lbnQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXJrZXJfbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJNYXJrZXIgbmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmVhdHVyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZlYXR1cmVzUHJvcHNXaXRoQ28sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0ckNvbXBvbmVudHMgPSB7IHRyQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbXBvbmVudHMgPSB7IGdyaWRDb21wb25lbnRzIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkod2l0aExvY2FsaXplKE1hcENsaWNrUmVzdWx0cywgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhMzA4ODFjYTY3OGRmMTU0YjViXCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aExvY2FsaXplIiwiY29tcG9uZW50UmVnaXN0cnkiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiY29ubmVjdCIsImNvbXBvbmVudHMiLCJzZWxlY3RGZWF0dXJlcyIsIkZvcm1CdXR0b24iLCJHcmlkIiwiTWFwQ2xpY2tSZXN1bHRzIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJ0IiwiZmVhdHVyZXMiLCJmZWF0dXJlc1Byb3BzV2l0aENvIiwibWFwIiwiZiIsIl9vYmplY3RTcHJlYWQiLCJwcm9wZXJ0aWVzIiwiZ2VvbWV0cnkiLCJab29tVG9GZWF0dXJlQnV0dG9uIiwiZ2V0Q29tcG9uZW50IiwiSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiIsInRyQ29tcG9uZW50cyIsImNvbXBvbmVudCIsInNldHRpbmdzIiwiZ3JpZENvbXBvbmVudHMiLCJMQVlFUiIsImRhdGFTZXR0aW5ncyIsImRkZCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwicm93SWRlbnRpZmllciIsInNlbGVjdGFibGUiLCJzb3J0YWJsZSIsImZpbHRlcmFibGUiLCJlbmFibGVMYXJnZVZpZXciLCJtYXhDb21wb25lbnQiLCJyZXNpemFibGUiLCJjb2x1bW5zIiwiaWQiLCJ0eXBlIiwiZGlzcGxheSIsImRhdGEiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==