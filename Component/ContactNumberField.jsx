import React from 'react';

const ContactNumberField = ({ value, onChange }) => {
  return (
    <label>
      Contact Number:
      <input
        type="text"
        name="contactNumber"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default ContactNumberField;
