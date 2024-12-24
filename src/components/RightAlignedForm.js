import React, { useState } from 'react';


const RightAlignedForm = () => {
  const [isRequired, setIsRequired] = useState(true);
  const [formData, setFormData] = useState({
    subject: '',
    feedback: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleToggleRequired = () => {
    setIsRequired(prevState => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission here
  };

  return (
    <div className="right-aligned-form-container">
      <button className="btn btn-link back-button">Back to Add Fields</button>
   <h6>Pick a subject and provide feed back</h6>
      <form onSubmit={handleSubmit} className="right-aligned-form">
      <div className="underline"></div>

        <div className="form-group mt-5">
          <label htmlFor="feedback" className="blue-label">Value</label>
          <div className="underline"></div>
        </div>

        

        <div className="form-group">
          <label className="blue-label">Required</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="toggle-required"
              checked={isRequired}
              onChange={handleToggleRequired}
            />
            <label htmlFor="toggle-required" className="switch-label">
              {isRequired ? 'On' : 'Off'}
            </label>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary me-3">Submit</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RightAlignedForm;




  

