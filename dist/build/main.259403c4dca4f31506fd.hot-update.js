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
          data: featuresProps
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
/******/ 	__webpack_require__.h = () => ("4c531022b1e1a3cbbdbc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1lBQ2pCRCxRQUFRLEVBQUU7VUFDZCxDQUFDLENBQ0o7VUFDRFMsSUFBSSxFQUFFakI7UUFDVixDQUFFO1FBQ0ZwQixZQUFZLEVBQUtBLFlBQWM7UUFDL0JHLGNBQWMsRUFBS0E7TUFBZ0IsQ0FDdEMsQ0FDQSxDQUFDO0lBRWQ7RUFBQztBQUFBLEVBdkR3QmQsd0RBQWU7QUEwRDVDLElBQU1rRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBRUMsUUFBUSxFQUFLO0VBQ3pDLE9BQU87SUFDSDdCLFFBQVEsRUFBRWpCLDBEQUFjLENBQUM2QyxLQUFLO0VBQ2xDLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWUvQyxvREFBTyxDQUFDOEMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDakQsNkRBQVksQ0FBQ2MsY0FBYyxFQUFFWix3RUFBc0IsQ0FBQyxDQUFDOzs7Ozs7OztVQ3RGbkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aExvY2FsaXplLCBjb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ0BwZW50YS1iL2dyaWQnO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlcyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycyc7XHJcblxyXG5jb25zdCBHcmlkID0gY29tcG9uZW50cy5HcmlkO1xyXG5cclxuY29uc3QgWm9vbVRvRmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnWm9vbVRvRmVhdHVyZUJ1dHRvbicpO1xyXG5jb25zdCBIaWdobGlnaHRGZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdIaWdobGlnaHRGZWF0dXJlQnV0dG9uJyk7XHJcblxyXG5jb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICB7IGNvbXBvbmVudDogWm9vbVRvRmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbiAgICB7IGNvbXBvbmVudDogSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiwgc2V0dGluZ3M6IHt9IH0sXHJcbl07XHJcblxyXG5jb25zdCBncmlkQ29tcG9uZW50cyA9IFtcclxuICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgIHsgY29tcG9uZW50OiBIaWdobGlnaHRGZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuXTtcclxuXHJcbmNsYXNzIE1hcENsaWNrUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHQsIGZlYXR1cmVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXNQcm9wcyA9IGZlYXR1cmVzLm1hcCgoZikgPT4gZi5wcm9wZXJ0aWVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidWZmZXIgZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJZGVudGlmaWVyOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGFyZ2VWaWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhDb21wb25lbnQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXJrZXJfbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJNYXJrZXIgbmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmVhdHVyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZlYXR1cmVzUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0ckNvbXBvbmVudHMgPSB7IHRyQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbXBvbmVudHMgPSB7IGdyaWRDb21wb25lbnRzIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkod2l0aExvY2FsaXplKE1hcENsaWNrUmVzdWx0LCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGM1MzEwMjJiMWUxYTNjYmJkYmNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoTG9jYWxpemUiLCJjb21wb25lbnRSZWdpc3RyeSIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJjb25uZWN0IiwiY29tcG9uZW50cyIsInNlbGVjdEZlYXR1cmVzIiwiR3JpZCIsIlpvb21Ub0ZlYXR1cmVCdXR0b24iLCJnZXRDb21wb25lbnQiLCJIaWdobGlnaHRGZWF0dXJlQnV0dG9uIiwidHJDb21wb25lbnRzIiwiY29tcG9uZW50Iiwic2V0dGluZ3MiLCJncmlkQ29tcG9uZW50cyIsIk1hcENsaWNrUmVzdWx0IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiY29uc29sZSIsImxvZyIsImZlYXR1cmVzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInQiLCJmZWF0dXJlc1Byb3BzIiwibWFwIiwiZiIsInByb3BlcnRpZXMiLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsInJvd0lkZW50aWZpZXIiLCJzZWxlY3RhYmxlIiwic29ydGFibGUiLCJmaWx0ZXJhYmxlIiwiZW5hYmxlTGFyZ2VWaWV3IiwibWF4Q29tcG9uZW50IiwicmVzaXphYmxlIiwiY29sdW1ucyIsImlkIiwidHlwZSIsImRpc3BsYXkiLCJkYXRhIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=