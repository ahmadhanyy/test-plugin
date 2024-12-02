"use strict";
self["webpackHotUpdatetest_plugin"]("main",{

/***/ "./src/components/FormComponent/index.js":
/*!***********************************************!*\
  !*** ./src/components/FormComponent/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @penta-b/mna-penta-smart-forms */ "./node_modules/@penta-b/mna-penta-smart-forms/dist/build/Form-Builder-mna0.0.1.js");
/* harmony import */ var _penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _selectors_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/index */ "./src/selectors/index.js");
/* harmony import */ var _services_addServive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/addServive */ "./src/services/addServive.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
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







var FormComponent = /*#__PURE__*/function (_React$Component) {
  function FormComponent() {
    _classCallCheck(this, FormComponent);
    return _callSuper(this, FormComponent, arguments);
  }
  _inherits(FormComponent, _React$Component);
  return _createClass(FormComponent, [{
    key: "render",
    value:
    /*     constructor(props) {
            super(props);
            //this.formData = {};
            this.OnSubmit = this.OnSubmit.bind(this);
        }
    
        OnSubmit() {
            //console.log(this.formData);
        } */

    function render() {
      //console.log(this.props);
      //const schema = this.props.LAYER.basicSettings.ADD_FORM;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          padding: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__.Form
      //schema={schema}
      //data={this.formData}
      , {
        namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "penta-container-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "penta-button penta-main-button"
        //onClick={this.OnSubmit}
      }, "Add new point")));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormComponent);

/*
class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.formData = {};
        this.OnSubmit = this.OnSubmit.bind(this);
        console.log("form component");
    }

    OnSubmit() {
        const { newFeat, LAYER, clear } = this.props;
        console.log(this.formData);
        newFeat.properties = {
            ...newFeat.properties,
            ...this.formData,
        };
        const featureCollection = {
            type: "FeatureCollection",
            features: [{ ...newFeat }],
        };
        const queryBody = [
            {
                dataSource: {
                    id: LAYER.id,
                },
                features: JSON.stringify(featureCollection),
                crs: LAYER.crs,
            },
        ];
        const onSuccess = () => {
            setFeatures([...this.props.features, newFeat]);
        };
        const onFail = (e) => console.log("FUNCTION FAILED" + e.message);
        callAddService(queryBody, onSuccess, onFail);
        clear();
    }

    render() {
        console.log(this.props);
        const schema = this.props.LAYER.basicSettings.ADD_FORM;

        return (
            <div style={{ padding:20 }}>
                <Form
                    schema={schema}
                    data={this.formData}
                    namespace={LOCALIZATION_NAMESPACE}
                />
                <div className='penta-container-center'>
                    <button
                        className='penta-button penta-main-button'
                        onClick={this.OnSubmit}
                    >
                        Add new point
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        features: selectFeatures(state),
    };
};

export default connect(mapStateToProps, null)(FormComponent);
*/

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26b3de955ea764b3d787")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDRlMWRlY2U3ZjkwZDI5Y2Y0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUFBLFNBQUFELGNBQUE7SUFBQUUsZUFBQSxPQUFBRixhQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxhQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLGFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBO0lBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFSSxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDTDtNQUNBOztNQUVBLG9CQUNJaEIsMERBQUE7UUFBS2tCLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUM7UUFBRztNQUFFLGdCQUN2Qm5CLDBEQUFBLENBQUNDLGdFQUFJQTtNQUNEO01BQ0E7TUFBQTtRQUNBbUIsU0FBUyxFQUFFbEIsd0VBQXNCQTtNQUFDLENBQ3JDLENBQUMsZUFDRkYsMERBQUE7UUFBS3FCLFNBQVMsRUFBQztNQUF3QixnQkFDbkNyQiwwREFBQTtRQUNJcUIsU0FBUyxFQUFDO1FBQ1Y7TUFBQSxHQUNILGVBRU8sQ0FDUCxDQUNKLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFoQ3VCckIsd0RBQWU7QUFtQzNDLGlFQUFlTyxhQUFhLEVBQUM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNqSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAcGVudGEtYi9tbmEtcGVudGEtc21hcnQtZm9ybXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNldEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlc30gZnJvbSBcIi4uLy4uL3NlbGVjdG9ycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBjYWxsQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZFNlcnZpdmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbi8qICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvL3RoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLk9uU3VibWl0ID0gdGhpcy5PblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3VibWl0KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3JtRGF0YSk7XHJcbiAgICB9ICovXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgLy9jb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3MuQUREX0ZPUk07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzoyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAvL2RhdGE9e3RoaXMuZm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPXtMT0NBTElaQVRJT05fTkFNRVNQQUNFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZW50YS1jb250YWluZXItY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGVudGEtYnV0dG9uIHBlbnRhLW1haW4tYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2xpY2s9e3RoaXMuT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbXBvbmVudDtcclxuXHJcbi8qXHJcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuT25TdWJtaXQgPSB0aGlzLk9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtIGNvbXBvbmVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB7IG5ld0ZlYXQsIExBWUVSLCBjbGVhciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1EYXRhKTtcclxuICAgICAgICBuZXdGZWF0LnByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ld0ZlYXQucHJvcGVydGllcyxcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtRGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbeyAuLi5uZXdGZWF0IH1dLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcXVlcnlCb2R5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IExBWUVSLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBKU09OLnN0cmluZ2lmeShmZWF0dXJlQ29sbGVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICBjcnM6IExBWUVSLmNycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0RmVhdHVyZXMoWy4uLnRoaXMucHJvcHMuZmVhdHVyZXMsIG5ld0ZlYXRdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRmFpbCA9IChlKSA9PiBjb25zb2xlLmxvZyhcIkZVTkNUSU9OIEZBSUxFRFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICBjYWxsQWRkU2VydmljZShxdWVyeUJvZHksIG9uU3VjY2Vzcywgb25GYWlsKTtcclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3MuQUREX0ZPUk07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzoyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5mb3JtRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U9e0xPQ0FMSVpBVElPTl9OQU1FU1BBQ0V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlbnRhLWNvbnRhaW5lci1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwZW50YS1idXR0b24gcGVudGEtbWFpbi1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEZvcm1Db21wb25lbnQpO1xyXG4qLyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2YjNkZTk1NWVhNzY0YjNkNzg3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJzZXRGZWF0dXJlcyIsInNlbGVjdEZlYXR1cmVzIiwiY2FsbEFkZFNlcnZpY2UiLCJjb25uZWN0IiwiRm9ybUNvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwibmFtZXNwYWNlIiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==