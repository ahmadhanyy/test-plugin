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
    //this.openForm = this.openForm.bind(this);
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
/******/ 	__webpack_require__.h = () => ("454577c0bd9229ace5e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sRUFBRUcsS0FBSyxFQUFFMkMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztJQUFBO0lBQ3ZIdkIsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHSixFQUFFO01BQUEsT0FBS3lCLFFBQVEsQ0FBQ2hELDREQUFlLENBQUNtRCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRTVCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZWLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHdUMsR0FBRyxFQUFFbEMsSUFBSTtNQUFBLE9BQUs4QixRQUFRLENBQUM5QyxzRUFBcUIsQ0FBQ2tELEdBQUcsRUFBRWxDLElBQUksQ0FBQyxDQUFDO0lBQUE7RUFDckUsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZXBCLG9EQUFPLENBQUMrQyxlQUFlLEVBQUVFLGtCQUFrQixDQUFDLENBQUM5Qyw2REFBWSxDQUFDRyxVQUFVLENBQUMsRUFBRUQsd0VBQXNCLENBQUM7Ozs7Ozs7O1VDbEc3RyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnksIHdpdGhMb2NhbGl6ZSwgc3lzdGVtQWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vdGhpcy5vcGVuRm9ybSA9IHRoaXMub3BlbkZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBub3RpZnksIExBWUVSIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTIzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QWRkRm9ybShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIGFkZFwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIHJlbW92ZVwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT0ZGXCIpLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PkFkZCBuZXcgcG9pbnQ8L2xpPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dBZGRGb3JtOiAocHJvcHMsIG9uQWRkLCBvblJlbW92ZSkgPT4gXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwic2hvd0NvbXBvbmVudFwiLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFLCBcIkZvcm1cIiwgcHJvcHMsIG9uQWRkLCBvblJlbW92ZSkpLFxyXG4gICAgICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInJlbW92ZUNvbXBvbmVudFwiLCBpZCkpLFxyXG4gICAgICAgIG5vdGlmeTogKG1zZywgdHlwZSkgPT4gZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKG1zZywgdHlwZSkpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhMb2NhbGl6ZShGb3JtQnV0dG9uKSwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDU0NTc3YzBiZDkyMjlhY2U1ZTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9kZWZpbmVQcm9wZXJ0eSIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwic2hvd0FkZEZvcm0iLCJjbGVhciIsIkFkZEZvcm1JRCIsInJlbW92ZUNvbXBvbmVudCIsInNldFN0YXRlIiwiX29iamVjdFNwcmVhZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJjb25zb2xlIiwibG9nIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwib3BlbkZvcm0iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9