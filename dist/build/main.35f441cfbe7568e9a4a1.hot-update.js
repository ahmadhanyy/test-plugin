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
  function FormComponent(props) {
    var _this;
    _classCallCheck(this, FormComponent);
    _this = _callSuper(this, FormComponent, [props]);
    _this.formData = {};
    _this.OnSubmit = _this.OnSubmit.bind(_this);
    return _this;
  }
  _inherits(FormComponent, _React$Component);
  return _createClass(FormComponent, [{
    key: "OnSubmit",
    value: function OnSubmit() {
      console.log(this.formData);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      var schema = this.props.LAYER.basicSettings.ADD_FORM;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          padding: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_penta_b_mna_penta_smart_forms__WEBPACK_IMPORTED_MODULE_1__.Form, {
        schema: schema,
        data: this.formData,
        namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "penta-container-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "penta-button penta-main-button",
        onClick: this.OnSubmit
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
/******/ 	__webpack_require__.h = () => ("a0755f51a26fb9c7bc47")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNWY0NDFjZmJlNzU2OGU5YTRhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUNmLFNBQUFELGNBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixhQUFBO0lBQ2ZHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxhQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSCxLQUFBLENBQUtJLFFBQVEsR0FBR0osS0FBQSxDQUFLSSxRQUFRLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDTSxTQUFBLENBQUFULGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGFBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsUUFBUUEsQ0FBQSxFQUFHO01BQ1BNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDO0lBQzlCO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUcsTUFBTUEsQ0FBQSxFQUFHO01BQ0xGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1osS0FBSyxDQUFDO01BQ3ZCLElBQU1jLE1BQU0sR0FBRyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxhQUFhLENBQUNDLFFBQVE7TUFFdEQsb0JBQ0kxQiwwREFBQTtRQUFLNEIsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBQztRQUFHO01BQUUsZ0JBQ3ZCN0IsMERBQUEsQ0FBQ0MsZ0VBQUk7UUFDRHNCLE1BQU0sRUFBRUEsTUFBTztRQUNmTyxJQUFJLEVBQUUsSUFBSSxDQUFDakIsUUFBUztRQUNwQmtCLFNBQVMsRUFBRTdCLHdFQUFzQkE7TUFBQyxDQUNyQyxDQUFDLGVBQ0ZGLDBEQUFBO1FBQUtnQyxTQUFTLEVBQUM7TUFBd0IsZ0JBQ25DaEMsMERBQUE7UUFDSWdDLFNBQVMsRUFBQyxnQ0FBZ0M7UUFDMUNDLE9BQU8sRUFBRSxJQUFJLENBQUNuQjtNQUFTLEdBQzFCLGVBRU8sQ0FDUCxDQUNKLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFoQ3VCZCx3REFBZTtBQW1DM0MsaUVBQWVPLGFBQWEsRUFBQzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pIQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ0BwZW50YS1iL21uYS1wZW50YS1zbWFydC1mb3Jtcyc7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgc2V0RmVhdHVyZXN9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzL2luZGV4XCI7XHJcbmltcG9ydCB7IGNhbGxBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWRkU2Vydml2ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLk9uU3VibWl0ID0gdGhpcy5PblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3MuQUREX0ZPUk07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzoyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5mb3JtRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U9e0xPQ0FMSVpBVElPTl9OQU1FU1BBQ0V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlbnRhLWNvbnRhaW5lci1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwZW50YS1idXR0b24gcGVudGEtbWFpbi1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbXBvbmVudDtcclxuXHJcbi8qXHJcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuT25TdWJtaXQgPSB0aGlzLk9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtIGNvbXBvbmVudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB7IG5ld0ZlYXQsIExBWUVSLCBjbGVhciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1EYXRhKTtcclxuICAgICAgICBuZXdGZWF0LnByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ld0ZlYXQucHJvcGVydGllcyxcclxuICAgICAgICAgICAgLi4udGhpcy5mb3JtRGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbeyAuLi5uZXdGZWF0IH1dLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcXVlcnlCb2R5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IExBWUVSLmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBKU09OLnN0cmluZ2lmeShmZWF0dXJlQ29sbGVjdGlvbiksXHJcbiAgICAgICAgICAgICAgICBjcnM6IExBWUVSLmNycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0RmVhdHVyZXMoWy4uLnRoaXMucHJvcHMuZmVhdHVyZXMsIG5ld0ZlYXRdKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRmFpbCA9IChlKSA9PiBjb25zb2xlLmxvZyhcIkZVTkNUSU9OIEZBSUxFRFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICBjYWxsQWRkU2VydmljZShxdWVyeUJvZHksIG9uU3VjY2Vzcywgb25GYWlsKTtcclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3MuQUREX0ZPUk07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzoyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hPXtzY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5mb3JtRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U9e0xPQ0FMSVpBVElPTl9OQU1FU1BBQ0V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BlbnRhLWNvbnRhaW5lci1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwZW50YS1idXR0b24gcGVudGEtbWFpbi1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuT25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyhzdGF0ZSksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEZvcm1Db21wb25lbnQpO1xyXG4qLyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEwNzU1ZjUxYTI2ZmI5YzdiYzQ3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkxPQ0FMSVpBVElPTl9OQU1FU1BBQ0UiLCJzZXRGZWF0dXJlcyIsInNlbGVjdEZlYXR1cmVzIiwiY2FsbEFkZFNlcnZpY2UiLCJjb25uZWN0IiwiRm9ybUNvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImZvcm1EYXRhIiwiT25TdWJtaXQiLCJiaW5kIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwic2NoZW1hIiwiTEFZRVIiLCJiYXNpY1NldHRpbmdzIiwiQUREX0ZPUk0iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGF0YSIsIm5hbWVzcGFjZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9