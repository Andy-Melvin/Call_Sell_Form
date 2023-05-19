import React from 'react';

const CarModelField = ({ value, onChange }) => {
  return (
    <label>
      Car Model:
      <input
        type="text"
        name="carModel"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default CarModelField;
