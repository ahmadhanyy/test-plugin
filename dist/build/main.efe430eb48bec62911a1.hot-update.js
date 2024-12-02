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
      isActive: false,
      btnText: "Add Point"
    };
    _this.AddFormID = null;
    _this.btnText = "Add Point";
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
            console.log("clear is working");
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            /*this.setState({
                ...this.state,
                isActive: false,
            }); */
            _this2.state.isActive = !_this2.state.isActive;
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          /*this.setState({
              ...this.state,
              isActive: true,
          });  */
          _this2.state.isActive = !_this2.state.isActive;
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          /*this.setState({
              ...this.state,
              isActive: false,
          }); */
          _this2.state.isActive = !_this2.state.isActive;
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      console.log("state before update : ", this.state.isActive);
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        //console.log("state before update : ", this.state.isActive);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: false,
          btnText: "Add Point"
        }));
        //this.state.isActive = !this.state.isActive;
        //console.log("state after update : ", this.state.isActive);
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        //console.log("state before update : ", this.state.isActive);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: true,
          btnText: "Save"
        }));
        //this.state.isActive = !this.state.isActive;
        //console.log("state after update : ", this.state.isActive);
      }
      console.log("state after update : ", this.state.isActive);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        onClick: this.openForm
      }, this.state.btnText);
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    singleClick: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector("selectMapSingleClick", state, ownProps.reducerId)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAddForm: function showAddForm(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'Form', props, onAdd, onRemove));
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
/******/ 	__webpack_require__.h = () => ("8cc241db0f454218980a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZmU0MzBlYjQ4YmVjNjI5MTFhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0RQLEtBQUEsQ0FBS1EsU0FBUyxHQUFHLElBQUk7SUFDckJSLEtBQUEsQ0FBS08sT0FBTyxHQUFHLFdBQVc7SUFBQyxPQUFBUCxLQUFBO0VBQy9CO0VBQUNTLFNBQUEsQ0FBQVosVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFZLFlBQUEsQ0FBQWIsVUFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVCxRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBVSxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNmLEtBQUs7UUFBL0JnQixDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxNQUFNLEdBQUFGLFdBQUEsQ0FBTkUsTUFBTTtRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUV4QixJQUFNQyxlQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLE1BQU0sRUFBSztRQUMvQixJQUFNQyxPQUFPLEdBQUc7VUFDWkMsSUFBSSxFQUFFLFNBQVM7VUFDZkMsUUFBUSxFQUFFO1lBQ05ELElBQUksRUFBRSxPQUFP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QUNMLENBQUM7QUFFRCxpRUFBZTlCLG9EQUFPLENBQUNpRCxlQUFlLEVBQUVLLGtCQUFrQixDQUFDLENBQUNuRCw2REFBWSxDQUFDRyxVQUFVLENBQUMsRUFBRUQsd0VBQXNCLENBQUM7Ozs7Ozs7O1VDMUg3RyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnksIHdpdGhMb2NhbGl6ZSwgc3lzdGVtQWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3BlbkZvcm0gPSB0aGlzLm9wZW5Gb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBidG5UZXh0OiBcIkFkZCBQb2ludFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYnRuVGV4dCA9IFwiQWRkIFBvaW50XCI7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZvcm0oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBub3RpZnksIExBWUVSIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTIzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBGZWF0dXJlIDogXCIsIG5ld0ZlYXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QWRkRm9ybShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQWRkIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTsgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0FjdGl2ZSA9ICF0aGlzLnN0YXRlLmlzQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIGFkZFwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmUgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNBY3RpdmUgPSAhdGhpcy5zdGF0ZS5pc0FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiByZW1vdmVcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlIGJlZm9yZSB1cGRhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPRkZcIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZSBiZWZvcmUgdXBkYXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBidG5UZXh0OiBcIkFkZCBQb2ludFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy90aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZSBhZnRlciB1cGRhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZSBiZWZvcmUgdXBkYXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ0blRleHQ6IFwiU2F2ZVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy90aGlzLnN0YXRlLmlzQWN0aXZlID0gIXRoaXMuc3RhdGUuaXNBY3RpdmU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZSBhZnRlciB1cGRhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgYWZ0ZXIgdXBkYXRlIDogXCIsIHRoaXMuc3RhdGUuaXNBY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PnsgdGhpcy5zdGF0ZS5idG5UZXh0IH08L2xpPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIixcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIG93blByb3BzLnJlZHVjZXJJZFxyXG4gICAgICAgICksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dBZGRGb3JtOiAocHJvcHMsIG9uQWRkLCBvblJlbW92ZSkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAndGVzdC1wbHVnaW4nLCAnRm9ybScsIHByb3BzLCBvbkFkZCwgb25SZW1vdmUpKSxcclxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJyZW1vdmVDb21wb25lbnRcIiwgaWQpKSxcclxuICAgICAgICBub3RpZnk6IChtc2csIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbihtc2csIHR5cGUpKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoTG9jYWxpemUoRm9ybUJ1dHRvbiksIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhjYzI0MWRiMGY0NTQyMTg5ODBhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5Iiwid2l0aExvY2FsaXplIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsIkZvcm1CdXR0b24iLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJvcGVuRm9ybSIsImJpbmQiLCJzdGF0ZSIsImlzQWN0aXZlIiwiYnRuVGV4dCIsIkFkZEZvcm1JRCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0Iiwibm90aWZ5IiwiTEFZRVIiLCJoYW5kbGVNYXBDbGljayIsImNvb3JkcyIsIm5ld0ZlYXQiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImNvb3JkaW5hdGUiLCJwcm9wZXJ0aWVzIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic2hvd0FkZEZvcm0iLCJjbGVhciIsInJlbW92ZUNvbXBvbmVudCIsInVuc3Vic2NyaWJlIiwic2V0U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsInNpbmdsZUNsaWNrIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==