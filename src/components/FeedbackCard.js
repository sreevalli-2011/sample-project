import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



const FeedbackCard = ({ feedback }) => {
  const formattedDate = new Date(feedback.createdAt).toLocaleString();

  return (
    <div className="feedback-card">
      <h3>Feedback ID: {feedback.id}</h3>
      <p><strong>Date:</strong> {formattedDate}</p>
      <p><strong>Feedback Subject:</strong> {feedback.feedbackSubject}</p>
      <p><strong>Recommendation:</strong> {feedback.recommendation}</p>
      <p><strong>Star Rating:</strong> {feedback.starRating}</p>
      <p><strong>Opinion:</strong> {feedback.opinion}</p>
      <p><strong>Suggestions:</strong> {feedback.suggestions}</p>
    </div>
  );
};

const FeedbackList = () => {

    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
      axios.get('https://66ce04078ca9aa6c8ccc91be.mockapi.io/create')
        .then(response => {
          setFeedbackData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <div className="feedback-list">
      {feedbackData.map(feedback => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
