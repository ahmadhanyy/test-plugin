/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - An example of a plugin that listens to another 
 *    plugin's state changes (Map plugin), and log that state.
 */


import React from 'react';
import { connect } from 'react-redux';
import { selectorsRegistry, actionsRegistry } from '@penta-b/ma-lib';


class MapClickComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Description: 
     *  - React lifecycle method, here we check for state changes.
     */
    componentDidUpdate() {
        if (this.props.isActive) {
            this.id && this.props.removeTriggerResult(this.id);
            this.props.showTriggerResult({}, (id) => (this.id = id));
        }
        else {
            this.id && this.props.removeTriggerResult(this.id);
        }
    }

    componentDidMount() {
        const {LAYER} = this.props.settings.dataSettings;
        const {POINT_SHAPE, POINT_COLOR, POINT_IMAGE} = LAYER.basicSettings;
        callQueryService(LAYER).then(async(GEOJSONFeatures) => {
            if(!GEOJSONFeatures)
                return this.props.notify("ISSUE WITH REQUEST", "error");

            await drawFeatures(GEOJSONFeatures, {
                vectorLayerOptions: {clear: false},
                styleOptions: {
                    isFile: POINT_SHAPE === 'img',
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
        singleClick: selectorsRegistry.getSelector('selectMapSingleClick', state, ownProps.reducerId)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showTriggerResult: (props, onAdd, onRemove) => dispatch(actionsRegistry.getActionCreator('showComponent', 'test-plugin', 'TriggerResult', props, onAdd, onRemove)),
        removeTriggerResult: (id) => dispatch(actionsRegistry.getActionCreator('removeComponent', id)),
        notify: (message, type) => {dispatch(systemAddNotification({message, type}));},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapClickComponent);