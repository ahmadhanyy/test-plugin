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
      isActive: false,
      btnText: "Add Point"
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
        console.log("new Feature : ", newFeat);
        //console.log("LAYER : ", LAYER);

        _this2.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            console.log("clear is working");
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false,
              btnText: "Add Point"
            }));
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: true,
            btnText: "Save"
          }));
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
          _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: false,
            btnText: "Add Point"
          }));
          console.log("AddFormID on remove", _this2.AddFormID);
        });
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
      };
      if (this.state.isActive) {
        notify(t("Add Point OFF"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.unsubscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: false,
          btnText: "Add Point"
        }));
      } else {
        notify(t("Add Point ON"), "info");
        _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.subscribe("selectMapSingleClick", _handleMapClick);
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          isActive: true,
          btnText: "Save"
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        onClick: this.openForm
      }, this.state.btnText);
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAddForm: function showAddForm(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'Form', props, onAdd, onRemove));
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
/******/ 	__webpack_require__.h = () => ("c409da61aa9bbbc95649")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMDM5NzQ1NjFiNGEyYjA5YzMyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0RQLEtBQUEsQ0FBS1EsU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUixLQUFBO0VBQzFCO0VBQUNTLFNBQUEsQ0FBQVosVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFZLFlBQUEsQ0FBQWIsVUFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVCxRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBVSxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNmLEtBQUs7UUFBL0JnQixDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxNQUFNLEdBQUFGLFdBQUEsQ0FBTkUsTUFBTTtRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUV4QixJQUFNQyxlQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLE1BQU0sRUFBSztRQUMvQixJQUFNQyxPQUFPLEdBQUc7VUFDWkMsSUFBSSxFQUFFLFNBQVM7VUFDZkMsUUFBUSxFQUFFO1lBQ05ELElBQUksRUFBRSxPQUFPO1lBQ2JFLFdBQVcsRUFBRUosTUFBTSxDQUFDSztVQUN4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QUFJLENBQUNuQztNQUFTLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNFLE9BQWEsQ0FBQztJQUNsRTtFQUFDO0FBQUEsRUF4Rm9CakIsd0RBQWU7QUEyRnhDLElBQU1rRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUluQyxLQUFLLEVBQUVvQyxRQUFRLEVBQUs7RUFDekMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUSxFQUFLO0VBQ3JDLE9BQU87SUFDSGQsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUc5QixLQUFLLEVBQUU2QyxLQUFLLEVBQUVDLFFBQVE7TUFBQSxPQUFLRixRQUFRLENBQUNsRCw0REFBZSxDQUFDcUQsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUvQyxLQUFLLEVBQUU2QyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbkpkLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR0wsRUFBRTtNQUFBLE9BQUtpQixRQUFRLENBQUNsRCw0REFBZSxDQUFDcUQsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUVwQixFQUFFLENBQUMsQ0FBQztJQUFBO0lBQzFGVixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBRytCLEdBQUcsRUFBRTFCLElBQUk7TUFBQSxPQUFLc0IsUUFBUSxDQUFDaEQsc0VBQXFCLENBQUNvRCxHQUFHLEVBQUUxQixJQUFJLENBQUMsQ0FBQztJQUFBO0VBQ3JFLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWU5QixvREFBTyxDQUFDaUQsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDaEQsNkRBQVksQ0FBQ0csVUFBVSxDQUFDLEVBQUVELHdFQUFzQixDQUFDOzs7Ozs7OztVQzVHN0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCB3aXRoTG9jYWxpemUsIHN5c3RlbUFkZE5vdGlmaWNhdGlvbiB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY2xhc3MgRm9ybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9wZW5Gb3JtID0gdGhpcy5vcGVuRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuVGV4dDogXCJBZGQgUG9pbnRcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQWRkRm9ybUlEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHQsIG5vdGlmeSwgTEFZRVIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1hcENsaWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGZWF0ID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLmNvb3JkaW5hdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxMjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3IEZlYXR1cmUgOiBcIiwgbmV3RmVhdCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMQVlFUiA6IFwiLCBMQVlFUik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dBZGRGb3JtKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZlYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgTEFZRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhciBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRleHQ6IFwiQWRkIFBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkFkZCBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5UZXh0OiBcIlNhdmVcIixcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiBhZGRcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uUmVtb3ZlIGlzIHdvcmtpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRleHQ6IFwiQWRkIFBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRGb3JtSUQgb24gcmVtb3ZlXCIsIHRoaXMuQWRkRm9ybUlEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPRkZcIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkudW5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJ0blRleHQ6IFwiQWRkIFBvaW50XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm90aWZ5KHQoXCJBZGQgUG9pbnQgT05cIiksIFwiaW5mb1wiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzUmVnaXN0cnkuc3Vic2NyaWJlKFwic2VsZWN0TWFwU2luZ2xlQ2xpY2tcIiwgaGFuZGxlTWFwQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ0blRleHQ6IFwiU2F2ZVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8bGkgb25DbGljaz17dGhpcy5vcGVuRm9ybX0+eyB0aGlzLnN0YXRlLmJ0blRleHQgfTwvbGk+O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvd0FkZEZvcm06IChwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdGb3JtJywgcHJvcHMsIG9uQWRkLCBvblJlbW92ZSkpLFxyXG4gICAgICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcihcInJlbW92ZUNvbXBvbmVudFwiLCBpZCkpLFxyXG4gICAgICAgIG5vdGlmeTogKG1zZywgdHlwZSkgPT4gZGlzcGF0Y2goc3lzdGVtQWRkTm90aWZpY2F0aW9uKG1zZywgdHlwZSkpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhMb2NhbGl6ZShGb3JtQnV0dG9uKSwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzQwOWRhNjFhYTliYmJjOTU2NDlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0Iiwic2VsZWN0b3JzUmVnaXN0cnkiLCJhY3Rpb25zUmVnaXN0cnkiLCJ3aXRoTG9jYWxpemUiLCJzeXN0ZW1BZGROb3RpZmljYXRpb24iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiRm9ybUJ1dHRvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIm9wZW5Gb3JtIiwiYmluZCIsInN0YXRlIiwiaXNBY3RpdmUiLCJidG5UZXh0IiwiQWRkRm9ybUlEIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInQiLCJub3RpZnkiLCJMQVlFUiIsImhhbmRsZU1hcENsaWNrIiwiY29vcmRzIiwibmV3RmVhdCIsInR5cGUiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZSIsInByb3BlcnRpZXMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzaG93QWRkRm9ybSIsImNsZWFyIiwicmVtb3ZlQ29tcG9uZW50Iiwic2V0U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=