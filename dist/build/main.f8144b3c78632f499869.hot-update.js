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
  function FormButton() {
    var _this;
    _classCallCheck(this, FormButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, FormButton, [].concat(args));
    /*     constructor(props) {
            super(props);
            this.openForm = this.openForm.bind(this);
            this.state = {
                isActive: false,
            };
            this.AddFormID = null;
        } */
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
        console.log("new Feature : ", newFeat);
        _this.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            _this.AddFormID && _this.props.removeComponent(_this.AddFormID);
            _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
              isActive: false
            }));
            //this.state.isActive = !this.state.isActive;
          }
        }, function (id) {
          console.log("onAdd is working");
          _this.AddFormID = id;
          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            isActive: true
          }));
          //this.state.isActive = !this.state.isActive;
          console.log("AddFormID on add", _this.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this.AddFormID && _this.props.removeComponent(_this.AddFormID);
          _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
            isActive: false
          }));
          //this.state.isActive = !this.state.isActive;
          console.log("AddFormID on remove", _this.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (_this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isActive: !_this.state.isActive
        }));
        //this.state.isActive = !this.state.isActive;
        console.log("state : ", _this.state.isActive);
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
          isActive: !_this.state.isActive
        }));
        //this.state.isActive = !this.state.isActive;
        console.log("state : ", _this.state.isActive);
      }
    });
    return _this;
  }
  _inherits(FormButton, _React$Component);
  return _createClass(FormButton, [{
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
/******/ 	__webpack_require__.h = () => ("8c0736df423c0728da16")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mODE0NGIzYzc4NjMyZjQ5OTg2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQUEsU0FBQUQsV0FBQTtJQUFBLElBQUFFLEtBQUE7SUFBQUMsZUFBQSxPQUFBSCxVQUFBO0lBQUEsU0FBQUksSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBUSxVQUFBLE9BQUFWLFVBQUEsS0FBQVcsTUFBQSxDQUFBSixJQUFBO0lBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFQQUssZUFBQSxDQUFBVixLQUFBLGNBU2UsWUFBTTtNQUNiLElBQUFXLFdBQUEsR0FBNkJYLEtBQUEsQ0FBS1ksS0FBSztRQUEvQkMsQ0FBQyxHQUFBRixXQUFBLENBQURFLENBQUM7UUFBRUMsTUFBTSxHQUFBSCxXQUFBLENBQU5HLE1BQU07UUFBRUMsS0FBSyxHQUFBSixXQUFBLENBQUxJLEtBQUs7TUFFeEIsSUFBTUMsZUFBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxNQUFNLEVBQUs7UUFDL0IsSUFBTUMsT0FBTyxHQUFHO1VBQ1pDLElBQUksRUFBRSxTQUFTO1VBQ2ZDLFFBQVEsRUFBRTtZQUNORCxJQUFJLEVBQUUsT0FBTztZQUNiRSxXQUFXLEVBQUVKLE1BQU0sQ0FBQ0s7VUFDeEIsQ0FBQztVQUNEQyxVQUFVLEVBQUU7WUFDUkMsRUFBRSxFQUFFO1VBQ1I7UUFDSixDQUFDO1FBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixF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c291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSwgd2l0aExvY2FsaXplLCBzeXN0ZW1BZGROb3RpZmljYXRpb24gfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEZvcm1CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vKiAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRm9ybSA9IHRoaXMub3BlbkZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IG51bGw7XHJcbiAgICB9ICovXHJcblxyXG4gICAgb3BlbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBub3RpZnksIExBWUVSIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTIzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBGZWF0dXJlIDogXCIsIG5ld0ZlYXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QWRkRm9ybShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkFkZCBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiBhZGRcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gcmVtb3ZlXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPRkZcIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgUG9pbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZSA6IFwiLCB0aGlzLnN0YXRlLmlzQWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vcGVuRm9ybX0+QWRkIFBvaW50PC9saT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93QWRkRm9ybTogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IFxyXG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInNob3dDb21wb25lbnRcIiwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSwgXCJGb3JtXCIsIHByb3BzLCBvbkFkZCwgb25SZW1vdmUpKSxcclxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJyZW1vdmVDb21wb25lbnRcIiwgaWQpKSxcclxuICAgICAgICBub3RpZnk6IChtc2csIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbihtc2csIHR5cGUpKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoTG9jYWxpemUoRm9ybUJ1dHRvbiksIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhjMDczNmRmNDIzYzA3MjhkYTE2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5Iiwid2l0aExvY2FsaXplIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsIkZvcm1CdXR0b24iLCJfUmVhY3QkQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJfdGhpcyRwcm9wcyIsInByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwiY29uc29sZSIsImxvZyIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJBZGRGb3JtSUQiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJzdGF0ZSIsImlzQWN0aXZlIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwib3BlbkZvcm0iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9