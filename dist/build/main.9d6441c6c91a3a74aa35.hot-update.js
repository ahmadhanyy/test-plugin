"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/FormButton/FormButton.component.js":
/*!***********************************************************!*\
  !*** ./src/components/FormButton/FormButton.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
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




var FormButton = /*#__PURE__*/function (_React$Component) {
  function FormButton(props) {
    var _this;
    _classCallCheck(this, FormButton);
    _this = _callSuper(this, FormButton, [props]);
    _this.openForm = _this.openForm.bind(_this);
    _this.state = {
      isActive: false
    };
    _this.AddFormID = null;
    return _this;
  }
  _inherits(FormButton, _React$Component);
  return _createClass(FormButton, [{
    key: "openForm",
    value: function openForm() {
      var _this2 = this;
      var _this$props = this.props,
        t = _this$props.t,
        notify = _this$props.notify,
        LAYER = _this$props.LAYER;
      var _handleMapClick = function handleMapClick(coords) {
        var newFeat = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: coords.coordinate
          },
          properties: {
            id: 123
          }
        };
        console.log("new Feature : ", newFeat);
        //console.log("LAYER : ", LAYER);

        _this2.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            console.log("clear is working");
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false
            }));
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: true
          }));
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: false
          }));
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: false
        }));
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: true
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        onClick: this.openForm
      }, "Add Point");
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAddForm: function showAddForm(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'FormComponent', props, onAdd, onRemove));
    },
    removeComponent: function removeComponent(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator("removeComponent", id));
    },
    notify: function notify(msg, type) {
      return dispatch((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.systemAddNotification)(msg, type));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.withLocalize)(FormButton), _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE));

