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
    var _this;
    _classCallCheck(this, MapClickComponent);
    _this = _callSuper(this, MapClickComponent, [props]);
    _this.currentCID = null;
    _this.removeCurrentComponent = _this.removeCurrentComponent.bind(_this);
    return _this;
  }

  /**
   * Description:
   *  - React lifecycle method, here we check for state changes.
   */
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
      } else if (!this.props.isActive) {
        this.id && this.props.removeComponent(this.id);
        this.props.removeComponent(this.currentCID);
        this.currentCID = null;
      }
    }
  }, {
    key: "removeCurrentComponent",
    value: function removeCurrentComponent() {
      this.props.removeComponent(this.id);
      this.props.removeComponent(this.currentCID);
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
/******/ 	__webpack_require__.h = () => ("94e581c30a4fba9c1cf1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDhhNTgxYTU5OGIxNTgwMWY0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCO0FBQ1k7QUFDK0I7QUFBQSxJQUUvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNyQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGlCQUFBO0lBQ2pCRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsaUJBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFVBQVUsR0FBRyxJQUFJO0lBQ3RCSCxLQUFBLENBQUtJLHNCQUFzQixHQUFHSixLQUFBLENBQUtJLHNCQUFzQixDQUFDQyxJQUFJLENBQUFMLEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDdkU7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7RUFIRU0sU0FBQSxDQUFBVCxpQkFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFTLFlBQUEsQ0FBQVYsaUJBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQUMsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUU7TUFBQSxJQUFBQyxNQUFBO01BQzFCLElBQUksSUFBSSxDQUFDYixLQUFLLENBQUNjLFFBQVEsSUFBSUYsU0FBUyxDQUFDRSxRQUFRLElBQUksSUFBSSxDQUFDZCxLQUFLLENBQUNjLFFBQVEsRUFBRTtRQUNoRTtRQUNBLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxrQkFBa0IsQ0FBQztVQUMxQlYsc0JBQXNCLEVBQUUsSUFBSSxDQUFDQSxzQkFBc0IsQ0FBRztRQUMxRCxDQUFDLEVBQUUsVUFBQ1csRUFBRSxFQUFLO1VBQ1BILE1BQUksQ0FBQ0csRUFBRSxHQUFHQSxFQUFFLENBQUMsQ0FBRTtRQUNuQixDQUFDLENBQUM7TUFDTixDQUFDLE1BQ0ksSUFBSSxDQUFDLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2MsUUFBUSxFQUFFO1FBQzNCLElBQUksQ0FBQ0UsRUFBRSxJQUFJLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2lCLGVBQWUsQ0FBQyxJQUFJLENBQUNELEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUNoQixLQUFLLENBQUNpQixlQUFlLENBQUMsSUFBSSxDQUFDYixVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDQSxVQUFVLEdBQUcsSUFBSTtNQUMxQjtJQUNKO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsc0JBQXNCQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDTCxLQUFLLENBQUNpQixlQUFlLENBQUMsSUFBSSxDQUFDRCxFQUFFLENBQUM7TUFDbkMsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsZUFBZSxDQUFDLElBQUksQ0FBQ2IsVUFBVSxDQUFDO0lBQy9DO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVEsaUJBQWlCQSxDQUFBLEVBQUc7TUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNwQixLQUFLLENBQUNxQixRQUFRLENBQUM7SUFDbEM7RUFBQztJQUFBWixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBWSxNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUEsRUF2QzZCNUIsd0RBQWU7QUEwQy9DLElBQU04QixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBRUMsUUFBUSxFQUFLO0VBQzNDLE9BQU87SUFDTEMsV0FBVyxFQUFFL0IsOERBQWlCLENBQUNnQyxXQUFXLENBQ3hDLHNCQUFzQixFQUN0QkgsS0FBSyxFQUNMQyxRQUFRLENBQUNHLFNBQ1g7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVEsRUFBSztFQUN2QyxPQUFPO0lBQ0xoQixrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFHZixLQUFLLEVBQUVnQyxLQUFLLEVBQUNDLFFBQVE7TUFBQSxPQUFLRixRQUFRLENBQUNsQyw0REFBZSxDQUFDcUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRWxDLEtBQUssRUFBRWdDLEtBQUssRUFBQ0MsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUNsS0Usb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBR25CLEVBQUU7TUFBQSxPQUFLZSxRQUFRLENBQUNsQyw0REFBZSxDQUFDcUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQy9GQyxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUdELEVBQUU7TUFBQSxPQUFLZSxRQUFRLENBQUNsQyw0REFBZSxDQUFDcUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVsQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQzFGb0IsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUdDLE9BQU8sRUFBRUMsSUFBSSxFQUFLO01BQ3ZCUCxRQUFRLENBQUNRLHFCQUFxQixDQUFDO1FBQUVGLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxJQUFJLEVBQUpBO01BQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQ7RUFFRixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlM0Msb0RBQU8sQ0FBQzZCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ2hDLGlCQUFpQixDQUFDOzs7Ozs7OztVQzVFOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEF1dGhvcjogQW1yIFNhbWlyXHJcbiAqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiAgLSBBbiBleGFtcGxlIG9mIGEgcGx1Z2luIHRoYXQgbGlzdGVucyB0byBhbm90aGVyXHJcbiAqICAgIHBsdWdpbidzIHN0YXRlIGNoYW5nZXMgKE1hcCBwbHVnaW4pLCBhbmQgbG9nIHRoYXQgc3RhdGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnkgfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcblxyXG5jbGFzcyBNYXBDbGlja0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uOlxyXG4gICAqICAtIFJlYWN0IGxpZmVjeWNsZSBtZXRob2QsIGhlcmUgd2UgY2hlY2sgZm9yIHN0YXRlIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50OiB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQsICAvLyBQYXNzIGFzIGEgcHJvcFxyXG4gICAgICAgICAgICB9LCAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBpZDsgIC8vIFNhdmUgdGhlIGNvbXBvbmVudCBJRCB0byBlbnN1cmUgaXQncyBzaG93biBvbmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q0lEID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ3VycmVudENvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTWFwQ2xpY2tDb21wb25lbnQgbW91bnRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3RvcihcclxuICAgICAgXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgb3duUHJvcHMucmVkdWNlcklkXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCxvblJlbW92ZSkpLFxyXG4gICAgcmVtb3ZlTWFwQ2xpY2tSZXN1bHQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICBub3RpZnk6IChtZXNzYWdlLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKHsgbWVzc2FnZSwgdHlwZSB9KSk7XHJcbiAgICB9LFxyXG4gIFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk0ZTU4MWMzMGE0ZmJhOWMxY2YxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJjdXJyZW50Q0lEIiwicmVtb3ZlQ3VycmVudENvbXBvbmVudCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzMiIsImlzQWN0aXZlIiwic2hvd01hcENsaWNrUmVzdWx0IiwiaWQiLCJyZW1vdmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsInJlbW92ZU1hcENsaWNrUmVzdWx0Iiwibm90aWZ5IiwibWVzc2FnZSIsInR5cGUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iXSwic291cmNlUm9vdCI6IiJ9