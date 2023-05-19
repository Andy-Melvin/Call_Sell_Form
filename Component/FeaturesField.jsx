import React from 'react';

const FeaturesField = ({ value, onChange }) => {
  return (
    <div className="form-field">
      <label htmlFor="features">Features:</label>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="features"
            value="Air Conditioning"
            checked={value.includes('Air Conditioning')}
            onChange={onChange}
          />
          Air Conditioning
        </label>
        <label>
          <input
            type="checkbox"
            name="features"
            value="Power Steering"
            checked={value.includes('Power Steering')}
            onChange={onChange}
          />
          Power Steering
        </label>
        <label>
          <input
            type="checkbox"
            name="features"
            value="Power Windows"
            checked={value.includes('Power Windows')}
            onChange={onChange}
          />
          Power Windows
        </label>
        <label>
          <input
            type="checkbox"
            name="features"
            value="ABS"
            checked={value.includes('ABS')}
            onChange={onChange}
          />
          ABS
        </label>
        <label>
          <input
            type="checkbox"
            name="features"
            value="Navigation System"
            checked={value.includes('Navigation System')}
            onChange={onChange}
          />
          Navigation System
        </label>
      </div>
    </div>
  );
};

export default FeaturesField;
