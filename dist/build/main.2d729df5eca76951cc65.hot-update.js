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
/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - An example of a plugin that listens to another 
 *    plugin's state changes (Map plugin), and log that state.
 */




var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent(props) {
    _classCallCheck(this, MapClickComponent);
    return _callSuper(this, MapClickComponent, [props]);
  }

  /**
   * Description: 
   *  - React lifecycle method, here we check for state changes.
   */
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this = this;
      if (this.props.isActive) {
        var prevClick = prevProps.singleClick;
        var currentClick = this.props.singleClick;
        if (currentClick && currentClick != prevClick) {
          this.id && this.props.removeMapClickResult(this.id);
          this.props.showMapClickResult({
            coordinate: currentClick.coordinate
          }, function (id) {
            return _this.id = id;
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      console.log(this.props.settings);
      if (this.props.isActive) {
        this.id && this.props.removeTriggerResult(this.id);
        this.props, showTriggerResult({}, function (id) {
          return _this2.id = id;
        });
      } else {
        this.id && this.props.removeTriggerResult(this.id);
      }
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
    singleClick: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector('selectMapSingleClick', state, ownProps.reducerId)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showMapClickResult: function showMapClickResult(props, onAdd) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'MapClickResult', props, onAdd));
    },
    removeMapClickResult: function removeMapClickResult(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MapClickComponent));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7e731aca624dd412ad9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFbkMsS0FBSyxFQUFFa0MsS0FBSyxDQUFDLENBQUM7SUFBQTtJQUNoSm5CLG9CQUFvQixFQUFFLFNBQXRCQSxvQkFBb0JBLENBQUdELEVBQUU7TUFBQSxPQUFLbUIsUUFBUSxDQUFDcEMsNERBQWUsQ0FBQ3NDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFckIsRUFBRSxDQUFDLENBQUM7SUFBQTtFQUNuRyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlbkIsb0RBQU8sQ0FBQ2dDLGVBQWUsRUFBRUssa0JBQWtCLENBQUMsQ0FBQ2xDLGlCQUFpQixDQUFDOzs7Ozs7OztVQ3JFOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEF1dGhvcjogQW1yIFNhbWlyXHJcbiAqIFxyXG4gKiBEZXNjcmlwdGlvbjogXHJcbiAqICAtIEFuIGV4YW1wbGUgb2YgYSBwbHVnaW4gdGhhdCBsaXN0ZW5zIHRvIGFub3RoZXIgXHJcbiAqICAgIHBsdWdpbidzIHN0YXRlIGNoYW5nZXMgKE1hcCBwbHVnaW4pLCBhbmQgbG9nIHRoYXQgc3RhdGUuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnkgfSBmcm9tICdAcGVudGEtYi9tYS1saWInO1xyXG5cclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzY3JpcHRpb246IFxyXG4gICAgICogIC0gUmVhY3QgbGlmZWN5Y2xlIG1ldGhvZCwgaGVyZSB3ZSBjaGVjayBmb3Igc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2Q2xpY2sgPSBwcmV2UHJvcHMuc2luZ2xlQ2xpY2s7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2xpY2sgPSB0aGlzLnByb3BzLnNpbmdsZUNsaWNrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDbGljayAmJiBjdXJyZW50Q2xpY2sgIT0gcHJldkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlTWFwQ2xpY2tSZXN1bHQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6IGN1cnJlbnRDbGljay5jb29yZGluYXRlXHJcbiAgICAgICAgICAgICAgICB9LCBpZCA9PiB0aGlzLmlkID0gaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVUcmlnZ2VyUmVzdWx0KHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLHNob3dUcmlnZ2VyUmVzdWx0KHt9LCAoaWQpID0+ICh0aGlzLmlkID0gaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVUcmlnZ2VyUmVzdWx0KHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2luZ2xlQ2xpY2s6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKCdzZWxlY3RNYXBTaW5nbGVDbGljaycsIHN0YXRlLCBvd25Qcm9wcy5yZWR1Y2VySWQpXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCkpLFxyXG4gICAgICAgIHJlbW92ZU1hcENsaWNrUmVzdWx0OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdyZW1vdmVDb21wb25lbnQnLCBpZCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hcENsaWNrQ29tcG9uZW50KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmN2U3MzFhY2E2MjRkZDQxMmFkOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIk1hcENsaWNrQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMiLCJpc0FjdGl2ZSIsInByZXZDbGljayIsInNpbmdsZUNsaWNrIiwiY3VycmVudENsaWNrIiwiaWQiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCIsInNob3dNYXBDbGlja1Jlc3VsdCIsImNvb3JkaW5hdGUiLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzMiIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsInJlbW92ZVRyaWdnZXJSZXN1bHQiLCJzaG93VHJpZ2dlclJlc3VsdCIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJnZXRTZWxlY3RvciIsInJlZHVjZXJJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJnZXRBY3Rpb25DcmVhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==