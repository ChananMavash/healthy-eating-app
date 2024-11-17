// src/components/FeedbackSection.js
import React, { useState } from 'react';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the feedback submission, e.g., sending it to a server or logging it
    console.log(feedback);
    setFeedback('');
  };

  return (
    <div>
      <h3>Share Your Feedback</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          rows="4"
          cols="50"
          required
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackSection;
