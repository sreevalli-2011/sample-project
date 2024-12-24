// src/components/FeedbackForm.jsx
import React, { useState } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import RightAlignedForm from './RightAlignedForm'
import FeedbackList from './FeedbackCard'



const FeedbackForm = () => {
 
  // State to hold form data
  const [formData, setFormData] = useState({
    recommendation: '',
    starRating: '',
    opinion: '',
    suggestions: '',
    feedbackSubject: ''
  });
  const [selectedOption, setSelectedOption] = useState('');
  const [responseMessage, setResponseMessage] = useState(''); // State to hold response message

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle button click
  const handleButtonClick = (value) => {
    setSelectedOption(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData) 
    try {
      // Send data to the server
      const response = await axios.post('https://66ce04078ca9aa6c8ccc91be.mockapi.io/create', formData);

      // Check if the response is successful
      if (response.status === 201) {
        // Update responseMessage with server response
        setResponseMessage('Thank you for your feedback!');
        alert('Thank you for your feedback!');
      } else {
        // Handle non-200 status codes
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      // Handle errors in the request
      console.error('Error submitting feedback:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (

    
<div className="feedback-form-container">
      <form onSubmit={handleSubmit} className="feedback-form p-4 border rounded">
        
        {/* Generic Website Rating Section */}
        <div className="generic-website-rating">
          <h5 className="section-title">Generic Website Rating</h5>
          
          {/* Comment Section */}
          <div className="comment-section">
            <label htmlFor="suggestions" className="feedback-form-label">Would you like to add a comment?</label>
            <textarea
              className="form-control"
              id="suggestions"
              name="suggestions"
              rows="4"
              value={formData.suggestions}
              onChange={handleChange}
            ></textarea>
            <div className="icon-container">
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>

          {/* Recommendation Section */}
          <div className="comment-section">
            <label className="feedback-form-label">How likely are you to recommend us to your family and friends?</label>
            <div className="d-flex flex-wrap inner-border">
              {[...Array(10)].map((_, index) => (
                <div key={index + 1} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id={`recommendation${index + 1}`}
                    name="recommendation"
                    value={index + 1}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor={`recommendation${index + 1}`}>
                    {index + 1}
                  </label>
                </div>
              ))}
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="comment-section">
            <div className="d-flex flex-column mt-4 star-rating-section">
              <label className="feedback-form-label">Give a star rating for this website:</label>
              <div className="d-flex star-container">
                {[...Array(5)].map((_, index) => (
                  <div key={index + 1} className="form-check star-item">
                    <input
                      type="radio"
                      className="form-check-input star-input"
                      id={`star${index + 1}`}
                      name="starRating"
                      value={index + 1}
                      onChange={handleChange}
                    />
                    <label className="form-check-label star-label" htmlFor={`star${index + 1}`}>
                      <span role="img" aria-label={`star ${index + 1}`}>
                        {'⭐'}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faPencilAlt} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>

          {/* Opinion Section */}
          <div className="comment-section">
            <div className="form-group mb-4 mt-4">
              <label className="feedback-form-label">What is your opinion of this page?</label>
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map(value => (
                  <div key={value} className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id={`opinion${value}`}
                      name="opinion"
                      value={value}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`opinion${value}`}>
                      <span role="img" aria-label={`smiley ${value}`}>
                        {value === 1 ? '😞' : 
                         value === 2 ? '😕' :
                         value === 3 ? '😐' :
                         value === 4 ? '😊' :
                         '😃'}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faPencilAlt} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>

          {/* Feedback Subject */}
          <div className="comment-section">
            <div className="form-group mb-4 mt-4">
              <label htmlFor="feedbackSubject" className="feedback-form-label">Do you have any suggestions to improve our website?</label>
              <div className="icon-container">
                <FontAwesomeIcon icon={faPencilAlt} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <select
              className="form-control"
              id="feedbackSubject"
              name="feedbackSubject"
              value={formData.feedbackSubject}
              onChange={handleChange}
            >
              <option value="">Select a subject</option>
              <option value="design">Design</option>
              <option value="usability">Usability</option>
              <option value="content">Content</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Multiple Choice Section */}
          <div className="comment-section">
            <h6 className='comment-heading'>Multiple Choice</h6>
            <div className="d-flex flex-column">
              <div className="form-check recommendation-item">
                <input
                  type="radio"
                  className="form-check-input"
                  id="recommendation1"
                  name="recommendation"
                  value="1"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="recommendation1">
                  1
                </label>
              </div>
              <div className="form-check recommendation-item">
                <input
                  type="radio"
                  className="form-check-input"
                  id="recommendation2"
                  name="recommendation"
                  value="2"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="recommendation2">
                  2
                </label>
              </div>
              <div className="form-check recommendation-item">
                <input
                  type="radio"
                  className="form-check-input"
                  id="recommendation3"
                  name="recommendation"
                  value="3"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="recommendation3">
                  3
                </label>
              </div>
              <div className="icon-container">
                <FontAwesomeIcon icon={faPencilAlt} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>

          {/* Subject Feedback Section */}
          <div className='comment-section'>
            <h6 className='comment-heading'>Pick a subject and provide feedback</h6>
            <div className='button-group'>
              <button
                type="button"
                className={`feedback-button ${selectedOption === 'bug' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('bug')}
              >
                Bug
              </button>
              <button
                type="button"
                className={`feedback-button ${selectedOption === 'content' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('content')}
              >
                Content
              </button>
              <button
                type="button"
                className={`feedback-button ${selectedOption === 'other' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('other')}
              >
                Other
              </button>
            </div>
          </div>

        </div>
      
        <button type="submit" className="btn btn-primary me-3">Submit</button>

      </form>

      <div className="App">
      <h1>User Feedback</h1>
      <FeedbackList />
    </div>
    </div>

  );
}

export default FeedbackForm;
