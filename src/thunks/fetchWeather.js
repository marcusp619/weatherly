import { isLoading, hasErrored } from '../actions';
import { weatherFetchDataSuccess } from '../actions';

export const fetchWeather = url => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const weather = await response.json();
      dispatch(weatherFetchDataSuccess(weather));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  };
};
