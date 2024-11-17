// components/DailyGoals.js
import React, { useState } from 'react';

const DailyGoals = () => {
  const [goals, setGoals] = useState({ calories: 2000, protein: 100, carbs: 300, fat: 70 });
  const [intake, setIntake] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 });

  const handleChange = (e) => {
    setIntake({ ...intake, [e.target.name]: parseInt(e.target.value) });
  };

  const checkGoals = () => {
    const result = [];
    Object.keys(goals).forEach((nutrient) => {
      if (intake[nutrient] >= goals[nutrient]) {
        result.push(`You've reached your goal for ${nutrient}!`);
      }
    });
    return result;
  };

  return (
    <div>
      <h2>Track Your Daily Goals</h2>
      <div>
        <label>Calories: </label>
        <input name="calories" type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Protein (g): </label>
        <input name="protein" type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Carbs (g): </label>
        <input name="carbs" type="number" onChange={handleChange} />
      </div>
      <div>
        <label>Fat (g): </label>
        <input name="fat" type="number" onChange={handleChange} />
      </div>
      <button onClick={checkGoals}>Check Progress</button>
      <div>{checkGoals().map((message, index) => <p key={index}>{message}</p>)}</div>
    </div>
  );
};

export default DailyGoals;
