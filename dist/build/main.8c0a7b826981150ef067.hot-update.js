"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/FormButton/index.js":
/*!********************************************!*\
  !*** ./src/components/FormButton/index.js ***!
  \********************************************/
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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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




var FormButton = /*#__PURE__*/function (_React$Component) {
  function FormButton(props) {
    var _this;
    _classCallCheck(this, FormButton);
    _this = _callSuper(this, FormButton, [props]);
    _this.openForm = _this.openForm.bind(_this);
    _this.state = {
      isActive: false
    };
    _this.AddFormID = null;
    return _this;
  }
  _inherits(FormButton, _React$Component);
  return _createClass(FormButton, [{
    key: "openForm",
    value: function openForm() {
      var _this2 = this;
      var _this$props = this.props,
        t = _this$props.t,
        notify = _this$props.notify,
        LAYER = _this$props.LAYER;
      var _handleMapClick = function handleMapClick(coords) {
        var newFeat = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: coords.coordinate
          },
          properties: {
            id: 123
          }
        };
        _this2.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false
            }));
          }
        }, function (id) {
          _this2.AddFormID = id;
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: true
          }));
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: false
          }));
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: !this.state.isActive
        }));
        console.log("state : ", this.state.isActive);
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: !this.state.isActive
        }));
        console.log("state : ", this.state.isActive);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        onClick: this.openForm
      }, "Add Point");
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAddForm: function showAddForm(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator("showComponent", _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE, "Form", props, onAdd, onRemove));
    },
    removeComponent: function removeComponent(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator("removeComponent", id));
    },
    notify: function notify(msg, type) {
      return dispatch((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.systemAddNotification)(msg, type));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.withLocalize)(FormButton), _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a02aef2a1e89ae7c18d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YzBhN2I4MjY5ODExNTBlZjA2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0ROLEtBQUEsQ0FBS08sU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUCxLQUFBO0VBQzFCO0VBQUNRLFNBQUEsQ0FBQVgsVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFXLFlBQUEsQ0FBQVosVUFBQTtJQUFBYSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBUyxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNkLEtBQUs7UUFBL0JlLENBQUMsR0FBQUQsV0FBQSxDQUFEQyxDQUFDO1FBQUVDLE1BQU0sR0FBQUYsV0FBQSxDQUFORSxNQUFNO1FBQUVDLEtBQUssR0FBQUgsV0FBQSxDQUFMRyxLQUFLO01BRXhCLElBQU1DLGVBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsTUFBTSxFQUFLO1FBQy9CLElBQU1DLE9BQU8sR0FBRztVQUNaQyxJQUFJLEVBQUUsU0FBUztVQUNmQyxRQUFRLEVBQUU7WUFDTkQsSUFBSSxFQUFFLE9BQU87WUFDYkUsV0FBVyxFQUFFSixNQUFNLENBQUNLO1VBQ3hCLENBQUM7VUFDREMsVUFBVSxFQUFFO1lBQ1JDLEVBQUUsRUFBRTtVQUNSO1FBQ0osQ0FBQztRQUVEYixNQUFJLENBQUNiLEtBQUssQ0FBQzJCLFdBQVcsQ0FDbEI7VUFDSVAsT0FBTyxFQUFQQSxPQUFPO1VBQ1BILEtBQUssRUFBTEEsS0FBSztVQUNMVyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBQSxFQUFRO1lBQ1RmLE1BQUksQ0FBQ0wsU0FBUyxJQUFJSyxNQUFJLENBQUNiLEtBQUssQ0FBQzZCLGVBQWUsQ0FBQ2hCLE1BQUksQ0FBQ0wsU0FBUyxDQUFDO1lBQzVESyxNQUFJLENBQUNpQixRQUFRLENBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNObEIsTUFBSSxDQUFDUCxLQUFLO2NBQ2JDLFFBQVEsRUFBRTtZQUFLLEVBQ2xCLENBQUM7VUFDTjtRQUNKLENBQUMsRUFDRCxVQUFDbUIsRUFBRSxFQUFLO1VBQ0piLE1BQUksQ0FBQ0wsU0FBUyxHQUFHa0IsRUFBRTtVQUNuQmIsTUFBSSxDQUFDaUIsUUFBUSxDQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDTmxCLE1BQUksQ0FBQ1AsS0FBSztZQUNiQyxRQUFRLEVBQUU7VUFBSSxFQUNqQixDQUFDO1VBQ0Z5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRXBCLE1BQUksQ0FBQ0wsU0FBUyxDQUFDO1FBQ25ELENBQUMsRUFDRCxZQUFNO1VBQ0ZLLE1BQUksQ0FBQ0wsU0FBUyxJQUFJSyxNQUFJLENBQUNiLEtBQUssQ0FBQzZCLGVBQWUsQ0FBQ2hCLE1BQUksQ0FBQ0wsU0FBUyxDQUFDO1VBQzVESyxNQUFJLENBQUNpQixRQUFRLENBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNObEIsTUFBSSxDQUFDUCxLQUFLO1lBQ2JDLFFBQVEsRUFBRTtVQUFLLEVBQ2xCLENBQUM7VUFDRnlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFcEIsTUFBSSxDQUFDTCxTQUFTLENBQUM7UUFDdEQsQ0FDSixDQUFDO1FBQ0RmLDhEQUFpQixDQUFDeUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFaEIsZUFBYyxDQUFDO01BQ3pFLENBQUM7TUFFRCxJQUFHLElBQUksQ0FBQ1osS0FBSyxDQUFDQyxRQUFRLEVBQUU7UUFDcEJTLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUNsQ3RCLDhEQUFpQixDQUFDeUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFaEIsZUFBYyxDQUFDO1FBQ3JFLElBQUksQ0FBQ1ksUUFBUSxDQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDTixJQUFJLENBQUN6QixLQUFLO1VBQ2JDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQ0QsS0FBSyxDQUFDQztRQUFRLEVBQ2pDLENBQUM7UUFDRnlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMzQixLQUFLLENBQUNDLFFBQVEsQ0FBQztNQUNoRCxDQUFDLE1BQ0k7UUFDRFMsTUFBTSxDQUFDRCxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ2pDdEIsOERBQWlCLENBQUMwQyxTQUFTLENBQUMsc0JBQXNCLEVBQUVqQixlQUFjLENBQUM7UUFDbkUsSUFBSSxDQUFDWSxRQUFRLENBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNOLElBQUksQ0FBQ3pCLEtBQUs7VUFDYkMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUNDO1FBQVEsRUFDakMsQ0FBQztRQUNGeUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO01BQ2hEO0lBQ0o7RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0IsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsb0JBQU83QywwREFBQTtRQUFJK0MsT0FBTyxFQUFFLElBQUksQ0FBQ2xDO01BQVMsR0FBQyxXQUFhLENBQUM7SUFDckQ7RUFBQztBQUFBLEVBL0VvQmIsd0RBQWU7QUFrRnhDLElBQU1pRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlsQyxLQUFLLEVBQUVtQyxRQUFRLEVBQUs7RUFDekMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3JDLE9BQU87SUFDSGhCLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFHM0IsS0FBSyxFQUFFNEMsS0FBSyxFQUFFQyxRQUFRO01BQUEsT0FDaENGLFFBQVEsQ0FBQ2pELDREQUFlLENBQUNvRCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUVqRCx3RUFBc0IsRUFBRSxNQUFNLEVBQUVHLEtBQUssRUFBRTRDLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7SUFBQTtJQUN2SGhCLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0gsRUFBRTtNQUFBLE9BQUtpQixRQUFRLENBQUNqRCw0REFBZSxDQUFDb0QsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVwQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQzFGVixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRytCLEdBQUcsRUFBRTFCLElBQUk7TUFBQSxPQUFLc0IsUUFBUSxDQUFDL0Msc0VBQXFCLENBQUNtRCxHQUFHLEVBQUUxQixJQUFJLENBQUMsQ0FBQztJQUFBO0VBQ3JFLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWU3QixvREFBTyxDQUFDZ0QsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDL0MsNkRBQVksQ0FBQ0csVUFBVSxDQUFDLEVBQUVELHdFQUFzQixDQUFDOzs7Ozs7OztVQ3BHN0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCB3aXRoTG9jYWxpemUsIHN5c3RlbUFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgRm9ybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wZW5Gb3JtID0gdGhpcy5vcGVuRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQWRkRm9ybUlEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHQsIG5vdGlmeSwgTEFZRVIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1hcENsaWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGZWF0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLmNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dBZGRGb3JtKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZlYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgTEFZRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gYWRkXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gcmVtb3ZlXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPRkZcIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgOiBcIiwgdGhpcy5zdGF0ZS5pc0FjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMub3BlbkZvcm19PkFkZCBQb2ludDwvbGk+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0FkZEZvcm06IChwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSA9PiBcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoXCJzaG93Q29tcG9uZW50XCIsIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UsIFwiRm9ybVwiLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICAgICAgbm90aWZ5OiAobXNnLCB0eXBlKSA9PiBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24obXNnLCB0eXBlKSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aExvY2FsaXplKEZvcm1CdXR0b24pLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YTAyYWVmMmExZTg5YWU3YzE4ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIndpdGhMb2NhbGl6ZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJGb3JtQnV0dG9uIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwib3BlbkZvcm0iLCJiaW5kIiwic3RhdGUiLCJpc0FjdGl2ZSIsIkFkZEZvcm1JRCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0Iiwibm90aWZ5IiwiTEFZRVIiLCJoYW5kbGVNYXBDbGljayIsImNvb3JkcyIsIm5ld0ZlYXQiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImNvb3JkaW5hdGUiLCJwcm9wZXJ0aWVzIiwiaWQiLCJzaG93QWRkRm9ybSIsImNsZWFyIiwicmVtb3ZlQ29tcG9uZW50Iiwic2V0U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiY29uc29sZSIsImxvZyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9