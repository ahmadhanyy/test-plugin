/*
 * Description: 
 *  - This index file exports plugin's components and/or reducers and/or actions.
 */

import MapClick from './components/MapClick/MapClick.component';
import MapClickResult from './components/MapClickResult/MapClickResult.component';
import FormButton from './components/FormButton';
import FormComponent from './components/FormComponent';
import defaultLocalization from './messages';
import { LOCALIZATION_NAMESPACE } from './constants/constants';
import testingPluginReducer from './reducers';
import * as testingPluginActions from './actions';
import * as testingPluginSelectors from './selectors';

MapClick.Title = LOCALIZATION_NAMESPACE + ":title";
MapClick.Icon = LOCALIZATION_NAMESPACE + ":icon";

const components = {
    MapClick,
    MapClickResult,
    FormButton,
    FormComponent,
};

const localization = {
    namespace: LOCALIZATION_NAMESPACE,
    defaultLocalization    
}

const reducers = { testingPluginReducer };
const actions = { ...testingPluginActions };
const selectors = { ...testingPluginSelectors };

export { components, localization, reducers, actions, selectors };