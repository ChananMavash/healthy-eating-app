// components/FeedbackForm.js
import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("פידבק שנשלח: ", feedback);
    setFeedback(''); // מנקה את הטופס
  };

  return (
    <section className="feedback">
      <h2>השאר פידבק</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="המלצות או פידבק..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">שלח</button>
      </form>
    </section>
  );
}

export default FeedbackForm;
