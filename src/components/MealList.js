import React from 'react';

const MealList = ({ meals }) => {
  return (
    <div>
      <h2>Meals Today</h2>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal.meal} - {meal.calories} Calories
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
