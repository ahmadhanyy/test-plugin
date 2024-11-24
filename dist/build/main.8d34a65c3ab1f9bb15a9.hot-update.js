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
        //this.props.settings.dataSettings.ddd.id && this.props.removeTriggerResult(this.props.settings.dataSettings.ddd.id);
        //this.props.showTriggerResult((id) => (id = this.props.settings.dataSettings.ddd.id));
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
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MapClickComponent));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53b9808ea3744f857d92")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZDM0YTY1YzNhYjFmOWJiMTVhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCO0FBQ1k7QUFDK0I7QUFBQSxJQUUvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNyQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGlCQUFBO0lBQ2pCRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsaUJBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFVBQVUsR0FBRyxJQUFJO0lBQ3RCSCxLQUFBLENBQUtJLHNCQUFzQixHQUFHSixLQUFBLENBQUtJLHNCQUFzQixDQUFDQyxJQUFJLENBQUFMLEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDdkU7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7RUFIRU0sU0FBQSxDQUFBVCxpQkFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFTLFlBQUEsQ0FBQVYsaUJBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBSUEsU0FBQUMsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUU7TUFBQSxJQUFBQyxNQUFBO01BQzFCLElBQUksSUFBSSxDQUFDYixLQUFLLENBQUNjLFFBQVEsSUFBSUYsU0FBUyxDQUFDRSxRQUFRLElBQUksSUFBSSxDQUFDZCxLQUFLLENBQUNjLFFBQVEsRUFBRTtRQUNoRTtRQUNBO1FBQ0E7UUFDQSxJQUFJLENBQUNkLEtBQUssQ0FBQ2Usa0JBQWtCLENBQUM7VUFDMUJWLHNCQUFzQixFQUFFLElBQUksQ0FBQ0Esc0JBQXNCLENBQUc7UUFDMUQsQ0FBQyxFQUFFLFVBQUNXLEVBQUUsRUFBSztVQUNQSCxNQUFJLENBQUNHLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUU7UUFDbkIsQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUNJLElBQUksQ0FBQyxJQUFJLENBQUNoQixLQUFLLENBQUNjLFFBQVEsRUFBRTtRQUMzQixJQUFJLENBQUNFLEVBQUUsSUFBSSxJQUFJLENBQUNoQixLQUFLLENBQUNpQixlQUFlLENBQUMsSUFBSSxDQUFDRCxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsZUFBZSxDQUFDLElBQUksQ0FBQ2IsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7TUFDMUI7SUFDSjtFQUFDO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLHNCQUFzQkEsQ0FBQSxFQUFHO01BQ3JCLElBQUksQ0FBQ0wsS0FBSyxDQUFDaUIsZUFBZSxDQUFDLElBQUksQ0FBQ0QsRUFBRSxDQUFDO01BQ25DLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2lCLGVBQWUsQ0FBQyxJQUFJLENBQUNiLFVBQVUsQ0FBQztJQUMvQztFQUFDO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztNQUN4Q0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsUUFBUSxDQUFDO0lBQ2xDO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBekM2QjVCLHdEQUFlO0FBNEMvQyxJQUFNOEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztFQUMzQyxPQUFPO0lBQ0xDLFdBQVcsRUFBRS9CLDhEQUFpQixDQUFDZ0MsV0FBVyxDQUN4QyxzQkFBc0IsRUFDdEJILEtBQUssRUFDTEMsUUFBUSxDQUFDRyxTQUNYO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRLEVBQUs7RUFDdkMsT0FBTztJQUNMaEIsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBR2YsS0FBSyxFQUFFZ0MsS0FBSyxFQUFDQyxRQUFRO01BQUEsT0FBS0YsUUFBUSxDQUFDbEMsNERBQWUsQ0FBQ3FDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUVsQyxLQUFLLEVBQUVnQyxLQUFLLEVBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbEtFLG9CQUFvQixFQUFFLFNBQXRCQSxvQkFBb0JBLENBQUduQixFQUFFO01BQUEsT0FBS2UsUUFBUSxDQUFDbEMsNERBQWUsQ0FBQ3FDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbEIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMvRkMsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHRCxFQUFFO01BQUEsT0FBS2UsUUFBUSxDQUFDbEMsNERBQWUsQ0FBQ3FDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbEIsRUFBRSxDQUFDLENBQUM7SUFBQTtFQUM1RixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlckIsb0RBQU8sQ0FBQzZCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ2hDLGlCQUFpQixDQUFDOzs7Ozs7OztVQzFFOUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEF1dGhvcjogQW1yIFNhbWlyXHJcbiAqXHJcbiAqIERlc2NyaXB0aW9uOlxyXG4gKiAgLSBBbiBleGFtcGxlIG9mIGEgcGx1Z2luIHRoYXQgbGlzdGVucyB0byBhbm90aGVyXHJcbiAqICAgIHBsdWdpbidzIHN0YXRlIGNoYW5nZXMgKE1hcCBwbHVnaW4pLCBhbmQgbG9nIHRoYXQgc3RhdGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnkgfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcblxyXG5jbGFzcyBNYXBDbGlja0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uOlxyXG4gICAqICAtIFJlYWN0IGxpZmVjeWNsZSBtZXRob2QsIGhlcmUgd2UgY2hlY2sgZm9yIHN0YXRlIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICAgICAgICAvL3RoaXMucHJvcHMuc2V0dGluZ3MuZGF0YVNldHRpbmdzLmRkZC5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZVRyaWdnZXJSZXN1bHQodGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhU2V0dGluZ3MuZGRkLmlkKTtcclxuICAgICAgICAgICAgLy90aGlzLnByb3BzLnNob3dUcmlnZ2VyUmVzdWx0KChpZCkgPT4gKGlkID0gdGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhU2V0dGluZ3MuZGRkLmlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUN1cnJlbnRDb21wb25lbnQ6IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCwgIC8vIFBhc3MgYXMgYSBwcm9wXHJcbiAgICAgICAgICAgIH0sIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGlkOyAgLy8gU2F2ZSB0aGUgY29tcG9uZW50IElEIHRvIGVuc3VyZSBpdCdzIHNob3duIG9uY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuY3VycmVudENJRCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXBDbGlja0NvbXBvbmVudCBtb3VudGVkXCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2luZ2xlQ2xpY2s6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKFxyXG4gICAgICBcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBvd25Qcm9wcy5yZWR1Y2VySWRcclxuICAgICksXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQsb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ01hcENsaWNrUmVzdWx0JywgcHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSksXHJcbiAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1M2I5ODA4ZWEzNzQ0Zjg1N2Q5MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIk1hcENsaWNrQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiY3VycmVudENJRCIsInJlbW92ZUN1cnJlbnRDb21wb25lbnQiLCJiaW5kIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfdGhpczIiLCJpc0FjdGl2ZSIsInNob3dNYXBDbGlja1Jlc3VsdCIsImlkIiwicmVtb3ZlQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwic2V0dGluZ3MiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic2luZ2xlQ2xpY2siLCJnZXRTZWxlY3RvciIsInJlZHVjZXJJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=