import { isLoading, hasErrored } from "../actions";
import { weatherFetchDataSuccess } from "../src/actions";

export const fetchWeather = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const data = await response.json();
      const weather = await dispatch(data);
      console.log(weather);
      dispatch(weatherFetchDataSuccess(weather));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
