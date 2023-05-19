import React from 'react';

const CarMakeField = ({ value, onChange }) => {
  return (
    <label>
      Car Make:
      <input
        type="text"
        name="carMake"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default CarMakeField;
