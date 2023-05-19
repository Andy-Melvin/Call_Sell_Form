import React from 'react';

const MileageField = ({ value, onChange }) => {
  return (
    <label>
      Mileage:
      <input
        type="number"
        name="mileage"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default MileageField;
