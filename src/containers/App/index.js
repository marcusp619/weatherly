import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../thunks/fetchWeather';
import { getLocation } from '../../actions';
import './App.css';

function App(props) {
  const { fetchWeather, getLocation } = props;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationInfo);
    }

    function locationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      getLocation({ lat, lng });
      fetchWeather(`${process.env.REACT_APP_URL}${lat},${lng}`);
    }
  }, []);

  return <div className="App">app</div>;
}

const mapStateToProps = state => ({
  weather: state.weather,
  location: state.location,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: url => dispatch(fetchWeather(url)),
  getLocation: location => dispatch(getLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
