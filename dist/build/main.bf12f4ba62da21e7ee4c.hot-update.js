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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent() {
    var _this;
    _classCallCheck(this, MapClickComponent);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MapClickComponent, [].concat(args));
    _defineProperty(_this, "removeCurrentComponent", function () {
      _this.props.removeComponent(_this.id);
      //this.props.removeComponent(this.currentCID);
    });
    return _this;
  }
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidUpdate",
    value:
    /*   constructor(props) {
        super(props);
        //this.currentCID = null;
        this.removeCurrentComponent = this.removeCurrentComponent.bind(this);
      } */

    function componentDidUpdate(prevProps) {
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
/******/ 	__webpack_require__.h = () => ("0349e64bebaf4e1ef74a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZjEyZjRiYTYyZGEyMWU3ZWU0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQytCO0FBQUEsSUFFL0RJLGlCQUFpQiwwQkFBQUMsZ0JBQUE7RUFBQSxTQUFBRCxrQkFBQTtJQUFBLElBQUFFLEtBQUE7SUFBQUMsZUFBQSxPQUFBSCxpQkFBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQVEsVUFBQSxPQUFBVixpQkFBQSxLQUFBVyxNQUFBLENBQUFKLElBQUE7SUFBQUssZUFBQSxDQUFBVixLQUFBLDRCQTJCSSxZQUFNO01BQzdCQSxLQUFBLENBQUtXLEtBQUssQ0FBQ0MsZUFBZSxDQUFDWixLQUFBLENBQUthLEVBQUUsQ0FBQztNQUNuQztJQUNGLENBQUM7SUFBQSxPQUFBYixLQUFBO0VBQUE7RUFBQWMsU0FBQSxDQUFBaEIsaUJBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBZ0IsWUFBQSxDQUFBakIsaUJBQUE7SUFBQWtCLEdBQUE7SUFBQUMsS0FBQTtJQTdCSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVFLFNBQUFDLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUM1QixJQUFJLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxRQUFRLElBQUlGLFNBQVMsQ0FBQ0UsUUFBUSxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVSxRQUFRLEVBQUU7UUFDcEU7UUFDQSxJQUFJLENBQUNWLEtBQUssQ0FBQ1csa0JBQWtCLENBQUM7VUFDMUJDLHNCQUFzQixFQUFFLElBQUksQ0FBQ0Esc0JBQXNCLENBQUc7UUFDMUQsQ0FBQyxFQUNELFVBQUNWLEVBQUUsRUFBSztVQUNKTyxNQUFJLENBQUNQLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUU7UUFDbkIsQ0FBQyxDQUFDO1FBQ0ZXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQ1osRUFBRSxDQUFDO01BQ2hELENBQUMsTUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDRixLQUFLLENBQUNVLFFBQVEsSUFBSUYsU0FBUyxDQUFDRSxRQUFRLElBQUksSUFBSSxDQUFDVixLQUFLLENBQUNVLFFBQVEsRUFBRTtRQUMxRTtRQUNBLElBQUksQ0FBQ1IsRUFBRSxJQUFJLElBQUksQ0FBQ0YsS0FBSyxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDQyxFQUFFLENBQUM7UUFDOUM7UUFDQTtRQUNBVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNaLEVBQUUsQ0FBQztNQUNqRDtJQUNGO0VBQUM7SUFBQUcsR0FBQTtJQUFBQyxLQUFBLEVBT0QsU0FBQVMsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNkLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBQztJQUNsQztFQUFDO0lBQUFYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFXLE1BQU1BLENBQUEsRUFBRztNQUNQLE9BQU8sSUFBSTtJQUNiO0VBQUM7QUFBQSxFQXZDNkJsQyx3REFBZTtBQTBDL0MsSUFBTW9DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDM0MsT0FBTztJQUNMQyxXQUFXLEVBQUVyQyw4REFBaUIsQ0FBQ3NDLFdBQVcsQ0FDeEMsc0JBQXNCLEVBQ3RCSCxLQUFLLEVBQ0xDLFFBQVEsQ0FBQ0csU0FDWDtFQUNGLENBQUM7QUFDSCxDQUFDO0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3ZDLE9BQU87SUFDTGYsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBR1gsS0FBSyxFQUFFMkIsS0FBSyxFQUFDQyxRQUFRO01BQUEsT0FBS0YsUUFBUSxDQUFDeEMsNERBQWUsQ0FBQzJDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUU3QixLQUFLLEVBQUUyQixLQUFLLEVBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbEszQixlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUdDLEVBQUU7TUFBQSxPQUFLd0IsUUFBUSxDQUFDeEMsNERBQWUsQ0FBQzJDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFM0IsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMxRjRCLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHQyxPQUFPLEVBQUVDLElBQUksRUFBSztNQUN6Qk4sUUFBUSxDQUFDTyxxQkFBcUIsQ0FBQztRQUFFRixPQUFPLEVBQVBBLE9BQU87UUFBRUMsSUFBSSxFQUFKQTtNQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BEO0VBRUYsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWhELG9EQUFPLENBQUNtQyxlQUFlLEVBQUVNLGtCQUFrQixDQUFDLENBQUN0QyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7VUNuRTlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5IH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4vKiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvL3RoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQuYmluZCh0aGlzKTtcclxuICB9ICovXHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlICYmIHByZXZQcm9wcy5pc0FjdGl2ZSAhPSB0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgIC8vIFNob3cgdGhlIE1hcENsaWNrUmVzdWx0IG9ubHkgaWYgaXQgaGFzbid0IGJlZW4gc2hvd24geWV0XHJcbiAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KHtcclxuICAgICAgICAgIHJlbW92ZUN1cnJlbnRDb21wb25lbnQ6IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCwgIC8vIFBhc3MgYXMgYSBwcm9wXHJcbiAgICAgIH0sXHJcbiAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pZCA9IGlkOyAgLy8gU2F2ZSB0aGUgY29tcG9uZW50IElEIHRvIGVuc3VyZSBpdCdzIHNob3duIG9uY2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlkIHdoZW4gc2hvd2luZyA6IFwiLCB0aGlzLmlkKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBSZW1vdmUgdGhlIE1hcENsaWNrUmVzdWx0IG9ubHkgaWYgaXQgaXMgYWxyZWFkeSBzaG93blxyXG4gICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAvL3RoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuY3VycmVudENJRCk7XHJcbiAgICAgIC8vdGhpcy5jdXJyZW50Q0lEID0gbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaWQgd2hlbiByZW1vdmluZyA6IFwiLCB0aGlzLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgIC8vdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcENsaWNrQ29tcG9uZW50IG1vdW50ZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoXHJcbiAgICAgIFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIixcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIG93blByb3BzLnJlZHVjZXJJZFxyXG4gICAgKSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dNYXBDbGlja1Jlc3VsdDogKHByb3BzLCBvbkFkZCxvblJlbW92ZSkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAndGVzdC1wbHVnaW4nLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQsb25SZW1vdmUpKSxcclxuICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIG5vdGlmeTogKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKHsgbWVzc2FnZSwgdHlwZSB9KSk7XHJcbiAgICB9LFxyXG4gIFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAzNDllNjRiZWJhZjRlMWVmNzRhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcm9wcyIsInJlbW92ZUNvbXBvbmVudCIsImlkIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfdGhpczIiLCJpc0FjdGl2ZSIsInNob3dNYXBDbGlja1Jlc3VsdCIsInJlbW92ZUN1cnJlbnRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXR0aW5ncyIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJ0eXBlIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==