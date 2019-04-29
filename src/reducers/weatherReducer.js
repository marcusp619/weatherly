export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message;
    default:
      return state;
  }
};

export const weather = (state = {}, action) => {
  switch (action.type) {
    case 'WEATHER_FETCH_DATA_SUCCESS':
      return action.weather;
    default:
      return state;
  }
};

export const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION_SUCCESS':
      return action.location;
    default:
      return state;
  }
};
