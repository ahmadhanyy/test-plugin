import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry, systemAddNotification } from "@penta-b/ma-lib";
import { callQueryService } from "../../services/queryService";
import { drawFeatures } from "../../services/mapUtils";
import { setFeatures } from "../../actions/index";

class MapClickComponent extends React.Component {
  constructor(props) {
    super(props);
    this.id = null;
}

  componentDidUpdate(prevProps) {
    if (this.props.isActive && prevProps.isActive != this.props.isActive) {
      // Show the MapClickResult only if it hasn't been shown yet
      this.props.showMapClickResult({}, 
        (id) => {
          this.id = id;  // Save the component ID to ensure it's shown once
        },
        () => {
          this.id = null;  // Make ID null on removing the component
        });
      //console.log("ID when trigger is on: ", this.id);
    } 
    else if (!this.props.isActive && prevProps.isActive != this.props.isActive) {
      // Remove the MapClickResult only if it is already shown
      this.id && this.props.removeComponent(this.id);
      this.id = null;
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