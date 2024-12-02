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
        _this2.props.showAddForm(
        /*                {
                            newFeat,
                            LAYER,
                            clear: () => {
                                this.AddFormID && this.props.removeComponent(this.AddFormID);
        /*                         this.setState({
                                    ...this.state,
                                    isActive: false,
                                }); 
                                this.state.isActive = !this.state.isActive;
                            },
                        },*/
        function (id) {
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
/******/ 	__webpack_require__.h = () => ("754b22d47930bf6e38c3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVEsRUFBSztFQUNyQyxPQUFPO0lBQ0hYLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFHN0IsS0FBSyxFQUFFeUMsS0FBSyxFQUFFQyxRQUFRO01BQUEsT0FDaENGLFFBQVEsQ0FBQzlDLDREQUFlLENBQUNpRCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU5Qyx3RUFBc0IsRUFBRSxNQUFNLEVBQUVHLEtBQUssRUFBRXlDLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUN2SFosZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHRixFQUFFO01BQUEsT0FBS1ksUUFBUSxDQUFDOUMsNERBQWUsQ0FBQ2lELGdCQUFnQixDQUFDLGlCQUFpQixFQUFFZixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQzFGWixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRzRCLEdBQUcsRUFBRXJCLElBQUk7TUFBQSxPQUFLaUIsUUFBUSxDQUFDNUMsc0VBQXFCLENBQUNnRCxHQUFHLEVBQUVyQixJQUFJLENBQUMsQ0FBQztJQUFBO0VBQ3JFLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWUvQixvREFBTyxDQUFDNkMsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDNUMsNkRBQVksQ0FBQ0csVUFBVSxDQUFDLEVBQUVELHdFQUFzQixDQUFDOzs7Ozs7OztVQy9HN0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCB3aXRoTG9jYWxpemUsIHN5c3RlbUFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgRm9ybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wZW5Gb3JtID0gdGhpcy5vcGVuRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQWRkRm9ybUlEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHQsIG5vdGlmeSwgTEFZRVIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1hcENsaWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1hcENsaWNrIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZlYXQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZHMuY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEyM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXcgRmVhdHVyZSA6IFwiLCBuZXdGZWF0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0FkZEZvcm0oXHJcbi8qICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkFkZCBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbi8qICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiBhZGRcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4vKiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIHJlbW92ZVwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgc2hvd0FkZEZvcm1cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1hcENsaWNrIGZpbmlzaGVkXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgUG9pbnQgT0ZGXCIpLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4vKiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbi8qICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgfSk7ICovXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSA6IFwiLCB0aGlzLnN0YXRlLmlzQWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vcGVuRm9ybX0+QWRkIFBvaW50PC9saT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93QWRkRm9ybTogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IFxyXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInNob3dDb21wb25lbnRcIiwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSwgXCJGb3JtXCIsIHByb3BzLCBvbkFkZCwgb25SZW1vdmUpKSxcclxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJyZW1vdmVDb21wb25lbnRcIiwgaWQpKSxcclxuICAgICAgICBub3RpZnk6IChtc2csIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbihtc2csIHR5cGUpKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoTG9jYWxpemUoRm9ybUJ1dHRvbiksIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1NGIyMmQ0NzkzMGJmNmUzOGMzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5Iiwid2l0aExvY2FsaXplIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsIkZvcm1CdXR0b24iLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJvcGVuRm9ybSIsImJpbmQiLCJzdGF0ZSIsImlzQWN0aXZlIiwiQWRkRm9ybUlEIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInQiLCJub3RpZnkiLCJMQVlFUiIsImhhbmRsZU1hcENsaWNrIiwiY29vcmRzIiwiY29uc29sZSIsImxvZyIsIm5ld0ZlYXQiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImNvb3JkaW5hdGUiLCJwcm9wZXJ0aWVzIiwiaWQiLCJzaG93QWRkRm9ybSIsInJlbW92ZUNvbXBvbmVudCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9