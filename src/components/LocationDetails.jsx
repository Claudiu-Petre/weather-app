import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function LocationDetails({ city, country }) {
  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationDetails;
