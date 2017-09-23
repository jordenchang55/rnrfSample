import { Reducer, ActionConst, Actions } from "react-native-router-flux";
import { fromJS } from "immutable";
const defaultReducer = Reducer();

export default (state = fromJS(Actions.state), action) => {
  const newState = fromJS(defaultReducer(state.toJS(), action));
  return newState;
};
