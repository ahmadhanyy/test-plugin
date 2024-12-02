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
/* import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import { callQueryService } from "../../services/queryService";
import {  drawFeatures } from "../../services/mapUtils";
import { setFeatures} from "../../actions/index";

class MapClickComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = null;
    this.removeCurrentComponent = this.removeCurrentComponent.bind(this);
  }

  removeCurrentComponent() {
    this.props.removeComponent(this.id);
}


  componentDidUpdate(prevProps) {
    if (this.props.isActive && prevProps.isActive != this.props.isActive) {
      // Show the MapClickResult only if it hasn't been shown yet
      this.props.showMapClickResult({
        removeCurrentComponent: this.removeCurrentComponent,  // Pass as a prop
      }, 
        (id) => {
          this.id = id;  // Save the component ID to ensure it's shown once
        },
        () => {
          this.id = null;  // Make ID null on removing the component
        });
      console.log("ID when trigger is on: ", this.id);
    } 
    else if (!this.props.isActive && prevProps.isActive != this.props.isActive) {
      // Remove the MapClickResult only if it is already shown
      this.id && this.props.removeComponent(this.id);
      this.id = null;
      console.log("ID when trigger is off: ", this.id);
    }
  }
  
  componentDidMount() {
    const LAYER  = this.props.settings.dataSettings.ddd;
    const POINT_IMAGE = LAYER.basicSettings;
    const POINT_COLOR = "#000000"
    callQueryService(LAYER).then(async (GEOJSONFeatures) => {
      if (!GEOJSONFeatures)
        return this.props.notify("ISSUE WITH REQUEST", "error");

      this.props.setFeatures(GEOJSONFeatures);
      await drawFeatures(GEOJSONFeatures, {
        vectorLayerOptions: { clear: false },
        styleOptions: {
          color: POINT_COLOR,
          iconSrc: POINT_IMAGE,
        },
      });
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    singleClick: selectorsRegistry.getSelector(
      "selectMapSingleClick",
      state,
      ownProps.reducerId
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMapClickResult: (props, onAdd,onRemove) => dispatch(actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'MapClickResult', props, onAdd, onRemove)),
    removeComponent: (id) => dispatch(actionsRegistry.getActionCreator('removeComponent', id)),
    notify: (message, type) => dispatch(systemAddNotification({ message, type })),
    setFeatures: (features) => dispatch(setFeatures(features)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapClickComponent);
 */




