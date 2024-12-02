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
/* harmony import */ var _services_addServive__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_services_addServive__WEBPACK_IMPORTED_MODULE_5__);
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
      //console.log(this.formData);
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
      var schema = this.props.LAYER.basicSettings.FormComponent;
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
/******/ 	__webpack_require__.h = () => ("d3ca1d169ec145682e86")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNThiNzNiZTg0OGRiN2EyZGIwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNEI7QUFDYTtBQUNsQjtBQUNLO0FBQ0s7QUFDckI7QUFBQSxJQUVoQ08sYUFBYSwwQkFBQUMsZ0JBQUE7RUFDZixTQUFBRCxjQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosYUFBQTtJQUNmRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsYUFBQSxHQUFNRSxLQUFLO0lBQ1hDLEtBQUEsQ0FBS0csUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNsQkgsS0FBQSxDQUFLSSxRQUFRLEdBQUdKLEtBQUEsQ0FBS0ksUUFBUSxDQUFDQyxJQUFJLENBQUFMLEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDN0M7RUFBQ00sU0FBQSxDQUFBVCxhQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQVMsWUFBQSxDQUFBVixhQUFBO0lBQUFXLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLFFBQVFBLENBQUEsRUFBRztNQUFBLElBQUFNLE1BQUE7TUFDUDtNQUNBLElBQUFDLFdBQUEsR0FBa0MsSUFBSSxDQUFDWixLQUFLO1FBQXBDYSxPQUFPLEdBQUFELFdBQUEsQ0FBUEMsT0FBTztRQUFFQyxLQUFLLEdBQUFGLFdBQUEsQ0FBTEUsS0FBSztRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUM3QkYsT0FBTyxDQUFDRyxVQUFVLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNYSixPQUFPLENBQUNHLFVBQVUsR0FDbEIsSUFBSSxDQUFDWixRQUFRLENBQ25CO01BQ0QsSUFBTWMsaUJBQWlCLEdBQUc7UUFDdEJDLElBQUksRUFBRSxtQkFBbUI7UUFDekJDLFFBQVEsRUFBRSxDQUFBSCxhQUFBLEtBQU1KLE9BQU87TUFDM0IsQ0FBQztNQUNELElBQU1RLFNBQVMsR0FBRyxDQUNkO1FBQ0lDLFVBQVUsRUFBRTtVQUNSQyxFQUFFLEVBQUVULEtBQUssQ0FBQ1M7UUFDZCxDQUFDO1FBQ0RILFFBQVEsRUFBRUksSUFBSSxDQUFDQyxTQUFTLENBQUNQLGlCQUFpQixDQUFDO1FBQzNDUSxHQUFHLEVBQUVaLEtBQUssQ0FBQ1k7TUFDZixDQUFDLENBQ0o7TUFDRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO1FBQ3BCakMsMkRBQVcsSUFBQWtDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBS2xCLE1BQUksQ0FBQ1gsS0FBSyxDQUFDb0IsUUFBUSxJQUFFUCxPQUFPLEVBQUMsQ0FBQztNQUNsRCxDQUFDO01BQ0QsSUFBTWlCLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJQyxDQUFDO1FBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEdBQUdGLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUE7TUFDaEV0QyxvRUFBYyxDQUFDeUIsU0FBUyxFQUFFTSxTQUFTLEVBQUVHLE1BQU0sQ0FBQztNQUM1Q2YsS0FBSyxDQUFDLENBQUM7SUFDWDtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QixNQUFNQSxDQUFBLEVBQUc7TUFDTCxJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDcEMsS0FBSyxDQUFDYyxLQUFLLENBQUN1QixhQUFhLENBQUN2QyxhQUFhO01BRTNELG9CQUNJUCwwREFBQTtRQUFLZ0QsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBQztRQUFHO01BQUUsZ0JBQ3ZCakQsMERBQUEsQ0FBQ0MsZ0VBQUk7UUFDRDRDLE1BQU0sRUFBRUEsTUFBTztRQUNmSyxJQUFJLEVBQUUsSUFBSSxDQUFDckMsUUFBUztRQUNwQnNDLFNBQVMsRUFBRWpELHdFQUFzQkE7TUFBQyxDQUNyQyxDQUFDLGVBQ0ZGLDBEQUFBO1FBQUtvRCxTQUFTLEVBQUM7TUFBd0IsZ0JBQ25DcEQsMERBQUE7UUFDSW9ELFNBQVMsRUFBQyxnQ0FBZ0M7UUFDMUNDLE9BQU8sRUFBRSxJQUFJLENBQUN2QztNQUFTLEdBQzFCLFdBRU8sQ0FDUCxDQUNKLENBQUM7SUFFZDtFQUFDO0FBQUEsRUF2RHVCZCx3REFBZTtBQTBEM0MsSUFBTXVELGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQy9CLE9BQU87SUFDSDNCLFFBQVEsRUFBRXpCLGdFQUFjLENBQUNvRCxLQUFLO0VBQ2xDLENBQUM7QUFDTCxDQUFDO0FBR0QsaUVBQWVsRCxvREFBTyxDQUFDaUQsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDaEQsYUFBYSxDQUFDOzs7Ozs7OztVQ3pFNUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAcGVudGEtYi9tbmEtcGVudGEtc21hcnQtZm9ybXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNldEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlc30gZnJvbSBcIi4uLy4uL3NlbGVjdG9ycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBjYWxsQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZFNlcnZpdmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5PblN1Ym1pdCA9IHRoaXMuT25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPblN1Ym1pdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHsgbmV3RmVhdCwgTEFZRVIsIGNsZWFyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG5ld0ZlYXQucHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgLi4ubmV3RmVhdC5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm1EYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgZmVhdHVyZXM6IFt7IC4uLm5ld0ZlYXQgfV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBxdWVyeUJvZHkgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogTEFZRVIuaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IEpTT04uc3RyaW5naWZ5KGZlYXR1cmVDb2xsZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgIGNyczogTEFZRVIuY3JzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGZWF0dXJlcyhbLi4udGhpcy5wcm9wcy5mZWF0dXJlcywgbmV3RmVhdF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25GYWlsID0gKGUpID0+IGNvbnNvbGUubG9nKFwiRlVOQ1RJT04gRkFJTEVEXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNhbGxBZGRTZXJ2aWNlKHF1ZXJ5Qm9keSwgb25TdWNjZXNzLCBvbkZhaWwpO1xyXG4gICAgICAgIGNsZWFyKCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3MuRm9ybUNvbXBvbmVudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOjIwIH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT17TE9DQUxJWkFUSU9OX05BTUVTUEFDRX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVudGEtY29udGFpbmVyLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BlbnRhLWJ1dHRvbiBwZW50YS1tYWluLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5PblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBQb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWF0dXJlczogc2VsZWN0RmVhdHVyZXMoc3RhdGUpLFxyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRm9ybUNvbXBvbmVudCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDNjYTFkMTY5ZWMxNDU2ODJlODZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsInNldEZlYXR1cmVzIiwic2VsZWN0RmVhdHVyZXMiLCJjYWxsQWRkU2VydmljZSIsImNvbm5lY3QiLCJGb3JtQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiZm9ybURhdGEiLCJPblN1Ym1pdCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwibmV3RmVhdCIsIkxBWUVSIiwiY2xlYXIiLCJwcm9wZXJ0aWVzIiwiX29iamVjdFNwcmVhZCIsImZlYXR1cmVDb2xsZWN0aW9uIiwidHlwZSIsImZlYXR1cmVzIiwicXVlcnlCb2R5IiwiZGF0YVNvdXJjZSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNycyIsIm9uU3VjY2VzcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm9uRmFpbCIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlbmRlciIsInNjaGVtYSIsImJhc2ljU2V0dGluZ3MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGF0YSIsIm5hbWVzcGFjZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=