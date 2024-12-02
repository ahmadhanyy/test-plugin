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
      var schema = this.props.LAYER.basicSettings.FormComponent;
      console.log("this.props", this.props);
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
/******/ 	__webpack_require__.h = () => ("69d36096e5769ee057c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYTkzMDBmY2Y1NGU4NGFkMDY1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUNmLFNBQUFELGNBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixhQUFBO0lBQ2ZHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxhQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSCxLQUFBLENBQUtJLFFBQVEsR0FBR0osS0FBQSxDQUFLSSxRQUFRLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDTSxTQUFBLENBQUFULGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGFBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsUUFBUUEsQ0FBQSxFQUFHO01BQUEsSUFBQU0sTUFBQTtNQUNQLElBQUFDLFdBQUEsR0FBa0MsSUFBSSxDQUFDWixLQUFLO1FBQXBDYSxPQUFPLEdBQUFELFdBQUEsQ0FBUEMsT0FBTztRQUFFQyxLQUFLLEdBQUFGLFdBQUEsQ0FBTEUsS0FBSztRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUM3QkYsT0FBTyxDQUFDRyxVQUFVLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNYSixPQUFPLENBQUNHLFVBQVUsR0FDbEIsSUFBSSxDQUFDWixRQUFRLENBQ25CO01BQ0QsSUFBTWMsaUJBQWlCLEdBQUc7UUFDdEJDLElBQUksRUFBRSxtQkFBbUI7UUFDekJDLFFBQVEsRUFBRSxDQUFBSCxhQUFBLEtBQU1KLE9BQU87TUFDM0IsQ0FBQztNQUNELElBQU1RLFNBQVMsR0FBRyxDQUNkO1FBQ0lDLFVBQVUsRUFBRTtVQUNSQyxFQUFFLEVBQUVULEtBQUssQ0FBQ1M7UUFDZCxDQUFDO1FBQ0RILFFBQVEsRUFBRUksSUFBSSxDQUFDQyxTQUFTLENBQUNQLGlCQUFpQixDQUFDO1FBQzNDUSxHQUFHLEVBQUVaLEtBQUssQ0FBQ1k7TUFDZixDQUFDLENBQ0o7TUFDRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO1FBQ3BCakMsMkRBQVcsSUFBQWtDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBS2xCLE1BQUksQ0FBQ1gsS0FBSyxDQUFDb0IsUUFBUSxJQUFFUCxPQUFPLEVBQUMsQ0FBQztNQUNsRCxDQUFDO01BQ0QsSUFBTWlCLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFJQyxDQUFDO1FBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEdBQUdGLENBQUMsQ0FBQ0csT0FBTyxDQUFDO01BQUE7TUFDaEV0QyxvRUFBYyxDQUFDeUIsU0FBUyxFQUFFTSxTQUFTLEVBQUVHLE1BQU0sQ0FBQztNQUM1Q2YsS0FBSyxDQUFDLENBQUM7SUFDWDtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF5QixNQUFNQSxDQUFBLEVBQUc7TUFDTCxJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDcEMsS0FBSyxDQUFDYyxLQUFLLENBQUN1QixhQUFhLENBQUN2QyxhQUFhO01BQzNEa0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ2pDLEtBQUssQ0FBQztNQUVyQyxvQkFDSVQsMERBQUE7UUFBS2dELEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUM7UUFBRztNQUFFLGdCQUN2QmpELDBEQUFBLENBQUNDLGdFQUFJO1FBQ0Q0QyxNQUFNLEVBQUVBLE1BQU87UUFDZkssSUFBSSxFQUFFLElBQUksQ0FBQ3JDLFFBQVM7UUFDcEJzQyxTQUFTLEVBQUVqRCx3RUFBc0JBO01BQUMsQ0FDckMsQ0FBQyxlQUNGRiwwREFBQTtRQUFLb0QsU0FBUyxFQUFDO01BQXdCLGdCQUNuQ3BELDBEQUFBO1FBQ0lvRCxTQUFTLEVBQUMsZ0NBQWdDO1FBQzFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDdkM7TUFBUyxHQUMxQixXQUVPLENBQ1AsQ0FDSixDQUFDO0lBRWQ7RUFBQztBQUFBLEVBdkR1QmQsd0RBQWU7QUEwRDNDLElBQU11RCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixPQUFPO0lBQ0gzQixRQUFRLEVBQUV6QixnRUFBYyxDQUFDb0QsS0FBSztFQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUdELGlFQUFlbEQsb0RBQU8sQ0FBQ2lELGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQ2hELGFBQWEsQ0FBQzs7Ozs7Ozs7VUN6RTVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQHBlbnRhLWIvbW5hLXBlbnRhLXNtYXJ0LWZvcm1zJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzZXRGZWF0dXJlc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXN9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgY2FsbEFkZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGRTZXJ2aXZlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuT25TdWJtaXQgPSB0aGlzLk9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBuZXdGZWF0LCBMQVlFUiwgY2xlYXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbmV3RmVhdC5wcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICAuLi5uZXdGZWF0LnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybURhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBmZWF0dXJlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxyXG4gICAgICAgICAgICBmZWF0dXJlczogW3sgLi4ubmV3RmVhdCB9XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5Qm9keSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBMQVlFUi5pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogSlNPTi5zdHJpbmdpZnkoZmVhdHVyZUNvbGxlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgY3JzOiBMQVlFUi5jcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZlYXR1cmVzKFsuLi50aGlzLnByb3BzLmZlYXR1cmVzLCBuZXdGZWF0XSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkZhaWwgPSAoZSkgPT4gY29uc29sZS5sb2coXCJGVU5DVElPTiBGQUlMRURcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgY2FsbEFkZFNlcnZpY2UocXVlcnlCb2R5LCBvblN1Y2Nlc3MsIG9uRmFpbCk7XHJcbiAgICAgICAgY2xlYXIoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMucHJvcHMuTEFZRVIuYmFzaWNTZXR0aW5ncy5Gb3JtQ29tcG9uZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wc1wiLCB0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOjIwIH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT17TE9DQUxJWkFUSU9OX05BTUVTUEFDRX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVudGEtY29udGFpbmVyLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BlbnRhLWJ1dHRvbiBwZW50YS1tYWluLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5PblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBQb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWF0dXJlczogc2VsZWN0RmVhdHVyZXMoc3RhdGUpLFxyXG4gICAgfTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRm9ybUNvbXBvbmVudCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjlkMzYwOTZlNTc2OWVlMDU3YzhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsInNldEZlYXR1cmVzIiwic2VsZWN0RmVhdHVyZXMiLCJjYWxsQWRkU2VydmljZSIsImNvbm5lY3QiLCJGb3JtQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiZm9ybURhdGEiLCJPblN1Ym1pdCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwibmV3RmVhdCIsIkxBWUVSIiwiY2xlYXIiLCJwcm9wZXJ0aWVzIiwiX29iamVjdFNwcmVhZCIsImZlYXR1cmVDb2xsZWN0aW9uIiwidHlwZSIsImZlYXR1cmVzIiwicXVlcnlCb2R5IiwiZGF0YVNvdXJjZSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNycyIsIm9uU3VjY2VzcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm9uRmFpbCIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInJlbmRlciIsInNjaGVtYSIsImJhc2ljU2V0dGluZ3MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGF0YSIsIm5hbWVzcGFjZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=