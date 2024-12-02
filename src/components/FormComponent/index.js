import React from 'react';
import { Form } from '@penta-b/mna-penta-smart-forms';
import { LOCALIZATION_NAMESPACE } from '../../constants/constants';
import { setFeatures} from "../../actions/index";
import { selectFeatures} from "../../selectors/index";
import { callAddService } from '../../services/addServive';
import { connect } from 'react-redux';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.formData = {};
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    OnSubmit() {
        const { newFeat, LAYER, clear } = this.props;
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
        const schema = this.props.LAYER.basicSettings.FormComponent;

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
                        Add Point
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