import { combineReducers } from "redux-immutablejs";

import routeReducer from './route-reducer';
import reducer from './a-reducer';

export default combineReducers({
    route: routeReducer,
    reducer: reducer,
});