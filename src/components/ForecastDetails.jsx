import React from "react";
import PropTypes from "prop-types";
// import WeatherIcon from 'react-icons-weather';

function ForecastDetails({ forecast }) {
  const {
    date,
    temperature,
    wind,
    humidity,
    description,
    icon,
  } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        { formattedDate }
      </div>
      <div className="forecast-details__icon" data-testid="forecast-icon">
        {/* <WeatherIcon name="owm" iconId={icon} /> */}
      </div>
      <div className="forecast-details__temperature">
        { temperature.max }
      </div>
      <div className="forecast-details__description">
        {description}
      </div>
      <div className="forecast-details__wind">
        { wind.speed }
      </div>
      <div className="forecast-details__wind">
        { wind.direction }
      </div>
      <div className="forecast-details__humidity">
        { humidity }
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
export default ForecastDetails;