var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent(props) {
    var _this;
    _classCallCheck(this, MapClickComponent);
    _this = _callSuper(this, MapClickComponent, [props]);
    _this.currentCID = null;
    _this.removeCurrentComponent = _this.removeCurrentComponent.bind(_this);
    return _this;
  }
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("helloo0");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (this.props.isActive && prevProps.isActive != this.props.isActive) {
        // Show the MapClickResult only if it hasn't been shown yet
        this.props.showMapClickResult({
          removeCurrentComponent: this.removeCurrentComponent // Pass as a prop
        }, function (id) {
          _this2.id = id; // Save the component ID to ensure it's shown once
        });
      } else if (!this.props.isActive) {
        this.id && this.props.removeComponent(this.id);
        this.props.removeComponent(this.currentCID);
        this.currentCID = null;
      }
    }
  }, {
    key: "removeCurrentComponent",
    value: function removeCurrentComponent() {
      this.props.removeComponent(this.id);
      this.props.removeComponent(this.currentCID);
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
    showMapClickResult: function showMapClickResult(props, onAdd, onRemove) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'tarek_test', 'MapClickResult', props, onAdd, onRemove));
    },
    removeMapClickResult: function removeMapClickResult(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    },
    removeComponent: function removeComponent(id) {
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
/******/ 	__webpack_require__.h = () => ("f84ed207d73d5067ca75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45N2M3NGM2YWJmOGZkYmQ0OThkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJMEI7QUFDWTtBQUMrQjtBQUFBLElBRS9ESSxpQkFBaUIsMEJBQUFDLGdCQUFBO0VBQ25CLFNBQUFELGtCQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQUosaUJBQUE7SUFDZkcsS0FBQSxHQUFBRSxVQUFBLE9BQUFMLGlCQUFBLEdBQU1FLEtBQUs7SUFDWEMsS0FBQSxDQUFLRyxVQUFVLEdBQUcsSUFBSTtJQUN0QkgsS0FBQSxDQUFLSSxzQkFBc0IsR0FBR0osS0FBQSxDQUFLSSxzQkFBc0IsQ0FBQ0MsSUFBSSxDQUFBTCxLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQ3pFO0VBQUNNLFNBQUEsQ0FBQVQsaUJBQUEsRUFBQUMsZ0JBQUE7RUFBQSxPQUFBUyxZQUFBLENBQUFWLGlCQUFBO0lBQUFXLEdB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cmMvY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZWxlY3RvcnNSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5IH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBjYWxsUXVlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3F1ZXJ5U2VydmljZVwiO1xyXG5pbXBvcnQgeyAgZHJhd0ZlYXR1cmVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21hcFV0aWxzXCI7XHJcbmltcG9ydCB7IHNldEZlYXR1cmVzfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudCA9IHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ3VycmVudENvbXBvbmVudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG59XHJcblxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAvLyBTaG93IHRoZSBNYXBDbGlja1Jlc3VsdCBvbmx5IGlmIGl0IGhhc24ndCBiZWVuIHNob3duIHlldFxyXG4gICAgICB0aGlzLnByb3BzLnNob3dNYXBDbGlja1Jlc3VsdCh7XHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENvbXBvbmVudDogdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LCAgLy8gUGFzcyBhcyBhIHByb3BcclxuICAgICAgfSwgXHJcbiAgICAgICAgKGlkKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlkID0gaWQ7ICAvLyBTYXZlIHRoZSBjb21wb25lbnQgSUQgdG8gZW5zdXJlIGl0J3Mgc2hvd24gb25jZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pZCA9IG51bGw7ICAvLyBNYWtlIElEIG51bGwgb24gcmVtb3ZpbmcgdGhlIGNvbXBvbmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklEIHdoZW4gdHJpZ2dlciBpcyBvbjogXCIsIHRoaXMuaWQpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzQWN0aXZlICYmIHByZXZQcm9wcy5pc0FjdGl2ZSAhPSB0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBpcyBhbHJlYWR5IHNob3duXHJcbiAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5pZCk7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklEIHdoZW4gdHJpZ2dlciBpcyBvZmY6IFwiLCB0aGlzLmlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBMQVlFUiAgPSB0aGlzLnByb3BzLnNldHRpbmdzLmRhdGFTZXR0aW5ncy5kZGQ7XHJcbiAgICBjb25zdCBQT0lOVF9JTUFHRSA9IExBWUVSLmJhc2ljU2V0dGluZ3M7XHJcbiAgICBjb25zdCBQT0lOVF9DT0xPUiA9IFwiIzAwMDAwMFwiXHJcbiAgICBjYWxsUXVlcnlTZXJ2aWNlKExBWUVSKS50aGVuKGFzeW5jIChHRU9KU09ORmVhdHVyZXMpID0+IHtcclxuICAgICAgaWYgKCFHRU9KU09ORmVhdHVyZXMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubm90aWZ5KFwiSVNTVUUgV0lUSCBSRVFVRVNUXCIsIFwiZXJyb3JcIik7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLnNldEZlYXR1cmVzKEdFT0pTT05GZWF0dXJlcyk7XHJcbiAgICAgIGF3YWl0IGRyYXdGZWF0dXJlcyhHRU9KU09ORmVhdHVyZXMsIHtcclxuICAgICAgICB2ZWN0b3JMYXllck9wdGlvbnM6IHsgY2xlYXI6IGZhbHNlIH0sXHJcbiAgICAgICAgc3R5bGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBjb2xvcjogUE9JTlRfQ09MT1IsXHJcbiAgICAgICAgICBpY29uU3JjOiBQT0lOVF9JTUFHRSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpbmdsZUNsaWNrOiBzZWxlY3RvcnNSZWdpc3RyeS5nZXRTZWxlY3RvcihcclxuICAgICAgXCJzZWxlY3RNYXBTaW5nbGVDbGlja1wiLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgb3duUHJvcHMucmVkdWNlcklkXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd01hcENsaWNrUmVzdWx0OiAocHJvcHMsIG9uQWRkLG9uUmVtb3ZlKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcignc2hvd0NvbXBvbmVudCcsICd0ZXN0LXBsdWdpbicsICdNYXBDbGlja1Jlc3VsdCcsIHByb3BzLCBvbkFkZCwgb25SZW1vdmUpKSxcclxuICAgIHJlbW92ZUNvbXBvbmVudDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgIG5vdGlmeTogKG1lc3NhZ2UsIHR5cGUpID0+IGRpc3BhdGNoKHN5c3RlbUFkZE5vdGlmaWNhdGlvbih7IG1lc3NhZ2UsIHR5cGUgfSkpLFxyXG4gICAgc2V0RmVhdHVyZXM6IChmZWF0dXJlcykgPT4gZGlzcGF0Y2goc2V0RmVhdHVyZXMoZmVhdHVyZXMpKSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpO1xyXG4gKi9cclxuXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNsYXNzIE1hcENsaWNrQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50ID0gdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICBjb25zb2xlLmxvZyhcImhlbGxvbzBcIilcclxuICAgICAgfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0FjdGl2ZSAmJiBwcmV2UHJvcHMuaXNBY3RpdmUgIT0gdGhpcy5wcm9wcy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgLy8gU2hvdyB0aGUgTWFwQ2xpY2tSZXN1bHQgb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBzaG93biB5ZXRcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KHtcclxuICAgICAgICAgICAgICByZW1vdmVDdXJyZW50Q29tcG9uZW50OiB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnQsICAvLyBQYXNzIGFzIGEgcHJvcFxyXG4gICAgICAgICAgfSwgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pZCA9IGlkOyAgLy8gU2F2ZSB0aGUgY29tcG9uZW50IElEIHRvIGVuc3VyZSBpdCdzIHNob3duIG9uY2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuaWQpO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5jdXJyZW50Q0lEKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudENJRCA9IG51bGw7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlQ3VycmVudENvbXBvbmVudCgpIHtcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQodGhpcy5pZCk7XHJcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KHRoaXMuY3VycmVudENJRCk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2luZ2xlQ2xpY2s6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKCdzZWxlY3RNYXBTaW5nbGVDbGljaycsIHN0YXRlLCBvd25Qcm9wcy5yZWR1Y2VySWQpXHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQsb25SZW1vdmUpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ3RhcmVrX3Rlc3QnLCAnTWFwQ2xpY2tSZXN1bHQnLCBwcm9wcywgb25BZGQsb25SZW1vdmUpKSxcclxuICAgICAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKSxcclxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IChpZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3JlbW92ZUNvbXBvbmVudCcsIGlkKSksXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFwQ2xpY2tDb21wb25lbnQpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY4NGVkMjA3ZDczZDUwNjdjYTc1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiTWFwQ2xpY2tDb21wb25lbnQiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJjdXJyZW50Q0lEIiwicmVtb3ZlQ3VycmVudENvbXBvbmVudCIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzMiIsImlzQWN0aXZlIiwic2hvd01hcENsaWNrUmVzdWx0IiwiaWQiLCJyZW1vdmVDb21wb25lbnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic2luZ2xlQ2xpY2siLCJnZXRTZWxlY3RvciIsInJlZHVjZXJJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25BZGQiLCJvblJlbW92ZSIsImdldEFjdGlvbkNyZWF0b3IiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=