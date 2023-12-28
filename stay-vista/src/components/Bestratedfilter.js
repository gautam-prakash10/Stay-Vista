import React from 'react';

const Bestratedfilter = ({ locations, onLocationChange }) => {
  return (
    <div className="d-flex overflow-auto">
      {locations.map((location) => (
        <button
          key={location}
          type="button"
          className="btn btn-outline-info ml-2"
          style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}
          onClick={() => onLocationChange(location)}
        >
          {location}
        </button>
      ))}
    </div>
  );
};

export default Bestratedfilter;
