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
        console.log("handleMapClick is working");
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
            /*                         this.setState({
                                        ...this.state,
                                        isActive: false,
                                    }); */
            _this2.state.isActive = !_this2.state.isActive;
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          /*                     this.setState({
                                  ...this.state,
                                  isActive: true,
                              }); */
          _this2.state.isActive = !_this2.state.isActive;
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          /*                     this.setState({
                                  ...this.state,
                                  isActive: false,
                              }); */
          _this2.state.isActive = !_this2.state.isActive;
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        console.log("after showAddForm");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        console.log("handleMapClick finished");
      };
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        /*             this.setState({
                        ...this.state,
                        isActive: !this.state.isActive,
                    }); */
        this.state.isActive = !this.state.isActive;
        console.log("state : ", this.state.isActive);
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        /*             this.setState({
                        ...this.state,
                        isActive: !this.state.isActive,
                    }); */
        this.state.isActive = !this.state.isActive;
        console.log("state : ", this.state.isActive);
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
/******/ 	__webpack_require__.h = () => ("3c152e47f4cd9dbb3573")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCB3aXRoTG9jYWxpemUsIHN5c3RlbUFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgRm9ybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wZW5Gb3JtID0gdGhpcy5vcGVuRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQWRkRm9ybUlEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHQsIG5vdGlmeSwgTEFZRVIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1hcENsaWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1hcENsaWNrIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZlYXQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZHMuY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEyM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgRmVhdHVyZSA6IFwiLCBuZXdGZWF0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0FkZEZvcm0oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmVhdCxcclxuICAgICAgICAgICAgICAgICAgICBMQVlFUixcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25BZGQgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IGlkO1xyXG4vKiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTsgKi9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gYWRkXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvblJlbW92ZSBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuLyogICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiByZW1vdmVcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHNob3dBZGRGb3JtXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVNYXBDbGljayBmaW5pc2hlZFwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeSh0KFwiQWRkIFBvaW50IE9GRlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuLyogICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6ICF0aGlzLnN0YXRlLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICB9KTsgKi9cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgUG9pbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4vKiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PkFkZCBQb2ludDwvbGk+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0FkZEZvcm06IChwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSA9PiBcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJzaG93Q29tcG9uZW50XCIsIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UsIFwiRm9ybVwiLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICAgICAgbm90aWZ5OiAobXNnLCB0eXBlKSA9PiBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24obXNnLCB0eXBlKSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aExvY2FsaXplKEZvcm1CdXR0b24pLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYzE1MmU0N2Y0Y2Q5ZGJiMzU3M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIndpdGhMb2NhbGl6ZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJGb3JtQnV0dG9uIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwib3BlbkZvcm0iLCJiaW5kIiwic3RhdGUiLCJpc0FjdGl2ZSIsIkFkZEZvcm1JRCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0Iiwibm90aWZ5IiwiTEFZRVIiLCJoYW5kbGVNYXBDbGljayIsImNvb3JkcyIsImNvbnNvbGUiLCJsb2ciLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwic2hvd0FkZEZvcm0iLCJjbGVhciIsInJlbW92ZUNvbXBvbmVudCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9