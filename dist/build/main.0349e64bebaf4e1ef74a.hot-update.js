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
  function MapClickComponent() {
    _classCallCheck(this, MapClickComponent);
    return _callSuper(this, MapClickComponent, arguments);
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
      var _this = this;
      if (this.props.isActive && prevProps.isActive != this.props.isActive) {
        // Show the MapClickResult only if it hasn't been shown yet
        this.props.showMapClickResult({
          //removeCurrentComponent: this.removeCurrentComponent,  // Pass as a prop
        }, function (id) {
          _this.id = id; // Save the component ID to ensure it's shown once
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

    /*   removeCurrentComponent = () => {
        this.props.removeComponent(this.id);
        //this.props.removeComponent(this.currentCID);
      } */
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
/******/ 	__webpack_require__.h = () => ("0449e17c47a4f760dbb8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMzQ5ZTY0YmViYWY0ZTFlZjc0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDK0I7QUFBQSxJQUUvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUFBLFNBQUFELGtCQUFBO0lBQUFFLGVBQUEsT0FBQUYsaUJBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILGlCQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLGlCQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixpQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUE7SUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFRSxTQUFBQyxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFDNUIsSUFBSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxJQUFJSCxTQUFTLENBQUNHLFFBQVEsSUFBSSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsUUFBUSxFQUFFO1FBQ3BFO1FBQ0EsSUFBSSxDQUFDRCxLQUFLLENBQUNFLGtCQUFrQixDQUFDO1VBQzFCO1FBQUEsQ0FDSCxFQUNELFVBQUNDLEVBQUUsRUFBSztVQUNKSixLQUFJLENBQUNJLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUU7UUFDbkIsQ0FBQyxDQUFDO1FBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQ0YsRUFBRSxDQUFDO01BQ2hELENBQUMsTUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUNDLFFBQVEsSUFBSUgsU0FBUyxDQUFDRyxRQUFRLElBQUksSUFBSSxDQUFDRCxLQUFLLENBQUNDLFFBQVEsRUFBRTtRQUMxRTtRQUNBLElBQUksQ0FBQ0UsRUFBRSxJQUFJLElBQUksQ0FBQ0gsS0FBSyxDQUFDTSxlQUFlLENBQUMsSUFBSSxDQUFDSCxFQUFFLENBQUM7UUFDOUM7UUFDQTtRQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUNGLEVBQUUsQ0FBQztNQUNqRDtJQUNGOztJQUVGO0FBQ0E7QUFDQTtBQUNBO0VBSEE7SUFBQVIsR0FBQTtJQUFBQyxLQUFBLEVBS0UsU0FBQVcsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO0lBQ2xDO0VBQUM7SUFBQWIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWEsTUFBTUEsQ0FBQSxFQUFHO01BQ1AsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBLEVBdkM2QnpCLHdEQUFlO0FBMEMvQyxJQUFNMkIsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUVDLFFBQVEsRUFBSztFQUMzQyxPQUFPO0lBQ0xDLFdBQVcsRUFBRTVCLDhEQUFpQixDQUFDNkIsV0FBVyxDQUN4QyxzQkFBc0IsRUFDdEJILEtBQUssRUFDTEMsUUFBUSxDQUFDRyxTQUNYO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRLEVBQUs7RUFDdkMsT0FBTztJQUNMaEIsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBR0YsS0FBSyxFQUFFbUIsS0FBSyxFQUFDQyxRQUFRO01BQUEsT0FBS0YsUUFBUSxDQUFDL0IsNERBQWUsQ0FBQ2tDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUVyQixLQUFLLEVBQUVtQixLQUFLLEVBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbEtkLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQUtlLFFBQVEsQ0FBQy9CLDREQUFlLENBQUNrQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRWxCLEVBQUUsQ0FBQyxDQUFDO0lBQUE7SUFDMUZtQixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR0MsT0FBTyxFQUFFQyxJQUFJLEVBQUs7TUFDekJOLFFBQVEsQ0FBQ08scUJBQXFCLENBQUM7UUFBRUYsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLElBQUksRUFBSkE7TUFBSyxDQUFDLENBQUMsQ0FBQztJQUNwRDtFQUVGLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV2QyxvREFBTyxDQUFDMEIsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDN0IsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDbkU5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLyogICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy90aGlzLmN1cnJlbnRDSUQgPSBudWxsO1xyXG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50ID0gdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgfSAqL1xyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgICAvL3JlbW92ZUN1cnJlbnRDb21wb25lbnQ6IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCwgIC8vIFBhc3MgYXMgYSBwcm9wXHJcbiAgICAgIH0sXHJcbiAgICAgIChpZCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pZCA9IGlkOyAgLy8gU2F2ZSB0aGUgY29tcG9uZW50IElEIHRvIGVuc3VyZSBpdCdzIHNob3duIG9uY2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlkIHdoZW4gc2hvd2luZyA6IFwiLCB0aGlzLmlkKTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBSZW1vdmUgdGhlIE1hcENsaWNrUmVzdWx0IG9ubHkgaWYgaXQgaXMgYWxyZWFkeSBzaG93blxyXG4gICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAvL3RoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuY3VycmVudENJRCk7XHJcbiAgICAgIC8vdGhpcy5jdXJyZW50Q0lEID0gbnVsbDtcclxuICAgICAgY29uc29sZS5sb2coXCJ0aGUgaWQgd2hlbiByZW1vdmluZyA6IFwiLCB0aGlzLmlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vKiAgIHJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgIC8vdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICB9ICovXHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcENsaWNrQ29tcG9uZW50IG1vdW50ZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoXHJcbiAgICAgIFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIixcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIG93blByb3BzLnJlZHVjZXJJZFxyXG4gICAgKSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dNYXBDbGlja1Jlc3VsdDogKHByb3BzLCBvbkFkZCxvblJlbW92ZSkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAndGVzdC1wbHVnaW4nLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQsb25SZW1vdmUpKSxcclxuICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIG5vdGlmeTogKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKHsgbWVzc2FnZSwgdHlwZSB9KSk7XHJcbiAgICB9LFxyXG4gIFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0NDllMTdjNDdhNGY3NjBkYmI4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMiLCJwcm9wcyIsImlzQWN0aXZlIiwic2hvd01hcENsaWNrUmVzdWx0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXR0aW5ncyIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJ0eXBlIiwic3lzdGVtQWRkTm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==