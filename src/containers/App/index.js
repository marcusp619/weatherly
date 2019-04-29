import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../thunks/fetchWeather";
import "./App.css";

function App() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }

  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(`longitude: ${lng} | latitude: ${lat}`);
  }

  return <div className="App">app</div>;
}

const mapStateToProps = state => ({
  weather: state.weather,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchWeather: url => dispatch(fetchWeather(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
