"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/FormComponent/index.js":
/*!***********************************************!*\
  !*** ./src/components/FormComponent/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @penta-b/mna-penta-smart-forms */ "./node_modules/@penta-b/mna-penta-smart-forms/dist/build/Form-Builder-mna0.0.1.js");
/* harmony import */ var _penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _selectors_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/index */ "./src/selectors/index.js");
/* harmony import */ var _services_addServive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/addServive */ "./src/services/addServive.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
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







var FormComponent = /*#__PURE__*/function (_React$Component) {
  function FormComponent(props) {
    var _this;
    _classCallCheck(this, FormComponent);
    _this = _callSuper(this, FormComponent, [props]);
    _this.formData = {};
    _this.OnSubmit = _this.OnSubmit.bind(_this);
    return _this;
  }
  _inherits(FormComponent, _React$Component);
  return _createClass(FormComponent, [{
    key: "OnSubmit",
    value: function OnSubmit() {
      var _this2 = this;
      var _this$props = this.props,
        newFeat = _this$props.newFeat,
        LAYER = _this$props.LAYER,
        clear = _this$props.clear;
      newFeat.properties = _objectSpread(_objectSpread({}, newFeat.properties), this.formData);
      var featureCollection = {
        type: "FeatureCollection",
        features: [_objectSpread({}, newFeat)]
      };
      var queryBody = [{
        dataSource: {
          id: LAYER.id
        },
        features: JSON.stringify(featureCollection),
        crs: LAYER.crs
      }];
      var onSuccess = function onSuccess() {
        (0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setFeatures)([].concat(_toConsumableArray(_this2.props.features), [newFeat]));
      };
      var onFail = function onFail(e) {
        return console.log("FUNCTION FAILED" + e.message);
      };
      (0,_services_addServive__WEBPACK_IMPORTED_MODULE_5__.callAddService)(queryBody, onSuccess, onFail);
      clear();
    }
  }, {
    key: "render",
    value: function render() {
      var schema = this.props.LAYER.basicSettings.FormComponentt;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          padding: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__.Form, {
        schema: schema,
        data: this.formData,
        namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "penta-container-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "penta-button penta-main-button",
        onClick: this.OnSubmit
      }, "Add Point")));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state) {
  return {
    features: (0,_selectors_index__WEBPACK_IMPORTED_MODULE_4__.selectFeatures)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, null)(FormComponent));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b280b7cc5409a099419")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNTZiZTY2NTc3NTRkMDJhNGVhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUNmLFNBQUFELGNBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixhQUFBO0lBQ2ZHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxhQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSCxLQUFBLENBQUtJLFFBQVEsR0FBR0osS0FBQSxDQUFLSSxRQUFRLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDTSxTQUFBLENBQUFULGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGFBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsUUFBUUEsQ0FBQSxFQUFHO01BQUEsSUFBQU0sTUFBQTtNQUNQLElBQUFDLFdBQUEsR0FBa0MsSUFBSSxDQUFDWixLQUFLO1FBQXBDYSxPQUFPLEdBQUFELFdBQUEsQ0FBUEMsT0FBTztRQUFFQyxLQUFLLEdBQUFGLFdBQUEsQ0FBTEUsS0FBSztRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUM3QkYsT0FBTyxDQUFDRyxVQUFVLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNYSixPQUFPLENBQUNHLFVBQVUsR0FDbEIsSUFBSSxDQUFDWixRQUFRLENBQ25CO01BQ0QsSUFBTWMsaUJBQWlCLEdBQUc7UUFDdEJDLElBQUksRUFBRSxtQkFBbUI7UUFDekJDLFFBQVEsRUFBRSxDQUFBSCxhQUFBLEtBQU1KLE9BQU87TUFDM0IsQ0FBQztNQUNELElBQU1RLFNBQVMsR0FBRyxDQUNkO1FBQ0lDLFVBQVUsRUFBRTtVQUNSQyxFQUFFLEVBQUVULEtBQUssQ0FBQ1M7UUFDZCxDQUFDO1FBQ0RILFFBQVEsRUFBRUksSUFBSSxDQUFDQyxTQUFTLENBQUNQLGlCQUFpQixDQUFDO1FBQzNDUSxHQUFHLEVBQUVaLEtBQUssQ0FBQ1k7TUFDZixDQUFDLENBQ0o7TUFDRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO1FBQ3BCakMsMkRBQVcsSUFBQWtDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBS2xCLE1BQUksQ0FBQ1gsS0FBSyxDQUFDb0IsUUFBUSxJQUFFUCxPQUFPLEVBQUMsQ0FBQztNQUNsRCxDQUFDO01BQ0QsSUFBTWlCLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJQyxDQUFDO1FBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEdBQUdGLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUE7TUFDaEV0QyxvRUFBYyxDQUFDeUIsU0FBUyxFQUFFTSxTQUFTLEVBQUVHLE1BQU0sQ0FBQztNQUM1Q2YsS0FBSyxDQUFDLENBQUM7SUFDWDtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QixNQUFNQSxDQUFBLEVBQUc7TUFDTCxJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDcEMsS0FBSyxDQUFDYyxLQUFLLENBQUN1QixhQUFhLENBQUNDLGNBQWM7TUFFNUQsb0JBQ0kvQywwREFBQTtRQUFLaUQsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBQztRQUFHO01BQUUsZ0JBQ3ZCbEQsMERBQUEsQ0FBQ0MsZ0VBQUk7UUFDRDRDLE1BQU0sRUFBRUEsTUFBTztRQUNmTSxJQUFJLEVBQUUsSUFBSSxDQUFDdEMsUUFBUztRQUNwQnVDLFNBQVMsRUFBRWxELHdFQUFzQkE7TUFBQyxDQUNyQyxDQUFDLGVBQ0ZGLDBEQUFBO1FBQUtxRCxTQUFTLEVBQUM7TUFBd0IsZ0JBQ25DckQsMERBQUE7UUFDSXFELFNBQVMsRUFBQyxnQ0FBZ0M7UUFDMUNDLE9BQU8sRUFBRSxJQUFJLENBQUN4QztNQUFTLEdBQzFCLFdBRU8sQ0FDUCxDQUNKLENBQUM7SUFFZDtFQUFDO0FBQUEsRUF0RHVCZCx3REFBZTtBQXlEM0MsSUFBTXdELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQy9CLE9BQU87SUFDSDVCLFFBQVEsRUFBRXpCLGdFQUFjLENBQUNxRCxLQUFLO0VBQ2xDLENBQUM7QUFDTCxDQUFDO0FBR0QsaUVBQWVuRCxvREFBTyxDQUFDa0QsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDakQsYUFBYSxDQUFDOzs7Ozs7OztVQ3hFNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAcGVudGEtYi9tbmEtcGVudGEtc21hcnQtZm9ybXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNldEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlc30gZnJvbSBcIi4uLy4uL3NlbGVjdG9ycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBjYWxsQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZFNlcnZpdmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5PblN1Ym1pdCA9IHRoaXMuT25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB7IG5ld0ZlYXQsIExBWUVSLCBjbGVhciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBuZXdGZWF0LnByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ld0ZlYXQucHJvcGVydGllcyxcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtRGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbeyAuLi5uZXdGZWF0IH1dLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcXVlcnlCb2R5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IExBWUVSLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBKU09OLnN0cmluZ2lmeShmZWF0dXJlQ29sbGVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICBjcnM6IExBWUVSLmNycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0RmVhdHVyZXMoWy4uLnRoaXMucHJvcHMuZmVhdHVyZXMsIG5ld0ZlYXRdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRmFpbCA9IChlKSA9PiBjb25zb2xlLmxvZyhcIkZVTkNUSU9OIEZBSUxFRFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICBjYWxsQWRkU2VydmljZShxdWVyeUJvZHksIG9uU3VjY2Vzcywgb25GYWlsKTtcclxuICAgICAgICBjbGVhcigpOyBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5wcm9wcy5MQVlFUi5iYXNpY1NldHRpbmdzLkZvcm1Db21wb25lbnR0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6MjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPXtMT0NBTElaQVRJT05fTkFNRVNQQUNFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZW50YS1jb250YWluZXItY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGVudGEtYnV0dG9uIHBlbnRhLW1haW4tYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLk9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShGb3JtQ29tcG9uZW50KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjI4MGI3Y2M1NDA5YTA5OTQxOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwic2V0RmVhdHVyZXMiLCJzZWxlY3RGZWF0dXJlcyIsImNhbGxBZGRTZXJ2aWNlIiwiY29ubmVjdCIsIkZvcm1Db21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJmb3JtRGF0YSIsIk9uU3VibWl0IiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJuZXdGZWF0IiwiTEFZRVIiLCJjbGVhciIsInByb3BlcnRpZXMiLCJfb2JqZWN0U3ByZWFkIiwiZmVhdHVyZUNvbGxlY3Rpb24iLCJ0eXBlIiwiZmVhdHVyZXMiLCJxdWVyeUJvZHkiLCJkYXRhU291cmNlIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JzIiwib25TdWNjZXNzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib25GYWlsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicmVuZGVyIiwic2NoZW1hIiwiYmFzaWNTZXR0aW5ncyIsIkZvcm1Db21wb25lbnR0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZyIsImRhdGEiLCJuYW1lc3BhY2UiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9