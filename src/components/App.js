import React from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';

function App(props) {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} area={location.area} country={location.country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    area: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
