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
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: false
          }));
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (this.state.isActive) {
        notify(t("Add a new piont OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: false
        }));
      } else {
        notify(t("Add a new piont ON"), "info");
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
/******/ 	__webpack_require__.h = () => ("a1c55c2c43eeef62f1e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NTQ1NzdjMGJkOTIyOWFjZTVlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQzFCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQy9CLElBQU1DLE9BQU8sR0FBRztVQUNaQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxRQUFRLEVBQUU7WUFDTkQsSUFBSSxFQUFFLE9BQU87WUFDYkUsV0FBVyxFQUFFSixNQUFNLENBQUNLO1VBQ3hCLENBQUM7VUFDREMsVUFBVSxFQUFF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QUFRLENBQUNqRCw0REFBZSxDQUFDb0QsZ0JBQWdCLENBQUMsZUFBZSxFQUFFakQsd0VBQXNCLEVBQUUsTUFBTSxFQUFFRyxLQUFLLEVBQUU0QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDdkhoQixlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUdILEVBQUU7TUFBQSxPQUFLaUIsUUFBUSxDQUFDakQsNERBQWUsQ0FBQ29ELGdCQUFnQixDQUFDLGlCQUFpQixFQUFFcEIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMxRlYsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUcrQixHQUFHLEVBQUUxQixJQUFJO01BQUEsT0FBS3NCLFFBQVEsQ0FBQy9DLHNFQUFxQixDQUFDbUQsR0FBRyxFQUFFMUIsSUFBSSxDQUFDLENBQUM7SUFBQTtFQUNyRSxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlN0Isb0RBQU8sQ0FBQ2dELGVBQWUsRUFBRUUsa0JBQWtCLENBQUMsQ0FBQy9DLDZEQUFZLENBQUNHLFVBQVUsQ0FBQyxFQUFFRCx3RUFBc0IsQ0FBQzs7Ozs7Ozs7VUNsRzdHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSwgd2l0aExvY2FsaXplLCBzeXN0ZW1BZGROb3RpZmljYXRpb24gfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEZvcm1CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRm9ybSA9IHRoaXMub3BlbkZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZvcm0oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBub3RpZnksIExBWUVSIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTIzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QWRkRm9ybShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIGFkZFwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIHJlbW92ZVwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT0ZGXCIpLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PkFkZCBQb2ludDwvbGk+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0FkZEZvcm06IChwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSA9PiBcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJzaG93Q29tcG9uZW50XCIsIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UsIFwiRm9ybVwiLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICAgICAgbm90aWZ5OiAobXNnLCB0eXBlKSA9PiBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24obXNnLCB0eXBlKSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aExvY2FsaXplKEZvcm1CdXR0b24pLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMWM1NWMyYzQzZWVlZjYyZjFlM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIndpdGhMb2NhbGl6ZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJGb3JtQnV0dG9uIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwib3BlbkZvcm0iLCJiaW5kIiwic3RhdGUiLCJpc0FjdGl2ZSIsIkFkZEZvcm1JRCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0Iiwibm90aWZ5IiwiTEFZRVIiLCJoYW5kbGVNYXBDbGljayIsImNvb3JkcyIsIm5ld0ZlYXQiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImNvb3JkaW5hdGUiLCJwcm9wZXJ0aWVzIiwiaWQiLCJzaG93QWRkRm9ybSIsImNsZWFyIiwicmVtb3ZlQ29tcG9uZW50Iiwic2V0U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiY29uc29sZSIsImxvZyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9