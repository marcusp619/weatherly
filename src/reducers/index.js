import { combineReducers } from 'redux';
import { isLoading, hasErrored, weather, location } from './weatherReducer';
const rootReducer = combineReducers({
  weather,
  location,
  isLoading,
  error: hasErrored
});

export default rootReducer;
