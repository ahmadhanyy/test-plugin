import React from 'react';
import { withLocalize, componentRegistry } from '@penta-b/ma-lib';
import { LOCALIZATION_NAMESPACE } from '../../constants/constants';
import { connect } from 'react-redux';
import { components } from '@penta-b/grid';
import { selectFeatures } from '../../selectors';
import FormButton from '../FormButton';

const Grid = components.Grid;

class MapClickResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { t, features} = this.props;
        //const featuresProps = features.map((f) => f.properties);

        const featuresPropsWithCo = features.map((f) => ({
            ...f.properties,
            geometry: f.geometry,
        }));

        const ZoomToFeatureButton = componentRegistry.getComponent('ZoomToFeatureButton');
        const HighlightFeatureButton = componentRegistry.getComponent('HighlightFeatureButton');
        const ClearHighlightButton = componentRegistry.getComponent('ClearHighlightButton');

        const trComponents = [
            { component: ZoomToFeatureButton, settings: {} },
            { component: HighlightFeatureButton, settings: {} },
            { component: ClearHighlightButton, settings: {} },
        ];
        const gridComponents = [
            { component: ZoomToFeatureButton, settings: {} },
            { component: HighlightFeatureButton, settings: {} },
            { component: ClearHighlightButton, settings: {} },
            { component: FormButton, settings: {LAYER: this.props.settings.dataSettings.ddd}},
        ];

        return (
            <div>
                <Grid
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
                        data: featuresPropsWithCo,
                    }}
                    trComponents = { trComponents }
                    gridComponents = { gridComponents }
                />
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