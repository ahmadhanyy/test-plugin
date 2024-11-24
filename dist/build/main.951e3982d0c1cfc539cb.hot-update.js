"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/MapClick/MapClick.component.js":
/*!*******************************************************!*\
  !*** ./src/components/MapClick/MapClick.component.js ***!
  \*******************************************************/
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



var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent(props) {
    var _this;
    _classCallCheck(this, MapClickComponent);
    _this = _callSuper(this, MapClickComponent, [props]);
    //this.currentCID = null;
    _this.removeCurrentComponent = _this.removeCurrentComponent.bind(_this);
    return _this;
  }
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (this.props.isActive && prevProps.isActive != this.props.isActive) {
        // Show the MapClickResult only if it hasn't been shown yet
        this.props.showMapClickResult({
          removeCurrentComponent: this.removeCurrentComponent // Pass as a prop
        }, function (id) {
          _this2.id = id; // Save the component ID to ensure it's shown once
        });
        console.log("the id when showing : ", this.id);
      } else if (!this.props.isActive && prevProps.isActive != this.props.isActive) {
        // Remove the MapClickResult only if it is already shown
        this.id && this.props.removeComponent(this.id);
        //this.props.removeComponent(this.currentCID);
        //this.currentCID = null;
        console.log("the id when removing : ", this.id);
      }
    }
  }, {
    key: "removeCurrentComponent",
    value: function removeCurrentComponent() {
      this.props.removeComponent(this.id);
      //this.props.removeComponent(this.currentCID);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("MapClickComponent mounted");
      console.log(this.props.settings);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
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
    showMapClickResult: function showMapClickResult(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'MapClickResult', props, onAdd, onRemove));
    },
    removeMapClickResult: function removeMapClickResult(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    },
    removeComponent: function removeComponent(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    },
    notify: function notify(message, type) {
      dispatch(systemAddNotification({
        message: message,
        type: type
      }));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MapClickComponent));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39d9775380818b8246c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUrQixLQUFLLEVBQUNDLFFBQVE7TUFBQSxPQUFLRixRQUFRLENBQUNqQyw0REFBZSxDQUFDb0MsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRWpDLEtBQUssRUFBRStCLEtBQUssRUFBQ0MsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUNsS0Usb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBR25CLEVBQUU7TUFBQSxPQUFLZSxRQUFRLENBQUNqQyw0REFBZSxDQUFDb0MsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQy9GRyxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUdILEVBQUU7TUFBQSxPQUFLZSxRQUFRLENBQUNqQyw0REFBZSxDQUFDb0MsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQzFGb0IsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUdDLE9BQU8sRUFBRUMsSUFBSSxFQUFLO01BQ3pCUCxRQUFRLENBQUNRLHFCQUFxQixDQUFDO1FBQUVGLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxJQUFJLEVBQUpBO01BQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQ7RUFFRixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlMUMsb0RBQU8sQ0FBQzRCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQy9CLGlCQUFpQixDQUFDOzs7Ozs7OztVQ3BFOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnkgfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcblxyXG5jbGFzcyBNYXBDbGlja0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vdGhpcy5jdXJyZW50Q0lEID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCA9IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUgJiYgcHJldlByb3BzLmlzQWN0aXZlICE9IHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gU2hvdyB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBzaG93biB5ZXRcclxuICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoe1xyXG4gICAgICAgICAgcmVtb3ZlQ3VycmVudENvbXBvbmVudDogdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LCAgLy8gUGFzcyBhcyBhIHByb3BcclxuICAgICAgfSxcclxuICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlkID0gaWQ7ICAvLyBTYXZlIHRoZSBjb21wb25lbnQgSUQgdG8gZW5zdXJlIGl0J3Mgc2hvd24gb25jZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaWQgd2hlbiBzaG93aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzQWN0aXZlICYmIHByZXZQcm9wcy5pc0FjdGl2ZSAhPSB0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBpcyBhbHJlYWR5IHNob3duXHJcbiAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5pZCk7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHJlbW92aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ3VycmVudENvbXBvbmVudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgLy90aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTWFwQ2xpY2tDb21wb25lbnQgbW91bnRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3RvcihcclxuICAgICAgXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgb3duUHJvcHMucmVkdWNlcklkXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCxvblJlbW92ZSkpLFxyXG4gICAgcmVtb3ZlTWFwQ2xpY2tSZXN1bHQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICBub3RpZnk6IChtZXNzYWdlLCB0eXBlKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbih7IG1lc3NhZ2UsIHR5cGUgfSkpO1xyXG4gICAgfSxcclxuICBcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOWQ5Nzc1MzgwODE4YjgyNDZjMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIk1hcENsaWNrQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwicmVtb3ZlQ3VycmVudENvbXBvbmVudCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzMiIsImlzQWN0aXZlIiwic2hvd01hcENsaWNrUmVzdWx0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXR0aW5ncyIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsInJlbW92ZU1hcENsaWNrUmVzdWx0Iiwibm90aWZ5IiwibWVzc2FnZSIsInR5cGUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9