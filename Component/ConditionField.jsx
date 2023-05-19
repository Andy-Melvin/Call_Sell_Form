import React from 'react';

const ConditionField = ({ value, onChange }) => {
  return (
    <div className="form-field">
      <h3 htmlFor="condition">Condition:</h3>
      <div className="checkbox-group">
        <div>
          <div className='conditionBoxes'>

        <label className='formLabel' htmlFor='condition'>
          Excellent
          </label>
          <input
            type="checkbox"
            name="condition"
            value="Excellent"
            checked={value.includes('Excellent')}
            onChange={onChange}
          />
          </div>
          <div className='conditionBoxes' >
        <label className='formLabel' htmlFor='condition'>
          Good
          </label>
          <input
            type="checkbox"
            name="condition"
            value="Good"
            checked={value.includes('Good')}
            onChange={onChange}
          />
          </div>
        </div>
        <div>
          <div className='conditionBoxes'>
            <label className='formLabel' htmlFor="condition">
          Fair
            </label>
          <input
            type="checkbox"
            name="condition"
            value="Fair"
            checked={value.includes('Fair')}
            onChange={onChange}
          />
          </div>
          <div className='conditionBoxes'>
          <label className='formLabel' htmlFor='condition'>
          Poor
          </label>
          <input
            type="checkbox"
            name="condition"
            value="Poor"
            checked={value.includes('Poor')}
            onChange={onChange}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionField;
