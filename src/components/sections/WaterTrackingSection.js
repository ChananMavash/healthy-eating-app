// src/components/sections/WaterTrackingSection.js
import React from 'react';
import WaterTracker from '../WaterTracker';

const WaterTrackingSection = () => {
  return (
    <section className="section water-tracking">
      <h2>מעקב שתיית מים</h2>
      <p>כאן תוכלו לעקוב אחרי כמות המים ששתיתם במהלך היום.</p>
      <WaterTracker />
    </section>
  );
};

export default WaterTrackingSection;
