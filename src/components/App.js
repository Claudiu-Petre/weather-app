import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import ForecastSummary from "./ForecastSummary";
import "../styles/App.css";
import "../styles/ForecastSummaries.css";

const App = ({ location, forecasts, forecast }) => {
  console.log(forecasts, "<-- forecasts");
  // return <p>In app</p>;
  return (
    <>
      {/* <LocationDetails city={location.city} country={location.country} /> */}
      <ForecastSummaries forecasts={forecasts} />
      <p>App component</p>
    </>
  );
};

// validation for the location prop using PropType.shape()

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,

  // forecast: PropTypes.shape({
  //   date: PropTypes.number,
  //   description: PropTypes.string,
  //   icon: PropTypes.string,
  //   humidity: PropTypes.number,
  //   wind: PropTypes.shape({
  //     speed: PropTypes.number,
  //     direction: PropTypes.string,
  //   }),
  //   temperature: PropTypes.shape({
  //     min: PropTypes.number,
  //     max: PropTypes.number,
  //   }),
  // }).isRequired,
};
export default App;
