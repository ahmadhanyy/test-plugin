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
/******/ 	__webpack_require__.h = () => ("9546f80e13e4e8846f52")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YWUzZDVmMDEyNmEwODY0OGZlNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzBCO0FBQ1k7QUFDK0I7QUFBQSxJQUcvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNuQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsaUJBQUE7SUFBQSxPQUFBSSxVQUFBLE9BQUFKLGlCQUFBLEdBQ1RFLEtBQUs7RUFDZjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUhJRyxTQUFBLENBQUFMLGlCQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixpQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBQyxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFFMUIsSUFBSSxJQUFJLENBQUNULEtBQUssQ0FBQ1UsUUFBUSxFQUFFO1FBQ3JCLElBQU1DLFNBQVMsR0FBR0gsU0FBUyxDQUFDSSxXQUFXO1FBRXZDLElBQU1DLFlBQVksR0FBRyxJQUFJLENBQUNiLEtBQUssQ0FBQ1ksV0FBVztRQUUzQyxJQUFJQyxZQUFZLElBQUlBLFlBQVksSUFBSUYsU0FBUyxFQUFFO1VBQzNDLElBQUksQ0FBQ0csRUFBRSxJQUFJLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxvQkFBb0IsQ0FBQyxJQUFJLENBQUNELEVBQUUsQ0FBQztVQUVuRCxJQUFJLENBQUNkLEtBQUssQ0FBQ2dCLGtCQUFrQixDQUFDO1lBQzFCQyxVQUFVLEVBQUVKLFlBQVksQ0FBQ0k7VUFDN0IsQ0FBQyxFQUFFLFVBQUFILEVBQUU7WUFBQSxPQUFJTCxLQUFJLENBQUNLLEVBQUUsR0FBR0EsRUFBRTtVQUFBLEVBQUM7UUFDMUI7TUFDSjtJQUNKO0VBQUM7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksaUJBQWlCQSxDQUFBLEVBQUc7TUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3FCLFFBQVEsQ0FBQztJQUNwQztFQUFDO0lBQUFoQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0IsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsT0FBTyxJQUFJO0lBQ2Y7RUFBQztBQUFBLEVBaEMyQjVCLHdEQUFlO0FBbUMvQyxJQUFNOEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztFQUN6QyxPQUFPO0lBQ0hkLFdBQVcsRUFBRWhCLDhEQUFpQixDQUFDK0IsV0FBVyxDQUFDLHNCQUFzQixFQUFFRixLQUFLLEVBQUVDLFFBQVEsQ0FBQ0UsU0FBUztFQUNoRyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVEsRUFBSztFQUNyQyxPQUFPO0lBQ0hkLGtCQUFrQixFQUFFLFNBQXBCQSxrQkFBa0JBLENBQUdoQixLQUFLLEVBQUUrQixLQUFLO01BQUEsT0FBS0QsUUFBUSxDQUFDakMsNERBQWUsQ0FBQ21DLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUVoQyxLQUFLLEVBQUUrQixLQUFLLENBQUMsQ0FBQztJQUFBO0lBQ2hKaEIsb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBR0QsRUFBRTtNQUFBLE9BQUtnQixRQUFRLENBQUNqQyw0REFBZSxDQUFDbUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0VBQ25HLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVuQixvREFBTyxDQUFDNkIsZUFBZSxFQUFFSyxrQkFBa0IsQ0FBQyxDQUFDL0IsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDOUQ5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gQW4gZXhhbXBsZSBvZiBhIHBsdWdpbiB0aGF0IGxpc3RlbnMgdG8gYW5vdGhlciBcclxuICogICAgcGx1Z2luJ3Mgc3RhdGUgY2hhbmdlcyAoTWFwIHBsdWdpbiksIGFuZCBsb2cgdGhhdCBzdGF0ZS5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcblxyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNjcmlwdGlvbjogXHJcbiAgICAgKiAgLSBSZWFjdCBsaWZlY3ljbGUgbWV0aG9kLCBoZXJlIHdlIGNoZWNrIGZvciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZDbGljayA9IHByZXZQcm9wcy5zaW5nbGVDbGljaztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGljayA9IHRoaXMucHJvcHMuc2luZ2xlQ2xpY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENsaWNrICYmIGN1cnJlbnRDbGljayAhPSBwcmV2Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVNYXBDbGlja1Jlc3VsdCh0aGlzLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZTogY3VycmVudENsaWNrLmNvb3JkaW5hdGVcclxuICAgICAgICAgICAgICAgIH0sIGlkID0+IHRoaXMuaWQgPSBpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3Rvcignc2VsZWN0TWFwU2luZ2xlQ2xpY2snLCBzdGF0ZSwgb3duUHJvcHMucmVkdWNlcklkKVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dNYXBDbGlja1Jlc3VsdDogKHByb3BzLCBvbkFkZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAndGVzdC1wbHVnaW4nLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQpKSxcclxuICAgICAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTU0NmY4MGUxM2U0ZTg4NDZmNTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJNYXBDbGlja0NvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzIiwiaXNBY3RpdmUiLCJwcmV2Q2xpY2siLCJzaW5nbGVDbGljayIsImN1cnJlbnRDbGljayIsImlkIiwicmVtb3ZlTWFwQ2xpY2tSZXN1bHQiLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJjb29yZGluYXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwic2V0dGluZ3MiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwiZ2V0QWN0aW9uQ3JlYXRvciJdLCJzb3VyY2VSb290IjoiIn0=