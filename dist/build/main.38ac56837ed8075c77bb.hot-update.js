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
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var FormButton = /*#__PURE__*/function (_React$Component) {
  function FormButton(props) {
    var _this;
    _classCallCheck(this, FormButton);
    _this = _callSuper(this, FormButton, [props]);
    _defineProperty(_this, "openForm", function () {
      var _this$props = _this.props,
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
        _this.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            _this.AddFormID && _this.props.removeComponent(_this.AddFormID);
            _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
              isActive: false
            }));
          }
        }, function (id) {
          _this.AddFormID = id;
          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            isActive: true
          }));
          console.log("AddFormID on add", _this.AddFormID);
        }, function () {
          _this.AddFormID && _this.props.removeComponent(_this.AddFormID);
          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            isActive: false
          }));
          console.log("AddFormID on remove", _this.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (_this.state.isActive) {
        notify(t("Add a new piont OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isActive: false
        }));
      } else {
        notify(t("Add a new piont ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isActive: true
        }));
      }
    });
    _this.openForm = _this.openForm.bind(_this);
    _this.state = {
      isActive: false
    };
    _this.AddFormID = null;
    return _this;
  }
  _inherits(FormButton, _React$Component);
  return _createClass(FormButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        onClick: this.openForm
      }, "Add new point");
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
/******/ 	__webpack_require__.h = () => ("d4e457f0a00bc27b1cd3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUNoQ0YsUUFBUSxDQUFDakQsNERBQWUsQ0FBQ29ELGdCQUFnQixDQUFDLGVBQWUsRUFBRWpELHdFQUFzQixFQUFFLE1BQU0sRUFBRUcsS0FBSyxFQUFFNEMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztJQUFBO0lBQ3ZIeEIsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHSixFQUFFO01BQUEsT0FBSzBCLFFBQVEsQ0FBQ2pELDREQUFlLENBQUNvRCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTdCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZWLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHd0MsR0FBRyxFQUFFbkMsSUFBSTtNQUFBLE9BQUsrQixRQUFRLENBQUMvQyxzRUFBcUIsQ0FBQ21ELEdBQUcsRUFBRW5DLElBQUksQ0FBQyxDQUFDO0lBQUE7RUFDckUsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZXBCLG9EQUFPLENBQUNnRCxlQUFlLEVBQUVFLGtCQUFrQixDQUFDLENBQUMvQyw2REFBWSxDQUFDRyxVQUFVLENBQUMsRUFBRUQsd0VBQXNCLENBQUM7Ozs7Ozs7O1VDbEc3RyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnksIHdpdGhMb2NhbGl6ZSwgc3lzdGVtQWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3BlbkZvcm0gPSB0aGlzLm9wZW5Gb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgbm90aWZ5LCBMQVlFUiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTWFwQ2xpY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZlYXQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZHMuY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEyM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0FkZEZvcm0oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmVhdCxcclxuICAgICAgICAgICAgICAgICAgICBMQVlFUixcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiBhZGRcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiByZW1vdmVcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeSh0KFwiQWRkIGEgbmV3IHBpb250IE9GRlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmeSh0KFwiQWRkIGEgbmV3IHBpb250IE9OXCIpLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5Gb3JtfT5BZGQgbmV3IHBvaW50PC9saT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93QWRkRm9ybTogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IFxyXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInNob3dDb21wb25lbnRcIiwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSwgXCJGb3JtXCIsIHByb3BzLCBvbkFkZCwgb25SZW1vdmUpKSxcclxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJyZW1vdmVDb21wb25lbnRcIiwgaWQpKSxcclxuICAgICAgICBub3RpZnk6IChtc2csIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbihtc2csIHR5cGUpKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoTG9jYWxpemUoRm9ybUJ1dHRvbiksIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0ZTQ1N2YwYTAwYmMyN2IxY2QzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5Iiwid2l0aExvY2FsaXplIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsIkZvcm1CdXR0b24iLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJfdGhpcyRwcm9wcyIsInQiLCJub3RpZnkiLCJMQVlFUiIsImhhbmRsZU1hcENsaWNrIiwiY29vcmRzIiwibmV3RmVhdCIsInR5cGUiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZSIsInByb3BlcnRpZXMiLCJpZCIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJBZGRGb3JtSUQiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJzdGF0ZSIsImlzQWN0aXZlIiwiY29uc29sZSIsImxvZyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwib3BlbkZvcm0iLCJiaW5kIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=