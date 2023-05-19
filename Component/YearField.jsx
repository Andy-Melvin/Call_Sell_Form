import React from 'react';

const YearField = ({ value, onChange }) => {
  return (
    <label>
      Year:
      <input
        type="date"
        name="year"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default YearField;