/***/ }),

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
/* harmony import */ var _FormButton_FormButton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormButton/FormButton.component */ "./src/components/FormButton/FormButton.component.js");
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
        component: _FormButton_FormButton_component__WEBPACK_IMPORTED_MODULE_6__["default"],
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
/******/ 	__webpack_require__.h = () => ("1c7c422784fefbb1e8ae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDY0NDFjNmM5MWEzYTc0YWEzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQzFCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQy9CLElBQU1DLE9BQU8sR0FBRztVQUNaQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxRQUFRLEVBQUU7WUFDTkQsSUFBSSxFQUFFLE9BQU87WUFDYkUsV0FBVyxFQUFFSixNQUFNLENBQUNLO1VBQ3hCLENBQUM7VUFDREMsVUFBVSxFQUFF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QSxDQUFJbEMsS0FBSyxFQUFFbUMsUUFBUSxFQUFLO0VBQ3pDLE9BQU87SUFDSFksUUFBUSxFQUFFSCwwREFBYyxDQUFDNUMsS0FBSztFQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlZCxvREFBTyxDQUFDZ0QsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDN0MsNkRBQVksQ0FBQ3lELGNBQWMsRUFBRXZELHdFQUFzQixDQUFDLENBQUM7Ozs7Ozs7O1VDM0ZuRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1dHRvbi9Gb3JtQnV0dG9uLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnksIHdpdGhMb2NhbGl6ZSwgc3lzdGVtQWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3BlbkZvcm0gPSB0aGlzLm9wZW5Gb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Gb3JtKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgbm90aWZ5LCBMQVlFUiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTWFwQ2xpY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZlYXQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZHMuY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEyM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgRmVhdHVyZSA6IFwiLCBuZXdGZWF0KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxBWUVSIDogXCIsIExBWUVSKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0FkZEZvcm0oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmVhdCxcclxuICAgICAgICAgICAgICAgICAgICBMQVlFUixcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25BZGQgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiBhZGRcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gcmVtb3ZlXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPRkZcIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vcGVuRm9ybX0+QWRkIFBvaW50PC9saT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93QWRkRm9ybTogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ0Zvcm1Db21wb25lbnQnLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICAgICAgbm90aWZ5OiAobXNnLCB0eXBlKSA9PiBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24obXNnLCB0eXBlKSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aExvY2FsaXplKEZvcm1CdXR0b24pLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoTG9jYWxpemUsIGNvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSAnQHBlbnRhLWIvbWEtbGliJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnQHBlbnRhLWIvZ3JpZCc7XHJcbmltcG9ydCB7IHNlbGVjdEZlYXR1cmVzIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzJztcclxuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSAnLi4vRm9ybUJ1dHRvbi9Gb3JtQnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBHcmlkID0gY29tcG9uZW50cy5HcmlkO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgZmVhdHVyZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvL2NvbnN0IGZlYXR1cmVzUHJvcHMgPSBmZWF0dXJlcy5tYXAoKGYpID0+IGYucHJvcGVydGllcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzUHJvcHNXaXRoQ28gPSBmZWF0dXJlcy5tYXAoKGYpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmYucHJvcGVydGllcyxcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGYuZ2VvbWV0cnksXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBab29tVG9GZWF0dXJlQnV0dG9uID0gY29tcG9uZW50UmVnaXN0cnkuZ2V0Q29tcG9uZW50KCdab29tVG9GZWF0dXJlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbiA9IGNvbXBvbmVudFJlZ2lzdHJ5LmdldENvbXBvbmVudCgnSGlnaGxpZ2h0RmVhdHVyZUJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCB0ckNvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbXBvbmVudHMgPSBbXHJcbiAgICAgICAgICAgIHsgY29tcG9uZW50OiBab29tVG9GZWF0dXJlQnV0dG9uLCBzZXR0aW5nczoge30gfSxcclxuICAgICAgICAgICAgeyBjb21wb25lbnQ6IEhpZ2hsaWdodEZlYXR1cmVCdXR0b24sIHNldHRpbmdzOiB7fSB9LFxyXG4gICAgICAgICAgICB7IGNvbXBvbmVudDogRm9ybUJ1dHRvbiwgc2V0dGluZ3M6IHtMQVlFUjogdGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhU2V0dGluZ3MuZGRkfX0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidWZmZXIgZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJZGVudGlmaWVyOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGFyZ2VWaWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhDb21wb25lbnQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtYXJrZXJfbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHQoXCJNYXJrZXIgbmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmVhdHVyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZlYXR1cmVzUHJvcHNXaXRoQ28sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0ckNvbXBvbmVudHMgPSB7IHRyQ29tcG9uZW50cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbXBvbmVudHMgPSB7IGdyaWRDb21wb25lbnRzIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkod2l0aExvY2FsaXplKE1hcENsaWNrUmVzdWx0LCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWM3YzQyMjc4NGZlZmJiMWU4YWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm9wZW5Gb3JtIiwiYmluZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJBZGRGb3JtSUQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwiY29uc29sZSIsImxvZyIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwibXNnIiwiY29tcG9uZW50UmVnaXN0cnkiLCJjb21wb25lbnRzIiwic2VsZWN0RmVhdHVyZXMiLCJHcmlkIiwiTWFwQ2xpY2tSZXN1bHQiLCJmZWF0dXJlcyIsImZlYXR1cmVzUHJvcHNXaXRoQ28iLCJtYXAiLCJmIiwiWm9vbVRvRmVhdHVyZUJ1dHRvbiIsImdldENvbXBvbmVudCIsIkhpZ2hsaWdodEZlYXR1cmVCdXR0b24iLCJ0ckNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJzZXR0aW5ncyIsImdyaWRDb21wb25lbnRzIiwiZGF0YVNldHRpbmdzIiwiZGRkIiwibmFtZSIsInJvd0lkZW50aWZpZXIiLCJzZWxlY3RhYmxlIiwic29ydGFibGUiLCJmaWx0ZXJhYmxlIiwiZW5hYmxlTGFyZ2VWaWV3IiwibWF4Q29tcG9uZW50IiwicmVzaXphYmxlIiwiY29sdW1ucyIsImRpc3BsYXkiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==