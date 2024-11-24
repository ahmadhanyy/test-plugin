import React from 'react';
import { withLocalize, componentRegistry } from '@penta-b/ma-lib';
import { LOCALIZATION_NAMESPACE } from '../../constants/constants';
import { connect } from 'react-redux';
//import { components } from '@penta-b/grid';
import { selectFeatures } from '../../selectors';

//const Grid = components.Grid;

const ZoomToFeatureButton = componentRegistry.getComponent('ZoomToFeatureButton');
const HighlightFeatureButton = componentRegistry.getComponent('HighlightFeatureButton');

const trComponents = [
    { component: ZoomToFeatureButton, settings: {} },
    { component: HighlightFeatureButton, settings: {} },
];

const gridComponents = [
    { component: ZoomToFeatureButton, settings: {} },
    { component: HighlightFeatureButton, settings: {} },
];

//trComponents = { trComponents }
//gridComponents = { gridComponents }

class MapClickResult extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.features);
    }

    render() {
        const { t, features} = this.props;
        const featuresProps = features.map((f) => f.properties);

        return (
            <div>
                Hello World
                {/* <Grid
                    settings={{
                        name: "buffer data",
                        rowIdentifier: "id",
                        selectable: false,
                        sortable: true,
                        filterable: true,
                        enableLargeView: true,
                        maxComponent: 3,
                        resizable: true,
                        columns: [
                            {
                                id: "id",
                                name: t("id"),
                                type: "string",
                                display: "basic",
                                filterable: true,
                                sortable: false,
                            },
                            {
                                id: "marker_name",
                                name: t("Marker name"),
                                type: "string",
                                display: "basic",
                                filterable: true,
                                sortable: false,
                            },
                            {
                                id: "features",
                                name: "",
                                type: "component",
                                display: "basic",
                                filterable: false,
                                sortable: false,
                            },
                        ],
                        data: featuresProps,
                    }}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        features: selectFeatures(state),
    };
};

export default connect(mapStateToProps, null)(withLocalize(MapClickResult, LOCALIZATION_NAMESPACE));