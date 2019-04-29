export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
});

export const weatherFetchDataSuccess = weather => ({
  type: 'WEATHER_FETCH_DATA_SUCCESS',
  weather
});

export const getLocation = location => ({
  type: 'GET_LOCATION_SUCCESS',
  location
});
