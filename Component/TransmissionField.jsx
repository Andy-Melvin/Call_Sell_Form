import React from 'react';

const TransmissionField = ({ value, onChange }) => {
  return (
    <label>
      Transmission:
      <select name="transmission" value={value} onChange={onChange} required>
        <option value="">Select</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
    </label>
  );
};

export default TransmissionField;
