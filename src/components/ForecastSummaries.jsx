import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import '../styles/ForecastSummaries.css';

function ForecastSummaries({ forecasts }) {
  console.log(forecasts, "<-- forecasts in forecast summaries")
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      // key: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
};
export default ForecastSummaries;
