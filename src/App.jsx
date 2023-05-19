import React, { useState } from 'react';
import './index.css';
import CarMakeField from '../Component/CarMakeField';
import CarModelField from '../Component/CarModelField';
import YearField from '../Component/YearField';
import MileageField from '../Component/MileageField';
import ConditionField from '../Component/ConditionField';
import FeaturesField from '../Component/FeaturesField';
import TransmissionField from '../Component/TransmissionField';
import PriceRangeField from '../Component/PriceRangeField';
import ContactNumberField from '../Component/ContactNumberField';
import Title from '../Component/Title';
import Next from '../Component/next';

const App = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: 0,
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          features: [...prevData.features, value],
        };
      } else {
        return {
          ...prevData,
          features: prevData.features.filter((feature) => feature !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <p>W</p>
        </div>
        <h1 className="title">Sell your Cars <br /> with WeSell</h1>
        <div className="info">
          <h2>Secure and Reliable</h2>
          <div className='pis'> 
          <p>
            <span className="icon">✔</span> Your data is encrypted
          </p>
          <p>
            <span className="icon">✔</span> Trusted by thousands of users
          </p>
          <p>
            <span className="icon">✔</span> Trusted by thousands of users 
          </p>
          </div>
          <div className='lists'>
            <ul>
              <li>UBER</li>
              <li>TESLA</li>
              <li>MERCEDES</li>
              <li>TOYOTA</li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <Title/>
          <CarMakeField value={formData.carMake} onChange={handleChange} />
          <CarModelField value={formData.carModel} onChange={handleChange} />
          <YearField value={formData.year} onChange={handleChange} />
          {/* <MileageField value={formData.mileage} onChange={handleChange} />
          <ConditionField value={formData.condition} onChange={handleChange} /> */}
          {/* <FeaturesField value={formData.features} onChange={handleCheckboxChange} /> */}
          <TransmissionField value={formData.transmission} onChange={handleChange} />
          <ContactNumberField value={formData.contactNumber} onChange={handleChange} />
          <PriceRangeField value={formData.priceRange} onChange={handleChange} />
          <Next/>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default App;