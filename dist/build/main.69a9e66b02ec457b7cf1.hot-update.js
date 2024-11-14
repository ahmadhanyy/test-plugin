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
    value: function componentDidUpdate() {
      var _this = this;
      if (this.props.isActive) {
        this.id && this.props.removeTriggerResult(this.id);
        this.props.showTriggerResult({}, function (id) {
          return _this.id = id;
        });
      } else {
        this.id && this.props.removeTriggerResult(this.id);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
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
    singleClick: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector('selectMapSingleClick', state, ownProps.reducerId)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showTriggerResult: function showTriggerResult(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'TriggerResult', props, onAdd, onRemove));
    },
    removeTriggerResult: function removeTriggerResult(id) {
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
/******/ 	__webpack_require__.h = () => ("b77f6a5917d87cf0695a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OWE5ZTY2YjAyZWM0NTdiN2NmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzBCO0FBQ1k7QUFDK0I7QUFBQSxJQUcvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNuQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsaUJBQUE7SUFBQSxPQUFBSSxVQUFBLE9BQUFKLGlCQUFBLEdBQ1RFLEtBQUs7RUFDZjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUhJRyxTQUFBLENBQUFMLGlCQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixpQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBQyxrQkFBa0JBLENBQUEsRUFBRztNQUFBLElBQUFDLEtBQUE7TUFDakIsSUFBSSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUSxFQUFFO1FBQ3JCLElBQUksQ0FBQ0MsRUFBRSxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxtQkFBbUIsQ0FBQyxJQUFJLENBQUNELEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUNWLEtBQUssQ0FBQ1ksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQ0YsRUFBRTtVQUFBLE9BQU1GLEtBQUksQ0FBQ0UsRUFBRSxHQUFHQSxFQUFFO1FBQUEsQ0FBQyxDQUFDO01BQzVELENBQUMsTUFDSTtRQUNELElBQUksQ0FBQ0EsRUFBRSxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxtQkFBbUIsQ0FBQyxJQUFJLENBQUNELEVBQUUsQ0FBQztNQUN0RDtJQUNKO0VBQUM7SUFBQUwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU8saUJBQWlCQSxDQUFBLEVBQUc7TUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsUUFBUSxDQUFDO0lBQ3BDO0VBQUM7SUFBQVgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVcsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsT0FBTyxJQUFJO0lBQ2Y7RUFBQztBQUFBLEVBekIyQnZCLHdEQUFlO0FBNEIvQyxJQUFNeUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztFQUN6QyxPQUFPO0lBQ0hDLFdBQVcsRUFBRTFCLDhEQUFpQixDQUFDMkIsV0FBVyxDQUFDLHNCQUFzQixFQUFFSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0csU0FBUztFQUNoRyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVEsRUFBSztFQUNyQyxPQUFPO0lBQ0hkLGlCQUFpQixFQUFFLFNBQW5CQSxpQkFBaUJBLENBQUdaLEtBQUssRUFBRTJCLEtBQUssRUFBRUMsUUFBUTtNQUFBLE9BQUtGLFFBQVEsQ0FBQzdCLDREQUFlLENBQUNnQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRTdCLEtBQUssRUFBRTJCLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUNsS2pCLG1CQUFtQixFQUFFLFNBQXJCQSxtQkFBbUJBLENBQUdELEVBQUU7TUFBQSxPQUFLZ0IsUUFBUSxDQUFDN0IsNERBQWUsQ0FBQ2dDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbkIsRUFBRSxDQUFDLENBQUM7SUFBQTtFQUNsRyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlZixvREFBTyxDQUFDd0IsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDM0IsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDdkQ5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gQW4gZXhhbXBsZSBvZiBhIHBsdWdpbiB0aGF0IGxpc3RlbnMgdG8gYW5vdGhlciBcclxuICogICAgcGx1Z2luJ3Mgc3RhdGUgY2hhbmdlcyAoTWFwIHBsdWdpbiksIGFuZCBsb2cgdGhhdCBzdGF0ZS5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcblxyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNjcmlwdGlvbjogXHJcbiAgICAgKiAgLSBSZWFjdCBsaWZlY3ljbGUgbWV0aG9kLCBoZXJlIHdlIGNoZWNrIGZvciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZVRyaWdnZXJSZXN1bHQodGhpcy5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd1RyaWdnZXJSZXN1bHQoe30sIChpZCkgPT4gKHRoaXMuaWQgPSBpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZVRyaWdnZXJSZXN1bHQodGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoJ3NlbGVjdE1hcFNpbmdsZUNsaWNrJywgc3RhdGUsIG93blByb3BzLnJlZHVjZXJJZClcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93VHJpZ2dlclJlc3VsdDogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ1RyaWdnZXJSZXN1bHQnLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlVHJpZ2dlclJlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjc3ZjZhNTkxN2Q4N2NmMDY5NWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJNYXBDbGlja0NvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl90aGlzIiwiaXNBY3RpdmUiLCJpZCIsInJlbW92ZVRyaWdnZXJSZXN1bHQiLCJzaG93VHJpZ2dlclJlc3VsdCIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsInNldHRpbmdzIiwicmVuZGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInNpbmdsZUNsaWNrIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==