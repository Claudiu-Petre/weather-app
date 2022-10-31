import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails(props) {
  const { city, area, country } = props;
  return <h1>{`${city}, ${area}, ${country}`}</h1>;
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
