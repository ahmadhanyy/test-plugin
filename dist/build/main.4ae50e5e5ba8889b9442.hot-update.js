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

  /*   componentDidUpdate(prevProps) {
        if (this.props.isActive && prevProps.isActive != this.props.isActive) {
              // Show the MapClickResult only if it hasn't been shown yet
              this.props.showMapClickResult({
                  removeCurrentComponent: this.removeCurrentComponent,  // Pass as a prop
              },
              (id) => {
                  this.id = id;  // Save the component ID to ensure it's shown once
              });
              console.log("the id when showing : ", this.id);
          } 
          else if (!this.props.isActive) {
              this.id && this.props.removeComponent(this.id);
              //this.props.removeComponent(this.currentCID);
              //this.currentCID = null;
              console.log("the id when removing : ", this.id);
          }
      } */
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;
      if (this.props.isActive) {
        // Show the MapClickResult only if it hasn't been shown yet
        this.props.showMapClickResult({
          removeCurrentComponent: this.removeCurrentComponent // Pass as a prop
        }, function (id) {
          _this2.id = id; // Save the component ID to ensure it's shown once
        });
        console.log("the id when showing : ", this.id);
      } else if (!this.props.isActive) {
        this.id && this.props.removeComponent(this.id);
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
/******/ 	__webpack_require__.h = () => ("5585e6936381c9b3ad5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsT0FBS0YsUUFBUSxDQUFDaEMsNERBQWUsQ0FBQ21DLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUVoQyxLQUFLLEVBQUU4QixLQUFLLEVBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbEtFLG9CQUFvQixFQUFFLFNBQXRCQSxvQkFBb0JBLENBQUduQixFQUFFO01BQUEsT0FBS2UsUUFBUSxDQUFDaEMsNERBQWUsQ0FBQ21DLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbEIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMvRkcsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFHSCxFQUFFO01BQUEsT0FBS2UsUUFBUSxDQUFDaEMsNERBQWUsQ0FBQ21DLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFbEIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMxRm9CLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHQyxPQUFPLEVBQUVDLElBQUksRUFBSztNQUN2QlAsUUFBUSxDQUFDUSxxQkFBcUIsQ0FBQztRQUFFRixPQUFPLEVBQVBBLE9BQU87UUFBRUMsSUFBSSxFQUFKQTtNQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3REO0VBRUYsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZXpDLG9EQUFPLENBQUMyQixlQUFlLEVBQUVNLGtCQUFrQixDQUFDLENBQUM5QixpQkFBaUIsQ0FBQzs7Ozs7Ozs7VUN0RjlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5IH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAvL3RoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQgPSB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4vKiAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUgJiYgcHJldlByb3BzLmlzQWN0aXZlICE9IHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBzaG93biB5ZXRcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ3VycmVudENvbXBvbmVudDogdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LCAgLy8gUGFzcyBhcyBhIHByb3BcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gaWQ7ICAvLyBTYXZlIHRoZSBjb21wb25lbnQgSUQgdG8gZW5zdXJlIGl0J3Mgc2hvd24gb25jZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgaWQgd2hlbiBzaG93aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgLy90aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlkIHdoZW4gcmVtb3ZpbmcgOiBcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBzaG93biB5ZXRcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ3VycmVudENvbXBvbmVudDogdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LCAgLy8gUGFzcyBhcyBhIHByb3BcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gaWQ7ICAvLyBTYXZlIHRoZSBjb21wb25lbnQgSUQgdG8gZW5zdXJlIGl0J3Mgc2hvd24gb25jZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgaWQgd2hlbiBzaG93aW5nIDogXCIsIHRoaXMuaWQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmlkKTtcclxuICAgICAgICAgICAgLy90aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGlkIHdoZW4gcmVtb3ZpbmcgOiBcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUN1cnJlbnRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5pZCk7XHJcbiAgICAgICAgLy90aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLmN1cnJlbnRDSUQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTWFwQ2xpY2tDb21wb25lbnQgbW91bnRlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3RvcihcclxuICAgICAgXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgb3duUHJvcHMucmVkdWNlcklkXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCxvblJlbW92ZSkpLFxyXG4gICAgcmVtb3ZlTWFwQ2xpY2tSZXN1bHQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICBub3RpZnk6IChtZXNzYWdlLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKHsgbWVzc2FnZSwgdHlwZSB9KSk7XHJcbiAgICB9LFxyXG4gIFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU1ODVlNjkzNjM4MWM5YjNhZDVkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJyZW1vdmVDdXJyZW50Q29tcG9uZW50IiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiX3RoaXMyIiwiaXNBY3RpdmUiLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInNldHRpbmdzIiwicmVuZGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInNpbmdsZUNsaWNrIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwib25SZW1vdmUiLCJnZXRBY3Rpb25DcmVhdG9yIiwicmVtb3ZlTWFwQ2xpY2tSZXN1bHQiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=