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
        this.id = null;
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
/******/ 	__webpack_require__.h = () => ("bf12f4ba62da21e7ee4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBR2QsS0FBSyxFQUFFK0IsS0FBSyxFQUFDQyxRQUFRO01BQUEsT0FBS0YsUUFBUSxDQUFDakMsNERBQWUsQ0FBQ29DLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUVqQyxLQUFLLEVBQUUrQixLQUFLLEVBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbEtkLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQUtlLFFBQVEsQ0FBQ2pDLDREQUFlLENBQUNvQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRWxCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZtQixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR0MsT0FBTyxFQUFFQyxJQUFJLEVBQUs7TUFDekJOLFFBQVEsQ0FBQ08scUJBQXFCLENBQUM7UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLElBQUksRUFBSkE7TUFBSyxDQUFDLENBQUMsQ0FBQztJQUNwRDtFQUVGLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV6QyxvREFBTyxDQUFDNEIsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDL0IsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDcEU5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50ID0gdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50OiB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQsICAvLyBQYXNzIGFzIGEgcHJvcFxyXG4gICAgICB9LFxyXG4gICAgICAoaWQpID0+IHtcclxuICAgICAgICAgIHRoaXMuaWQgPSBpZDsgIC8vIFNhdmUgdGhlIGNvbXBvbmVudCBJRCB0byBlbnN1cmUgaXQncyBzaG93biBvbmNlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHNob3dpbmcgOiBcIiwgdGhpcy5pZCk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUgJiYgcHJldlByb3BzLmlzQWN0aXZlICE9IHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGlzIGFscmVhZHkgc2hvd25cclxuICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHJlbW92aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ3VycmVudENvbXBvbmVudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgLy90aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTWFwQ2xpY2tDb21wb25lbnQgbW91bnRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3RvcihcclxuICAgICAgXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgb3duUHJvcHMucmVkdWNlcklkXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCxvblJlbW92ZSkpLFxyXG4gICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdyZW1vdmVDb21wb25lbnQnLCBpZCkpLFxyXG4gICAgbm90aWZ5OiAobWVzc2FnZSwgdHlwZSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24oeyBtZXNzYWdlLCB0eXBlIH0pKTtcclxuICAgIH0sXHJcbiAgXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hcENsaWNrQ29tcG9uZW50KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmYxMmY0YmE2MmRhMjFlN2VlNGNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJNYXBDbGlja0NvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsInJlbW92ZUN1cnJlbnRDb21wb25lbnQiLCJiaW5kIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfdGhpczIiLCJpc0FjdGl2ZSIsInNob3dNYXBDbGlja1Jlc3VsdCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0dGluZ3MiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic2luZ2xlQ2xpY2siLCJnZXRTZWxlY3RvciIsInJlZHVjZXJJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=