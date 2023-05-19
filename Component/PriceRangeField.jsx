import React from 'react';

const PriceRangeField = ({ value, onChange }) => {
  return (
    <div className="form-field">
      <label htmlFor="priceRange">Price Range: <span>{value} Rwf</span></label>
      <div className="range-field">
        <input
          type="range"
          name="priceRange"
          min={0}
          max={800000}
          value={value}
          onChange={onChange}
        />
        
      </div>
    </div>
  );
};

export default PriceRangeField;
