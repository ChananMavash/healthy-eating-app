import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Healthy Eating App</h2>
      <ul className="navbar-links">
        <li><a href="#water-tracker">Water Tracker</a></li>
        <li><a href="#meal-recommendations">Meal Recommendations</a></li>
        <li><a href="#progress-tracker">Progress Tracker</a></li>
        <li><a href="#health-tips">Health Tips</a></li>
        <li><a href="#feedback-section">Feedback</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
