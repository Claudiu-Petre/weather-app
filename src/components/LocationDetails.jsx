import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails({ location }) {
  const { city, country } = location;

  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationDetails;
