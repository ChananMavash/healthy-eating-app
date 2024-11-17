// components/HealthTips.js
import React from 'react';

function HealthTips({ tips }) {
  return (
    <section className="health-tips">
      <h2>טיפים בריאותיים</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}

export default HealthTips;
