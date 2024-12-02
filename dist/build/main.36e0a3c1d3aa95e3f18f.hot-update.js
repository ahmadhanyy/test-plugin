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
      var schema = this.props.LAYER.basicSettings;
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
/******/ 	__webpack_require__.h = () => ("4371856fef6a03a42198")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNmUwYTNjMWQzYWE5NWUzZjE4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNhO0FBQ2xCO0FBQ0s7QUFDSztBQUNyQjtBQUFBLElBRWhDTyxhQUFhLDBCQUFBQyxnQkFBQTtFQUNmLFNBQUFELGNBQVlFLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBSixhQUFBO0lBQ2ZHLEtBQUEsR0FBQUUsVUFBQSxPQUFBTCxhQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCSCxLQUFBLENBQUtJLFFBQVEsR0FBR0osS0FBQSxDQUFLSSxRQUFRLENBQUNDLElBQUksQ0FBQUwsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUM3QztFQUFDTSxTQUFBLENBQUFULGFBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGFBQUE7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsUUFBUUEsQ0FBQSxFQUFHO01BQ1BNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDO0lBQzlCO0VBQUM7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUcsTUFBTUEsQ0FBQSxFQUFHO01BQ0xGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNSLFFBQVEsQ0FBQztNQUN0Q08sT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDO01BQ25DLElBQU1jLE1BQU0sR0FBRyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxhQUFhO01BQzdDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVFLE1BQU0sQ0FBQztNQUVoQyxvQkFDSXZCLDBEQUFBO1FBQUsyQixLQUFLLEVBQUU7VUFBRUMsT0FBTyxFQUFDO1FBQUc7TUFBRSxnQkFDdkI1QiwwREFBQSxDQUFDQyxnRUFBSTtRQUNEc0IsTUFBTSxFQUFFQSxNQUFPO1FBQ2ZNLElBQUksRUFBRSxJQUFJLENBQUNoQixRQUFTO1FBQ3BCaUIsU0FBUyxFQUFFNUIsd0VBQXNCQTtNQUFDLENBQ3JDLENBQUMsZUFDRkYsMERBQUE7UUFBSytCLFNBQVMsRUFBQztNQUF3QixnQkFDbkMvQiwwREFBQTtRQUNJK0IsU0FBUyxFQUFDLGdDQUFnQztRQUMxQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ2xCO01BQVMsR0FDMUIsZUFFTyxDQUNQLENBQ0osQ0FBQztJQUVkO0VBQUM7QUFBQSxFQWxDdUJkLHdEQUFlO0FBcUMzQyxpRUFBZU8sYUFBYSxFQUFDOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbkhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQHBlbnRhLWIvbW5hLXBlbnRhLXNtYXJ0LWZvcm1zJztcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBzZXRGZWF0dXJlc30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0RmVhdHVyZXN9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgY2FsbEFkZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hZGRTZXJ2aXZlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuT25TdWJtaXQgPSB0aGlzLk9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9ybURhdGFcIiwgdGhpcy5mb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9wcyA6IFwiLCB0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BzLkxBWUVSLmJhc2ljU2V0dGluZ3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2hlbWEgOiBcIiwgc2NoZW1hKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOjIwIH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT17TE9DQUxJWkFUSU9OX05BTUVTUEFDRX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVudGEtY29udGFpbmVyLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BlbnRhLWJ1dHRvbiBwZW50YS1tYWluLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5PblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29tcG9uZW50O1xyXG5cclxuLypcclxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5PblN1Ym1pdCA9IHRoaXMuT25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvcm0gY29tcG9uZW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgbmV3RmVhdCwgTEFZRVIsIGNsZWFyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybURhdGEpO1xyXG4gICAgICAgIG5ld0ZlYXQucHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgLi4ubmV3RmVhdC5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAuLi50aGlzLmZvcm1EYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZUNvbGxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgZmVhdHVyZXM6IFt7IC4uLm5ld0ZlYXQgfV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBxdWVyeUJvZHkgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogTEFZRVIuaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IEpTT04uc3RyaW5naWZ5KGZlYXR1cmVDb2xsZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgIGNyczogTEFZRVIuY3JzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3Qgb25TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGZWF0dXJlcyhbLi4udGhpcy5wcm9wcy5mZWF0dXJlcywgbmV3RmVhdF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25GYWlsID0gKGUpID0+IGNvbnNvbGUubG9nKFwiRlVOQ1RJT04gRkFJTEVEXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNhbGxBZGRTZXJ2aWNlKHF1ZXJ5Qm9keSwgb25TdWNjZXNzLCBvbkZhaWwpO1xyXG4gICAgICAgIGNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMucHJvcHMuTEFZRVIuYmFzaWNTZXR0aW5ncy5BRERfRk9STTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOjIwIH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLmZvcm1EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZT17TE9DQUxJWkFUSU9OX05BTUVTUEFDRX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGVudGEtY29udGFpbmVyLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BlbnRhLWJ1dHRvbiBwZW50YS1tYWluLWJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5PblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdEZlYXR1cmVzKHN0YXRlKSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRm9ybUNvbXBvbmVudCk7XHJcbiovIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDM3MTg1NmZlZjZhMDNhNDIxOThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsInNldEZlYXR1cmVzIiwic2VsZWN0RmVhdHVyZXMiLCJjYWxsQWRkU2VydmljZSIsImNvbm5lY3QiLCJGb3JtQ29tcG9uZW50IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiZm9ybURhdGEiLCJPblN1Ym1pdCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJzY2hlbWEiLCJMQVlFUiIsImJhc2ljU2V0dGluZ3MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGF0YSIsIm5hbWVzcGFjZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9