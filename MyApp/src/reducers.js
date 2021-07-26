import {combineReducers} from 'redux';
import {listingReducer} from './containers/Dashboard/redux/reducer';

const appReducer = combineReducers({
  listingReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
