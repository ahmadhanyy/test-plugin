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
        //console.log("the current id when showing : ", this.currentCID);
      } else if (!this.props.isActive) {
        this.id && this.props.removeComponent(this.id);
        this.props.removeComponent(this.currentCID);
        //this.currentCID = null;
        console.log("the id when removing : ", this.id);
        //console.log("the current id when removing : ", this.currentCID);
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
/******/ 	__webpack_require__.h = () => ("40e4da99fa192d269bed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OGNjMTk4M2Y0MTIxNDliMzZkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDK0I7QUFBQSxJQUUvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNyQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLGlCQUFBO0lBQ2pCRyxLQUFBLEdBQUFFLFVBQUEsT0FBQUwsaUJBQUEsR0FBTUUsS0FBSztJQUNYO0lBQ0FDLEtBQUEsQ0FBS0csc0JBQXNCLEdBQUdILEtBQUEsQ0FBS0csc0JBQXNCLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUN2RTtFQUFDSyxTQUFBLENBQUFSLGlCQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQVEsWUFBQSxDQUFBVCxpQkFBQTtJQUFBVSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRTtNQUFBLElBQUFDLE1BQUE7TUFDMUIsSUFBSSxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsUUFBUSxJQUFJRixTQUFTLENBQUNFLFFBQVEsSUFBSSxJQUFJLENBQUNiLEtBQUssQ0FBQ2EsUUFBUSxFQUFFO1FBQ2hFO1FBQ0EsSUFBSSxDQUFDYixLQUFLLENBQUNjLGtCQUFrQixDQUFDO1VBQzFCVixzQkFBc0IsRUFBRSxJQUFJLENBQUNBLHNCQUFzQixDQUFHO1FBQzFELENBQUMsRUFDRCxVQUFDVyxFQUFFLEVBQUs7VUFDSkgsTUFBSSxDQUFDRyxFQUFFLEdBQUdBLEVBQUUsQ0FBQyxDQUFFO1FBQ25CLENBQUMsQ0FBQztRQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUNGLEVBQUUsQ0FBQztRQUM5QztNQUNKLENBQUMsTUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDZixLQUFLLENBQUNhLFFBQVEsRUFBRTtRQUMzQixJQUFJLENBQUNFLEVBQUUsSUFBSSxJQUFJLENBQUNmLEtBQUssQ0FBQ2tCLGVBQWUsQ0FBQyxJQUFJLENBQUNILEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUNmLEtBQUssQ0FBQ2tCLGVBQWUsQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztRQUMzQztRQUNBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNGLEVBQUUsQ0FBQztRQUMvQztNQUNKO0lBQ0o7RUFBQztJQUFBUCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxzQkFBc0JBLENBQUEsRUFBRztNQUNyQixJQUFJLENBQUNKLEtBQUssQ0FBQ2tCLGVBQWUsQ0FBQyxJQUFJLENBQUNILEVBQUUsQ0FBQztNQUNuQztJQUNKO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVcsaUJBQWlCQSxDQUFBLEVBQUc7TUFDcEJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNqQixLQUFLLENBQUNxQixRQUFRLENBQUM7SUFDbEM7RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYSxNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUEsRUF4QzZCNUIsd0RBQWU7QUEyQy9DLElBQU04QixlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBRUMsUUFBUSxFQUFLO0VBQzNDLE9BQU87SUFDTEMsV0FBVyxFQUFFL0IsOERBQWlCLENBQUNnQyxXQUFXLENBQ3hDLHNCQUFzQixFQUN0QkgsS0FBSyxFQUNMQyxRQUFRLENBQUNHLFNBQ1g7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlDLFFBQVEsRUFBSztFQUN2QyxPQUFPO0lBQ0xqQixrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFHZCxLQUFLLEVBQUVnQyxLQUFLLEVBQUNDLFFBQVE7TUFBQSxPQUFLRixRQUFRLENBQUNsQyw0REFBZSxDQUFDcUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRWxDLEtBQUssRUFBRWdDLEtBQUssRUFBQ0MsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUNsS0Usb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBR3BCLEVBQUU7TUFBQSxPQUFLZ0IsUUFBUSxDQUFDbEMsNERBQWUsQ0FBQ3FDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbkIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMvRkcsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHSCxFQUFFO01BQUEsT0FBS2dCLFFBQVEsQ0FBQ2xDLDREQUFlLENBQUNxQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRW5CLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZxQixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR0MsT0FBTyxFQUFFQyxJQUFJLEVBQUs7TUFDdkJQLFFBQVEsQ0FBQ1EscUJBQXFCLENBQUM7UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLElBQUksRUFBSkE7TUFBSyxDQUFDLENBQUMsQ0FBQztJQUN0RDtFQUVGLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWUzQyxvREFBTyxDQUFDNkIsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDaEMsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDckU5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50ID0gdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlICYmIHByZXZQcm9wcy5pc0FjdGl2ZSAhPSB0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIE1hcENsaWNrUmVzdWx0IG9ubHkgaWYgaXQgaGFzbid0IGJlZW4gc2hvd24geWV0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUN1cnJlbnRDb21wb25lbnQ6IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCwgIC8vIFBhc3MgYXMgYSBwcm9wXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IGlkOyAgLy8gU2F2ZSB0aGUgY29tcG9uZW50IElEIHRvIGVuc3VyZSBpdCdzIHNob3duIG9uY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlkIHdoZW4gc2hvd2luZyA6IFwiLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRoZSBjdXJyZW50IGlkIHdoZW4gc2hvd2luZyA6IFwiLCB0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBpZCB3aGVuIHJlbW92aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwidGhlIGN1cnJlbnQgaWQgd2hlbiByZW1vdmluZyA6IFwiLCB0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgIC8vdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcENsaWNrQ29tcG9uZW50IG1vdW50ZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoXHJcbiAgICAgIFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIixcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIG93blByb3BzLnJlZHVjZXJJZFxyXG4gICAgKSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dNYXBDbGlja1Jlc3VsdDogKHByb3BzLCBvbkFkZCxvblJlbW92ZSkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAndGVzdC1wbHVnaW4nLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQsb25SZW1vdmUpKSxcclxuICAgIHJlbW92ZU1hcENsaWNrUmVzdWx0OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdyZW1vdmVDb21wb25lbnQnLCBpZCkpLFxyXG4gICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdyZW1vdmVDb21wb25lbnQnLCBpZCkpLFxyXG4gICAgbm90aWZ5OiAobWVzc2FnZSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbih7IG1lc3NhZ2UsIHR5cGUgfSkpO1xyXG4gICAgfSxcclxuICBcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MGU0ZGE5OWZhMTkyZDI2OWJlZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIk1hcENsaWNrQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwicmVtb3ZlQ3VycmVudENvbXBvbmVudCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzMiIsImlzQWN0aXZlIiwic2hvd01hcENsaWNrUmVzdWx0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ29tcG9uZW50IiwiY3VycmVudENJRCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0dGluZ3MiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic2luZ2xlQ2xpY2siLCJnZXRTZWxlY3RvciIsInJlZHVjZXJJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJ0eXBlIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==