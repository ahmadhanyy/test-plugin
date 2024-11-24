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
    _this.currentCID = null;
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
      } else if (!this.props.isActive) {
        this.id && this.props.removeComponent(this.id);
        this.props.removeComponent(this.currentCID);
        this.currentCID = null;
        console.log("the id when removing : ", this.id);
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
/******/ 	__webpack_require__.h = () => ("f1bbe1e53b0c2274e119")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3ZDLE9BQU87SUFDTGhCLGtCQUFrQixFQUFFLFNBQXBCQSxrQkFBa0JBLENBQUdmLEtBQUssRUFBRWdDLEtBQUssRUFBQ0MsUUFBUTtNQUFBLE9BQUtGLFFBQVEsQ0FBQ2xDLDREQUFlLENBQUNxQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFbEMsS0FBSyxFQUFFZ0MsS0FBSyxFQUFDQyxRQUFRLENBQUMsQ0FBQztJQUFBO0lBQ2xLRSxvQkFBb0IsRUFBRSxTQUF0QkEsb0JBQW9CQSxDQUFHbkIsRUFBRTtNQUFBLE9BQUtlLFFBQVEsQ0FBQ2xDLDREQUFlLENBQUNxQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRWxCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDL0ZHLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQUtlLFFBQVEsQ0FBQ2xDLDREQUFlLENBQUNxQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRWxCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZvQixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR0MsT0FBTyxFQUFFQyxJQUFJLEVBQUs7TUFDdkJQLFFBQVEsQ0FBQ1EscUJBQXFCLENBQUM7UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLElBQUksRUFBSkE7TUFBSyxDQUFDLENBQUMsQ0FBQztJQUN0RDtFQUVGLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUzQyxvREFBTyxDQUFDNkIsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDaEMsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDbkU5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5jdXJyZW50Q0lEID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCA9IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50OiB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQsICAvLyBQYXNzIGFzIGEgcHJvcFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBpZDsgIC8vIFNhdmUgdGhlIGNvbXBvbmVudCBJRCB0byBlbnN1cmUgaXQncyBzaG93biBvbmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHNob3dpbmcgOiBcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHJlbW92aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuY3VycmVudENJRCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXBDbGlja0NvbXBvbmVudCBtb3VudGVkXCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2luZ2xlQ2xpY2s6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKFxyXG4gICAgICBcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBvd25Qcm9wcy5yZWR1Y2VySWRcclxuICAgICksXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQsb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ01hcENsaWNrUmVzdWx0JywgcHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSksXHJcbiAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIG5vdGlmeTogKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24oeyBtZXNzYWdlLCB0eXBlIH0pKTtcclxuICAgIH0sXHJcbiAgXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hcENsaWNrQ29tcG9uZW50KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjFiYmUxZTUzYjBjMjI3NGUxMTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJNYXBDbGlja0NvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImN1cnJlbnRDSUQiLCJyZW1vdmVDdXJyZW50Q29tcG9uZW50IiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMyIiwiaXNBY3RpdmUiLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInNldHRpbmdzIiwicmVuZGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInNpbmdsZUNsaWNrIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwicmVtb3ZlTWFwQ2xpY2tSZXN1bHQiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=