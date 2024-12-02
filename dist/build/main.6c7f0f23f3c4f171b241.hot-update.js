"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/FormButton/index.js":
/*!********************************************!*\
  !*** ./src/components/FormButton/index.js ***!
  \********************************************/
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
        _this2.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false
            }));
            //this.state.isActive = !this.state.isActive;
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: true
          }));
          //this.state.isActive = !this.state.isActive;
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: false
          }));
          //this.state.isActive = !this.state.isActive;
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        console.log("state before update : ", this.state.isActive);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: !this.state.isActive
        }));
        //this.state.isActive = !this.state.isActive;
        console.log("state after update : ", this.state.isActive);
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        console.log("state before update : ", this.state.isActive);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: !this.state.isActive
        }));
        //this.state.isActive = !this.state.isActive;
        console.log("state after update : ", this.state.isActive);
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
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator("showComponent", _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE, "Form", props, onAdd, onRemove));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7f687e2d45516d0c94d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YzdmMGYyM2YzYzRmMTcxYjI0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQzFCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQy9CLElBQU1DLE9BQU8sR0FBRztVQUNaQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxRQUFRLEVBQUU7WUFDTkQsSUFBSSxFQUFFLE9BQU87WUFDYkUsV0FBVyxFQUFFSixNQUFNLENBQUNLO1VBQ3hCLENBQUM7VUFDREMsVUFBVSxFQUFF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TyxDQUFDZ0QsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDL0MsNkRBQVksQ0FBQ0csVUFBVSxDQUFDLEVBQUVELHdFQUFzQixDQUFDOzs7Ozs7OztVQzlHN0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCB3aXRoTG9jYWxpemUsIHN5c3RlbUFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgRm9ybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wZW5Gb3JtID0gdGhpcy5vcGVuRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQWRkRm9ybUlEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHQsIG5vdGlmeSwgTEFZRVIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1hcENsaWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGZWF0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLmNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IEZlYXR1cmUgOiBcIiwgbmV3RmVhdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dBZGRGb3JtKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZlYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgTEFZRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQWRkIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIGFkZFwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmUgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiByZW1vdmVcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeSh0KFwiQWRkIFBvaW50IE9GRlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSBiZWZvcmUgdXBkYXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSBhZnRlciB1cGRhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgYmVmb3JlIHVwZGF0ZSA6IFwiLCB0aGlzLnN0YXRlLmlzQWN0aXZlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy90aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgYWZ0ZXIgdXBkYXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5Gb3JtfT5BZGQgUG9pbnQ8L2xpPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dBZGRGb3JtOiAocHJvcHMsIG9uQWRkLCBvblJlbW92ZSkgPT4gXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwic2hvd0NvbXBvbmVudFwiLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFLCBcIkZvcm1cIiwgcHJvcHMsIG9uQWRkLCBvblJlbW92ZSkpLFxyXG4gICAgICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInJlbW92ZUNvbXBvbmVudFwiLCBpZCkpLFxyXG4gICAgICAgIG5vdGlmeTogKG1zZywgdHlwZSkgPT4gZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKG1zZywgdHlwZSkpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhMb2NhbGl6ZShGb3JtQnV0dG9uKSwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDdmNjg3ZTJkNDU1MTZkMGM5NGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm9wZW5Gb3JtIiwiYmluZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJBZGRGb3JtSUQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwiY29uc29sZSIsImxvZyIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==