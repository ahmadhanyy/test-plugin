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
        console.log("props: ", _this2.props);
        console.log("AddFormID", _this2.AddFormID);
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
        console.log("new feature : ", newFeat);
        console.log("new LAYER : ", LAYER);
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
/******/ 	__webpack_require__.h = () => ("c43a7815f667c9e15645")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMjllMzZjYWZiODMyZjY4MDczOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQzFCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVSLE1BQUksQ0FBQ2IsS0FBSyxDQUFDO1FBQ2xDb0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFUixNQUFJLENBQUNMLFNBQVMsQ0FBQztRQUN4QyxJQUFNYyxP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R0FBRyxTQUFsQkEsZUFBZUEsQ0FBSWxDLEtBQUssRUFBRW1DLFFBQVEsRUFBSztFQUN6QyxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRLEVBQUs7RUFDckMsT0FBTztJQUNIZCxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBRzdCLEtBQUssRUFBRTRDLEtBQUssRUFBRUMsUUFBUTtNQUFBLE9BQ2hDRixRQUFRLENBQUNqRCw0REFBZSxDQUFDb0QsZ0JBQWdCLENBQUMsZUFBZSxFQUFFakQsd0VBQXNCLEVBQUUsTUFBTSxFQUFFRyxLQUFLLEVBQUU0QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDdkhkLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQUtlLFFBQVEsQ0FBQ2pELDREQUFlLENBQUNvRCxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRWxCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZaLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHK0IsR0FBRyxFQUFFeEIsSUFBSTtNQUFBLE9BQUtvQixRQUFRLENBQUMvQyxzRUFBcUIsQ0FBQ21ELEdBQUcsRUFBRXhCLElBQUksQ0FBQyxDQUFDO0lBQUE7RUFDckUsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZS9CLG9EQUFPLENBQUNnRCxlQUFlLEVBQUVFLGtCQUFrQixDQUFDLENBQUMvQyw2REFBWSxDQUFDRyxVQUFVLENBQUMsRUFBRUQsd0VBQXNCLENBQUM7Ozs7Ozs7O1VDeEc3RyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnksIHdpdGhMb2NhbGl6ZSwgc3lzdGVtQWRkTm90aWZpY2F0aW9uIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jbGFzcyBGb3JtQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub3BlbkZvcm0gPSB0aGlzLm9wZW5Gb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Gb3JtKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdCwgbm90aWZ5LCBMQVlFUiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTWFwQ2xpY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvcHM6IFwiLCB0aGlzLnByb3BzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSURcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGZWF0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLmNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dBZGRGb3JtKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZlYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgTEFZRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gYWRkXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gcmVtb3ZlXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IGZlYXR1cmUgOiBcIiwgbmV3RmVhdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IExBWUVSIDogXCIsIExBWUVSKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT0ZGXCIpLCBcImluZm9cIik7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yc1JlZ2lzdHJ5LnVuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgYSBuZXcgcGlvbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PkFkZCBuZXcgcG9pbnQ8L2xpPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dBZGRGb3JtOiAocHJvcHMsIG9uQWRkLCBvblJlbW92ZSkgPT4gXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwic2hvd0NvbXBvbmVudFwiLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFLCBcIkZvcm1cIiwgcHJvcHMsIG9uQWRkLCBvblJlbW92ZSkpLFxyXG4gICAgICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInJlbW92ZUNvbXBvbmVudFwiLCBpZCkpLFxyXG4gICAgICAgIG5vdGlmeTogKG1zZywgdHlwZSkgPT4gZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKG1zZywgdHlwZSkpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhMb2NhbGl6ZShGb3JtQnV0dG9uKSwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzQzYTc4MTVmNjY3YzllMTU2NDVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm9wZW5Gb3JtIiwiYmluZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJBZGRGb3JtSUQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJjb25zb2xlIiwibG9nIiwibmV3RmVhdCIsInR5cGUiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZSIsInByb3BlcnRpZXMiLCJpZCIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==