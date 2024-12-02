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
      var featuresPropsWithCo = features.map(function (f) {
        return f.properties;
      });
      featuresPropsWithCo = featuresPropsWithCo.map(function (fProps) {
        fProps = _objectSpread(_objectSpread({}, fProps), {}, {
          coordenates: features.geometry
        });
        return f;
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
/******/ 	__webpack_require__.h = () => ("89c7fbeaf6abfb1ebced")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MzdkNjQ1OTlhNWY0YzQ3NWJiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QztBQUNDO0FBQzdCO0FBQ0s7QUFDTTtBQUVqRCxJQUFNTyxJQUFJLEdBQUdGLHFEQUFVLENBQUNFLElBQUk7QUFBQyxJQUV2QkMsY0FBYywwQkFBQUMsZ0JBQUE7RUFDaEIsU0FBQUQsZUFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGNBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLGNBQUEsR0FBTUUsS0FBSztJQUNYSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBQSxDQUFLRCxLQUFLLENBQUNNLFFBQVEsQ0FBQztJQUFDLE9BQUFMLEtBQUE7RUFDckM7RUFBQ00sU0FBQSxDQUFBVCxjQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQVMsWUFBQSxDQUFBVixjQUFBO0lBQUFXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQUFDLFdBQUEsR0FBdUIsSUFBSSxDQUFDWixLQUFLO1FBQXpCYSxDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFUCxRQUFRLEdBQUFNLFdBQUEsQ0FBUk4sUUFBUTtNQUNuQixJQUFNUSxhQUFhLEdBQUdSLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLFVBQUNDLENBQUM7UUFBQSxPQUFLQSxDQUFDLENBQUNDLFVBQVU7TUFBQSxFQUFDO01BQ3ZEYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRVMsYUFBYSxDQUFDO01BRTlDLElBQUlJLG1CQUFtQixHQUFHWixRQUFRLENBQUNTLEdBQUcsQ0FBQyxVQUFDQyxDQUFDO1FBQUEsT0FBS0EsQ0FBQyxDQUFDQyxVQUFVO01BQUEsRUFBQztNQUMzREMsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDSCxHQUFHLENBQUMsVUFBQ0ksTUFBTSxFQUFLO1FBQUNBLE1BQU0sR0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQU9ELE1BQU07VUFBRUUsV0FBVyxFQUFFZixRQUFRLENBQUNnQjtRQUFRLEVBQUM7UUFBRSxPQUFPTixDQUFDO01BQUMsQ0FBQyxDQUFDO01BQzVIWixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRWEsbUJBQW1CLENBQUM7TUFFMUQsSUFBTUssbUJBQW1CLEdBQUcvQiw4REFBaUIsQ0FBQ2dDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztNQUNqRixJQUFNQyxzQkFBc0IsR0FBR2pDLDhEQUFpQixDQUFDZ0MsWUFBWSxDQUFDLHdCQUF3QixDQUFDO01BRXZGLElBQU1FLFlBQVksR0FBRyxDQUNqQjtRQUFFQyxTQUFTLEVBQUVKLG1CQUFtQjtRQUFFSyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsRUFDaEQ7UUFBRUQsU0FBUyxFQUFFRixzQkFBc0I7UUFBRUcsUUFBUSxFQUFFLENBQUM7TUFBRSxDQUFDLENBQ3REO01BQ0QsSUFBTUMsY0FBYyxHQUFHLENBQ25CO1FBQUVGLFNBQVMsRUFBRUosbUJBQW1CO1FBQUVLLFFBQVEsRUFBRSxDQUFDO01BQUUsQ0FBQyxFQUNoRDtRQUFFRCxTQUFTLEVBQUVGLHNCQUFzQjtRQUFFRyxRQUFRLEVBQUUsQ0FBQztNQUFFLENBQUMsQ0FDdEQ7TUFFRCxvQkFDSXRDLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDTyxJQUFJO1FBQ0QrQixRQUFRLEVBQUU7VUFDTkcsSUFBSSxFQUFFLGFBQWE7VUFDbkJDLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxVQUFVLEVBQUUsS0FBSztVQUNqQkMsUUFBUSxFQUFFLElBQUk7VUFDZEMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLGVBQWUsRUFBRSxJQUFJO1VBQ3JCQyxZQUFZLEVBQUUsQ0FBQztVQUNmQyxTQUFTLEVBQUUsSUFBSTtVQUNmQyxPQUFPLEVBQUUsQ0FDTDtZQUNJQyxFQUFFLEVBQUUsSUFBSTtZQUNSVCxJQUFJLEVBQUVsQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2I0QixJQUFJLEVBQUUsUUFBUTtZQUNkQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLElBQUk7WUFDaEJELFFBQVEsRUFBRTtVQUNkLENBQUMsRUFDRDtZQUNJTSxFQUFFLEVBQUUsYUFBYTtZQUNqQlQsSUFBSSxFQUFFbEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN0QjRCLElBQUksRUFBRSxRQUFRO1lBQ2RDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCUCxVQUFVLEVBQUUsSUFBSTtZQUNoQkQsUUFBUSxFQUFFO1VBQ2QsQ0FBQyxFQUNEO1lBQ0lNLEVBQUUsRUFBRSxVQUFVO1lBQ2RULElBQUksRUFBRSxFQUFFO1lBQ1JVLElBQUksRUFBRSxXQUFXO1lBQ2pCQyxPQUFPLEVBQUUsT0FBTztZQUNoQlAsVUFBVSxFQUFFLEtBQUs7WUFDakJELFFBQVEsRUFBRTtVQUNkLENBQUMsQ0FDSjtVQUNEUyxJQUFJLEVBQUV6QjtRQUNWLENBQUU7UUFDRlEsWUFBWSxFQUFLQSxZQUFjO1FBQy9CRyxjQUFjLEVBQUtBO01BQWdCLENBQ3RDLENBQ0EsQ0FBQztJQUVkO0VBQUM7QUFBQSxFQXhFd0J2Qyx3REFBZTtBQTJFNUMsSUFBTXVELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIekMsUUFBUSxFQUFFViwwREFBYyxDQUFDa0QsS0FBSztFQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlcEQsb0RBQU8sQ0FBQ21ELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQ3RELDZEQUFZLENBQUNPLGNBQWMsRUFBRUwsd0VBQXNCLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxRm5HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9NYXBDbGlja1Jlc3VsdC9NYXBDbGlja1Jlc3VsdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhMb2NhbGl6ZSwgY29tcG9uZW50UmVnaXN0cnkgfSBmcm9tICdAcGVudGEtYi9tYS1saWInO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdAcGVudGEtYi9ncmlkJztcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXMgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMnO1xyXG5cclxuY29uc3QgR3JpZCA9IGNvbXBvbmVudHMuR3JpZDtcclxuXHJcbmNsYXNzIE1hcENsaWNrUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHQsIGZlYXR1cmVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXNQcm9wcyA9IGZlYXR1cmVzLm1hcCgoZikgPT4gZi5wcm9wZXJ0aWVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZlYXR1cmVzUHJvcHMgOiBcIiwgZmVhdHVyZXNQcm9wcyk7XHJcblxyXG4gICAgICAgIGxldCBmZWF0dXJlc1Byb3BzV2l0aENvID0gZmVhdHVyZXMubWFwKChmKSA9PiBmLnByb3BlcnRpZXMpO1xyXG4gICAgICAgIGZlYXR1cmVzUHJvcHNXaXRoQ28gPSBmZWF0dXJlc1Byb3BzV2l0aENvLm1hcCgoZlByb3BzKSA9PiB7ZlByb3BzID0gey4uLmZQcm9wcywgY29vcmRlbmF0ZXM6IGZlYXR1cmVzLmdlb21ldHJ5fTsgcmV0dXJuIGY7fSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmZWF0dXJlc1Byb3BzV2l0aENvIDogXCIsIGZlYXR1cmVzUHJvcHNXaXRoQ28pO1xyXG5cclxuICAgICAgICBjb25zdCBab29tVG9GZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdab29tVG9GZWF0dXJlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYnVmZmVyIGRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93SWRlbnRpZmllcjogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxhcmdlVmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q29tcG9uZW50OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWFya2VyX25hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0KFwiTWFya2VyIG5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZlYXR1cmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBmZWF0dXJlc1Byb3BzV2l0aENvLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHJDb21wb25lbnRzID0geyB0ckNvbXBvbmVudHMgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRDb21wb25lbnRzID0geyBncmlkQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKHdpdGhMb2NhbGl6ZShNYXBDbGlja1Jlc3VsdCwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5YzdmYmVhZjZhYmZiMWViY2VkXCIpIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aExvY2FsaXplIiwiY29tcG9uZW50UmVnaXN0cnkiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiY29ubmVjdCIsImNvbXBvbmVudHMiLCJzZWxlY3RGZWF0dXJlcyIsIkdyaWQiLCJNYXBDbGlja1Jlc3VsdCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImNvbnNvbGUiLCJsb2ciLCJmZWF0dXJlcyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJ0IiwiZmVhdHVyZXNQcm9wcyIsIm1hcCIsImYiLCJwcm9wZXJ0aWVzIiwiZmVhdHVyZXNQcm9wc1dpdGhDbyIsImZQcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJjb29yZGVuYXRlcyIsImdlb21ldHJ5IiwiWm9vbVRvRmVhdHVyZUJ1dHRvbiIsImdldENvbXBvbmVudCIsIkhpZ2hsaWdodEZlYXR1cmVCdXR0b24iLCJ0ckNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJzZXR0aW5ncyIsImdyaWRDb21wb25lbnRzIiwiY3JlYXRlRWxlbWVudCIsIm5hbWUiLCJyb3dJZGVudGlmaWVyIiwic2VsZWN0YWJsZSIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsImVuYWJsZUxhcmdlVmlldyIsIm1heENvbXBvbmVudCIsInJlc2l6YWJsZSIsImNvbHVtbnMiLCJpZCIsInR5cGUiLCJkaXNwbGF5IiwiZGF0YSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9