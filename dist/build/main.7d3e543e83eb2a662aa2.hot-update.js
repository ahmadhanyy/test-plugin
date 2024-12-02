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
      console.log("formData", this.formData);
      console.log("props : ", this.props);
      var schema = this.props.LAYER.basicSettings.ADD_FORM;
      console.log("schema : ", schema);
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
/******/ 	__webpack_require__.h = () => ("36e0a3c1d3aa95e3f18f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZDNlNTQzZTgzZWIyYTY2MmFhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUNmLFNBQUFELGNBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixhQUFBO0lBQ2ZHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxhQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSCxLQUFBLENBQUtJLFFBQVEsR0FBR0osS0FBQSxDQUFLSSxRQUFRLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDTSxTQUFBLENBQUFULGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGFBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsUUFBUUEsQ0FBQSxFQUFHO01BQ1BNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDO0lBQzlCO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUcsTUFBTUEsQ0FBQSxFQUFHO01BQ0xGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNSLFFBQVEsQ0FBQztNQUN0Q08sT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDO01BQ25DLElBQU1jLE1BQU0sR0FBRyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxhQUFhLENBQUNDLFFBQVE7TUFDdEROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRUUsTUFBTSxDQUFDO01BRWhDLG9CQUNJdkIsMERBQUE7UUFBSzRCLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUM7UUFBRztNQUFFLGdCQUN2QjdCLDBEQUFBLENBQUNDLGdFQUFJO1FBQ0RzQixNQUFNLEVBQUVBLE1BQU87UUFDZk8sSUFBSSxFQUFFLElBQUksQ0FBQ2pCLFFBQVM7UUFDcEJrQixTQUFTLEVBQUU3Qix3RUFBc0JBO01BQUMsQ0FDckMsQ0FBQyxlQUNGRiwwREFBQTtRQUFLZ0MsU0FBUyxFQUFDO01BQXdCLGdCQUNuQ2hDLDBEQUFBO1FBQ0lnQyxTQUFTLEVBQUMsZ0NBQWdDO1FBQzFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDbkI7TUFBUyxHQUMxQixlQUVPLENBQ1AsQ0FDSixDQUFDO0lBRWQ7RUFBQztBQUFBLEVBbEN1QmQsd0RBQWU7QUFxQzNDLGlFQUFlTyxhQUFhLEVBQUM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNuSEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9jb21wb25lbnRzL0Zvcm1Db21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAcGVudGEtYi9tbmEtcGVudGEtc21hcnQtZm9ybXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHNldEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RGZWF0dXJlc30gZnJvbSBcIi4uLy4uL3NlbGVjdG9ycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBjYWxsQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FkZFNlcnZpdmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5PblN1Ym1pdCA9IHRoaXMuT25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3JtRGF0YVwiLCB0aGlzLmZvcm1EYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb3BzIDogXCIsIHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMucHJvcHMuTEFZRVIuYmFzaWNTZXR0aW5ncy5BRERfRk9STTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVtYSA6IFwiLCBzY2hlbWEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6MjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPXtMT0NBTElaQVRJT05fTkFNRVNQQUNFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZW50YS1jb250YWluZXItY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGVudGEtYnV0dG9uIHBlbnRhLW1haW4tYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLk9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db21wb25lbnQ7XHJcblxyXG4vKlxyXG5jbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLk9uU3VibWl0ID0gdGhpcy5PblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybSBjb21wb25lbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgT25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBuZXdGZWF0LCBMQVlFUiwgY2xlYXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtRGF0YSk7XHJcbiAgICAgICAgbmV3RmVhdC5wcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICAuLi5uZXdGZWF0LnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZm9ybURhdGEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBmZWF0dXJlQ29sbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxyXG4gICAgICAgICAgICBmZWF0dXJlczogW3sgLi4ubmV3RmVhdCB9XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5Qm9keSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBMQVlFUi5pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogSlNPTi5zdHJpbmdpZnkoZmVhdHVyZUNvbGxlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgY3JzOiBMQVlFUi5jcnMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZlYXR1cmVzKFsuLi50aGlzLnByb3BzLmZlYXR1cmVzLCBuZXdGZWF0XSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkZhaWwgPSAoZSkgPT4gY29uc29sZS5sb2coXCJGVU5DVElPTiBGQUlMRURcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgY2FsbEFkZFNlcnZpY2UocXVlcnlCb2R5LCBvblN1Y2Nlc3MsIG9uRmFpbCk7XHJcbiAgICAgICAgY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5wcm9wcy5MQVlFUi5iYXNpY1NldHRpbmdzLkFERF9GT1JNO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6MjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYT17c2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlPXtMT0NBTElaQVRJT05fTkFNRVNQQUNFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZW50YS1jb250YWluZXItY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGVudGEtYnV0dG9uIHBlbnRhLW1haW4tYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLk9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWF0dXJlczogc2VsZWN0RmVhdHVyZXMoc3RhdGUpLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShGb3JtQ29tcG9uZW50KTtcclxuKi8iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNmUwYTNjMWQzYWE5NWUzZjE4ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwic2V0RmVhdHVyZXMiLCJzZWxlY3RGZWF0dXJlcyIsImNhbGxBZGRTZXJ2aWNlIiwiY29ubmVjdCIsIkZvcm1Db21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJmb3JtRGF0YSIsIk9uU3VibWl0IiwiYmluZCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsInNjaGVtYSIsIkxBWUVSIiwiYmFzaWNTZXR0aW5ncyIsIkFERF9GT1JNIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZyIsImRhdGEiLCJuYW1lc3BhY2UiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==