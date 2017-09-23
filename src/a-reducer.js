import { fromJS } from "immutable";
const INITIAL_STATE = fromJS({ data: null });

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case 'data':
            return state.set("data", fromJS(payload));
        default:
            return state
    }
}
