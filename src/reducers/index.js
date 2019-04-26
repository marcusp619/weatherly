import { combineReducers } from "redux";
import { isLoading, hasErrored, weather } from "./weatherReducer";

const rootReducer = combineReducers({
  weather,
  isLoading,
  error: hasErrored
});

export default rootReducer;
