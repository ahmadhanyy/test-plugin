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
        this.props, showTriggerResult({}, function (id) {
          return _this.id = id;
        });
        //const prevClick = prevProps.singleClick;
        //const currentClick = this.props.singleClick;
        /* if (currentClick && currentClick != prevClick) {
            this.id && this.props.removeMapClickResult(this.id);
            this.props.showMapClickResult({
                coordinate: currentClick.coordinate
            }, id => this.id = id);
        } */
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
/******/ 	__webpack_require__.h = () => ("2d729df5eca76951cc65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iM2NjZmFiNmJlMWI3OWZhZGZkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzBCO0FBQ1k7QUFDK0I7QUFBQSxJQUcvREksaUJBQWlCLDBCQUFBQyxnQkFBQTtFQUNuQixTQUFBRCxrQkFBWUUsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsaUJBQUE7SUFBQSxPQUFBSSxVQUFBLE9BQUFKLGlCQUFBLEdBQ1RFLEtBQUs7RUFDZjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtFQUhJRyxTQUFBLENBQUFMLGlCQUFBLEVBQUFDLGdCQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixpQkFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBQyxrQkFBa0JBLENBQUEsRUFBRztNQUFBLElBQUFDLEtBQUE7TUFDakIsSUFBSSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUSxFQUFFO1FBQ3JCLElBQUksQ0FBQ0MsRUFBRSxJQUFJLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxtQkFBbUIsQ0FBQyxJQUFJLENBQUNELEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUNWLEtBQUssRUFBQ1ksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBQ0YsRUFBRTtVQUFBLE9BQU1GLEtBQUksQ0FBQ0UsRUFBRSxHQUFHQSxFQUFFO1FBQUEsQ0FBQyxDQUFDO1FBQ3hEO1FBQ0E7UUFDQTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDUSxDQUFDLE1BQ0k7UUFDRCxJQUFJLENBQUNBLEVBQUUsSUFBSSxJQUFJLENBQUNWLEtBQUssQ0FBQ1csbUJBQW1CLENBQUMsSUFBSSxDQUFDRCxFQUFFLENBQUM7TUFDdEQ7SUFDSjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFPLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBQztJQUNwQztFQUFDO0lBQUFYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFXLE1BQU1BLENBQUEsRUFBRztNQUNMLE9BQU8sSUFBSTtJQUNmO0VBQUM7QUFBQSxFQWpDMkJ2Qix3REFBZTtBQW9DL0MsSUFBTXlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFFQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIQyxXQUFXLEVBQUUxQiw4REFBaUIsQ0FBQzJCLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRUgsS0FBSyxFQUFFQyxRQUFRLENBQUNHLFNBQVM7RUFDaEcsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRLEVBQUs7RUFDckMsT0FBTztJQUNIQyxrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFHM0IsS0FBSyxFQUFFNEIsS0FBSztNQUFBLE9BQUtGLFFBQVEsQ0FBQzdCLDREQUFlLENBQUNnQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFN0IsS0FBSyxFQUFFNEIsS0FBSyxDQUFDLENBQUM7SUFBQTtJQUNoSkUsb0JBQW9CLEVBQUUsU0FBdEJBLG9CQUFvQkEsQ0FBR3BCLEVBQUU7TUFBQSxPQUFLZ0IsUUFBUSxDQUFDN0IsNERBQWUsQ0FBQ2dDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbkIsRUFBRSxDQUFDLENBQUM7SUFBQTtFQUNuRyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlZixvREFBTyxDQUFDd0IsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDM0IsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDL0Q5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2svTWFwQ2xpY2suY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gQW4gZXhhbXBsZSBvZiBhIHBsdWdpbiB0aGF0IGxpc3RlbnMgdG8gYW5vdGhlciBcclxuICogICAgcGx1Z2luJ3Mgc3RhdGUgY2hhbmdlcyAoTWFwIHBsdWdpbiksIGFuZCBsb2cgdGhhdCBzdGF0ZS5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gJ0BwZW50YS1iL21hLWxpYic7XHJcblxyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNjcmlwdGlvbjogXHJcbiAgICAgKiAgLSBSZWFjdCBsaWZlY3ljbGUgbWV0aG9kLCBoZXJlIHdlIGNoZWNrIGZvciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZVRyaWdnZXJSZXN1bHQodGhpcy5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMsc2hvd1RyaWdnZXJSZXN1bHQoe30sIChpZCkgPT4gKHRoaXMuaWQgPSBpZCkpO1xyXG4gICAgICAgICAgICAvL2NvbnN0IHByZXZDbGljayA9IHByZXZQcm9wcy5zaW5nbGVDbGljaztcclxuICAgICAgICAgICAgLy9jb25zdCBjdXJyZW50Q2xpY2sgPSB0aGlzLnByb3BzLnNpbmdsZUNsaWNrO1xyXG4gICAgICAgICAgICAvKiBpZiAoY3VycmVudENsaWNrICYmIGN1cnJlbnRDbGljayAhPSBwcmV2Q2xpY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVNYXBDbGlja1Jlc3VsdCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KHtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlOiBjdXJyZW50Q2xpY2suY29vcmRpbmF0ZVxyXG4gICAgICAgICAgICAgICAgfSwgaWQgPT4gdGhpcy5pZCA9IGlkKTtcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZVRyaWdnZXJSZXN1bHQodGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaW5nbGVDbGljazogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoJ3NlbGVjdE1hcFNpbmdsZUNsaWNrJywgc3RhdGUsIG93blByb3BzLnJlZHVjZXJJZClcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ01hcENsaWNrUmVzdWx0JywgcHJvcHMsIG9uQWRkKSksXHJcbiAgICAgICAgcmVtb3ZlTWFwQ2xpY2tSZXN1bHQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJkNzI5ZGY1ZWNhNzY5NTFjYzY1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfdGhpcyIsImlzQWN0aXZlIiwiaWQiLCJyZW1vdmVUcmlnZ2VyUmVzdWx0Iiwic2hvd1RyaWdnZXJSZXN1bHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsInJlbmRlciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJvbkFkZCIsImdldEFjdGlvbkNyZWF0b3IiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=