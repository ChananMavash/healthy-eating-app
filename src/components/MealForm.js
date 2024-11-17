import React, { useState } from 'react';

const MealForm = ({ addMeal }) => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meal && calories) {
      addMeal({ meal, calories });
      setMeal('');
      setCalories('');
      setError('');
    } else {
      setError('Please enter both a meal and calories.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Meal</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Meal Name:</label>
        <input
          type="text"
          placeholder="e.g., Salad"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </div>
      <div>
        <label>Calories:</label>
        <input
          type="number"
          placeholder="e.g., 300"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button type="submit">Add Meal</button>
    </form>
  );
};

export default MealForm;
