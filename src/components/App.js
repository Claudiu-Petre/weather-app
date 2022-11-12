import React from 'react';
// import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import ForecastSummary from './ForecastSummary';
import '../styles/App.css';
import '../styles/ForecastSummaries.css';

function App({ location, forecasts, forecast }) {
  return (
    <>
      <div className="weather-app" />

      <LocationDetails location={location} />

      <ForecastSummary
        date={forecasts[0].date}
        description={forecasts[0].description}
        icon={forecasts[0].icon}
        temperature={forecasts[0].temperature}
      />
      <ForecastSummaries forecasts={forecasts} />

      <ForecastDetails forecast={forecast} />

    </>
  );
}

// validation for the location prop using PropType.shape()
// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,

//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//       temperature: PropTypes.shape({
//         min: PropTypes.number,
//         max: PropTypes.number,
//       }),
//     }),
//   ).isRequired,

//   forecast: PropTypes.shape({
//     date: PropTypes.number,
//     description: PropTypes.string,
//     icon: PropTypes.string,
//     humidity: PropTypes.number,
//     wind: PropTypes.shape({
//       speed: PropTypes.number,
//       direction: PropTypes.string,
//     }),
//     temperature: PropTypes.shape({
//       min: PropTypes.number,
//       max: PropTypes.number,
//     }),
//   }).isRequired,
// };
export default App;
