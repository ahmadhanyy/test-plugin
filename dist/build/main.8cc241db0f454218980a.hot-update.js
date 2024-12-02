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
        _this2.props.showAddForm({
          newFeat: newFeat,
          LAYER: LAYER,
          clear: function clear() {
            console.log("clear is working");
            _this2.AddFormID && _this2.props.removeComponent(_this2.AddFormID);
            _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
              isActive: false
            }));
          }
        }, function (id) {
          console.log("onAdd is working");
          _this2.AddFormID = id;
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            isActive: true
          }));
          console.log("AddFormID on add", _this2.AddFormID);
        }, function () {
          console.log("onRemove is working");
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
  return {
    singleClick: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector("selectMapSingleClick", state, ownProps.reducerId)
  };
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
/******/ 	__webpack_require__.h = () => ("60790f28bda41fc554fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44Y2MyNDFkYjBmNDU0MjE4OTgwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ29FO0FBQ3ZDO0FBQUEsSUFFN0RPLFVBQVUsMEJBQUFDLGdCQUFBO0VBQ1osU0FBQUQsV0FBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFKLFVBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLFVBQUEsR0FBTUUsS0FBSztJQUNYQyxLQUFBLENBQUtHLFFBQVEsR0FBR0gsS0FBQSxDQUFLRyxRQUFRLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDO0lBQ3hDQSxLQUFBLENBQUtLLEtBQUssR0FBRztNQUNUQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0RQLEtBQUEsQ0FBS1EsU0FBUyxHQUFHLElBQUk7SUFBQyxPQUFBUixLQUFBO0VBQzFCO0VBQUNTLFNBQUEsQ0FBQVosVUFBQSxFQUFBQyxnQkFBQTtFQUFBLE9BQUFZLFlBQUEsQ0FBQWIsVUFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVCxRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBVSxNQUFBO01BQ1AsSUFBQUMsV0FBQSxHQUE2QixJQUFJLENBQUNmLEtBQUs7UUFBL0JnQixDQUFDLEdBQUFELFdBQUEsQ0FBREMsQ0FBQztRQUFFQyxNQUFNLEdBQUFGLFdBQUEsQ0FBTkUsTUFBTTtRQUFFQyxLQUFLLEdBQUFILFdBQUEsQ0FBTEcsS0FBSztNQUV4QixJQUFNQyxlQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLE1BQU0sRUFBSztRQUMvQixJQUFNQyxPQUFPLEdBQUc7VUFDWkMsSUFBSSxFQUFFLFNBQVM7VUFDZkMsUUFBUSxFQUFFO1lBQ05ELElBQUksRUFBRSxPQUFPO1lBQ2JFLFdBQVcsRUFBRUosTUFBTSxDQUFDSztVQUN4QixDQUFDO1VBQ0RDLFVBQVUsRUFBRTtZQUNSQyxFQUFFLEVBQUU7VUFDUjtRQUNKLENBQUM7UUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVSLE9BQU8sQ0FBQztRQUV0Q1AsTUFBSSxDQUFDZCxLQUFLLENBQUM4QixXQUFXLENBQ2xCO1VBQ0lULE9BQU8sRUFBUEEsT0FBTztVQUNQSCxLQUFLLEVBQUxBLEtBQUs7VUFDTGEsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQUEsRUFBUTtZQUNUSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztZQUMvQmYsTUFBSSxDQUFDTCxTQUFTLElBQUlLLE1BQUksQ0FBQ2QsS0FBSyxDQUFDZ0MsZUFBZSxDQUFDbEIsTUFBSSxDQUFDTCxTQUFTLENBQUM7WUFDNURLLE1BQUksQ0FBQ21CLFFBQVEsQ0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ05wQixNQUFJLENBQUNSLEtBQUs7Y0FDYkMsUUFBUSxFQUFFO1lBQUssRUFDbEIsQ0FBQztVQUNOO1FBQ0osQ0FBQyxFQUNELFVBQUNvQixFQUFFLEVBQUs7VUFDSkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7VUFDL0JmLE1BQUksQ0FBQ0wsU0FBUyxHQUFHa0IsRUFBRTtVQUNuQmIsTUFBSSxDQUFDbUIsUUFBUSxDQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDTnBCLE1BQUksQ0FBQ1IsS0FBSztZQUNiQyxRQUFRLEVBQUU7VUFBSSxFQUNqQixDQUFDO1VBQ0ZxQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRWYsTUFBSSxDQUFDTCxTQUFTLENBQUM7UUFDbkQsQ0FBQyxFQUNELFlBQU07VUFDRm1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1VBQ2xDZixNQUFJLENBQUNMLFNBQVMsSUFBSUssTUFBSSxDQUFDZCxLQUFLLENBQUNnQyxlQUFlLENBQUNsQixNQUFJLENBQUNMLFNBQVMsQ0FBQztVQUM1REssTUFBSSxDQUFDbUIsUUFBUSxDQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDTnBCLE1BQUksQ0FBQ1IsS0FBSztZQUNiQyxRQUFRLEVBQUU7VUFBSyxFQUNsQixDQUFDO1VBQ0ZxQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRWYsTUFBSSxDQUFDTCxTQUFTLENBQUM7UUFDdEQsQ0FDSixDQUFDO1FBQ0RoQiw4REFBaUIsQ0FBQzBDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRWhCLGVBQWMsQ0FBQztNQUN6RSxDQUFDO01BRUQsSUFBRyxJQUFJLENBQUNiLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO1FBQ3BCVSxNQUFNLENBQUNELENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDbEN2Qiw4REFBaUIsQ0FBQzBDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRWhCLGVBQWMsQ0FBQztRQUNyRSxJQUFJLENBQUNjLFFBQVEsQ0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ04sSUFBSSxDQUFDNUIsS0FBSztVQUNiQyxRQUFRLEVBQUUsS0FBSztVQUNmQyxPQUFPLEVBQUU7UUFBVyxFQUN2QixDQUFDO01BQ04sQ0FBQyxNQUNJO1FBQ0RTLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUNqQ3ZCLDhEQUFpQixDQUFDMkMsU0FBUyxDQUFDLHNCQUFzQixFQUFFakIsZUFBYyxDQUFDO1FBQ25FLElBQUksQ0FBQ2MsUUFBUSxDQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDTixJQUFJLENBQUM1QixLQUFLO1VBQ2JDLFFBQVEsRUFBRSxJQUFJO1VBQ2RDLE9BQU8sRUFBRTtRQUFNLEVBQ2xCLENBQUM7TUFDTjtJQUNKO0VBQUM7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdCLE1BQU1BLENBQUEsRUFBRztNQUNMLG9CQUFPOUMsMERBQUE7UUFBSWdELE9BQU8sRUFBRSxJQUFJLENBQUNuQztNQUFTLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNFLE9BQWEsQ0FBQztJQUNsRTtFQUFDO0FBQUEsRUFwRm9CakIsd0RBQWU7QUF1RnhDLElBQU1rRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUluQyxLQUFLLEVBQUVvQyxRQUFRLEVBQUs7RUFDekMsT0FBTztJQUNIQyxXQUFXLEVBQUVsRCw4REFBaUIsQ0FBQ21ELFdBQVcsQ0FDdEMsc0JBQXNCLEVBQ3RCdEMsS0FBSyxFQUNMb0MsUUFBUSxDQUFDRyxTQUNiO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJQyxRQUFRLEVBQUs7RUFDckMsT0FBTztJQUNIakIsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUc5QixLQUFLLEVBQUVnRCxLQUFLLEVBQUVDLFFBQVE7TUFBQSxPQUFLRixRQUFRLENBQUNyRCw0REFBZSxDQUFDd0QsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUVsRCxLQUFLLEVBQUVnRCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO0lBQUE7SUFDbkpqQixlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUdMLEVBQUU7TUFBQSxPQUFLb0IsUUFBUSxDQUFDckQsNERBQWUsQ0FBQ3dELGdCQUFnQixDQUFDLGlCQUFpQixFQUFFdkIsRUFBRSxDQUFDLENBQUM7SUFBQTtJQUMxRlYsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUdrQyxHQUFHLEVBQUU3QixJQUFJO01BQUEsT0FBS3lCLFFBQVEsQ0FBQ25ELHNFQUFxQixDQUFDdUQsR0FBRyxFQUFFN0IsSUFBSSxDQUFDLENBQUM7SUFBQTtFQUNyRSxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlOUIsb0RBQU8sQ0FBQ2lELGVBQWUsRUFBRUssa0JBQWtCLENBQUMsQ0FBQ25ELDZEQUFZLENBQUNHLFVBQVUsQ0FBQyxFQUFFRCx3RUFBc0IsQ0FBQzs7Ozs7Ozs7VUM5RzdHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSwgd2l0aExvY2FsaXplLCBzeXN0ZW1BZGROb3RpZmljYXRpb24gfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNsYXNzIEZvcm1CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRm9ybSA9IHRoaXMub3BlbkZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6IFwiQWRkIFBvaW50XCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkFkZEZvcm1JRCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZvcm0oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0LCBub3RpZnksIExBWUVSIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNYXBDbGljayA9IChjb29yZHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmVhdCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb29yZGluYXRlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTIzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBGZWF0dXJlIDogXCIsIG5ld0ZlYXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QWRkRm9ybShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGZWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIExBWUVSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRGb3JtSUQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkFkZCBpcyB3b3JraW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkRm9ybUlEID0gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkRm9ybUlEIG9uIGFkZFwiLCB0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25SZW1vdmUgaXMgd29ya2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZEZvcm1JRCAmJiB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCh0aGlzLkFkZEZvcm1JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZEZvcm1JRCBvbiByZW1vdmVcIiwgdGhpcy5BZGRGb3JtSUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeSh0KFwiQWRkIFBvaW50IE9GRlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS51bnN1YnNjcmliZShcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsIGhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnRuVGV4dDogXCJBZGQgUG9pbnRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub3RpZnkodChcIkFkZCBQb2ludCBPTlwiKSwgXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnNSZWdpc3RyeS5zdWJzY3JpYmUoXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLCBoYW5kbGVNYXBDbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYnRuVGV4dDogXCJTYXZlXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW5Gb3JtfT57IHRoaXMuc3RhdGUuYnRuVGV4dCB9PC9saT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2luZ2xlQ2xpY2s6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKFxyXG4gICAgICAgICAgICBcInNlbGVjdE1hcFNpbmdsZUNsaWNrXCIsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBvd25Qcm9wcy5yZWR1Y2VySWRcclxuICAgICAgICApLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93QWRkRm9ybTogKHByb3BzLCBvbkFkZCwgb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3Rlc3QtcGx1Z2luJywgJ0Zvcm0nLCBwcm9wcywgb25BZGQsIG9uUmVtb3ZlKSksXHJcbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKFwicmVtb3ZlQ29tcG9uZW50XCIsIGlkKSksXHJcbiAgICAgICAgbm90aWZ5OiAobXNnLCB0eXBlKSA9PiBkaXNwYXRjaChzeXN0ZW1BZGROb3RpZmljYXRpb24obXNnLCB0eXBlKSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aExvY2FsaXplKEZvcm1CdXR0b24pLCBMT0NBTElaQVRJT05fTkFNRVNQQUNFKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MDc5MGYyOGJkYTQxZmM1NTRmZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsIndpdGhMb2NhbGl6ZSIsInN5c3RlbUFkZE5vdGlmaWNhdGlvbiIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJGb3JtQnV0dG9uIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwib3BlbkZvcm0iLCJiaW5kIiwic3RhdGUiLCJpc0FjdGl2ZSIsImJ0blRleHQiLCJBZGRGb3JtSUQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidCIsIm5vdGlmeSIsIkxBWUVSIiwiaGFuZGxlTWFwQ2xpY2siLCJjb29yZHMiLCJuZXdGZWF0IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwicHJvcGVydGllcyIsImlkIiwiY29uc29sZSIsImxvZyIsInNob3dBZGRGb3JtIiwiY2xlYXIiLCJyZW1vdmVDb21wb25lbnQiLCJzZXRTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJzaW5nbGVDbGljayIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsIm9uUmVtb3ZlIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=