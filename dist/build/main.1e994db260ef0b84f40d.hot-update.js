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
        if (_this2.state.isActive) {
          _this2.props.showAddForm({
            newFeat: newFeat,
            LAYER: LAYER,
            clear: function clear() {
              _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
              _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
                isActive: false
              }));
            }
          }, function (id) {
            _this2.AddFormID = id;
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: true
            }));
          }, function () {
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false
            }));
          });
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        }
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
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator("showComponent", _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE, "FormComponent", props, onAdd, onRemove));
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
/******/ 	__webpack_require__.h = () => ("2d9011989d437bf47718")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZTk5NGRiMjYwZWYwYjg0ZjQwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBTWI7QUFDMEM7QUFBQSxJQUU3RE8sVUFBVSwwQkFBQUMsZ0JBQUE7RUFDZCxTQUFBRCxXQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosVUFBQTtJQUNqQkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNYQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQ3hCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1QsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQ2pDLElBQU1DLE9BQU8sR0FBRztVQUNkQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxRQUFRLEVBQUU7WUFDUkQsSUFBSSxFQUFFLE9BQU87WUFDYkUsV0FBVyxFQUFFSixNQUFNLENBQUNLO1VBQ3RCLENBQUM7VUFDREMsVUFBVSxFQUFF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SyxFQUNMQyxRQUNGLENBQ0YsQ0FBQztJQUFBO0lBQ0hkLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQ2xCZSxRQUFRLENBQUMvQyw0REFBZSxDQUFDa0QsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQ25FVixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRzZCLEdBQUcsRUFBRXhCLElBQUk7TUFBQSxPQUFLb0IsUUFBUSxDQUFDN0Msc0VBQXFCLENBQUNpRCxHQUFHLEVBQUV4QixJQUFJLENBQUMsQ0FBQztJQUFBO0VBQ25FLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWU3QixvREFBTyxDQUFDOEMsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUN6RDdDLDZEQUFZLENBQUNHLFVBQVUsQ0FBQyxFQUN4QkQsd0VBQ0YsQ0FBQzs7Ozs7Ozs7VUNuSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIHNlbGVjdG9yc1JlZ2lzdHJ5LFxyXG4gIGFjdGlvbnNSZWdpc3RyeSxcclxuICB3aXRoTG9jYWxpemUsXHJcbiAgc3lzdGVtQWRkTm90aWZpY2F0aW9uLFxyXG59IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5vcGVuRm9ybSA9IHRoaXMub3BlbkZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLkFkZEZvcm1JRCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvcGVuRm9ybSgpIHtcclxuICAgIGNvbnN0IHsgdCwgbm90aWZ5LCBMQVlFUiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgaWQ6IDEyMyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dBZGRGb3JtKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICBMQVlFUixcclxuICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IGlkO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgbm90aWZ5KHQoXCJBZGQgUG9pbnQgT0ZGXCIpLCBcImluZm9cIik7XHJcbiAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5Gb3JtfT5BZGQgUG9pbnQ8L2xpPjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd0FkZEZvcm06IChwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSA9PlxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcclxuICAgICAgICAgIFwic2hvd0NvbXBvbmVudFwiLFxyXG4gICAgICAgICAgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSxcclxuICAgICAgICAgIFwiRm9ybUNvbXBvbmVudFwiLFxyXG4gICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICBvbkFkZCxcclxuICAgICAgICAgIG9uUmVtb3ZlXHJcbiAgICAgICAgKVxyXG4gICAgICApLFxyXG4gICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+XHJcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICBub3RpZnk6IChtc2csIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbihtc2csIHR5cGUpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoXHJcbiAgd2l0aExvY2FsaXplKEZvcm1CdXR0b24pLFxyXG4gIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0VcclxuKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmQ5MDExOTg5ZDQzN2JmNDc3MThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm9wZW5Gb3JtIiwiYmluZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJBZGRGb3JtSUQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwic2hvd0FkZEZvcm0iLCJjbGVhciIsInJlbW92ZUNvbXBvbmVudCIsInNldFN0YXRlIiwiX29iamVjdFNwcmVhZCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9