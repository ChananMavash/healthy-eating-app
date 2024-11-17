// components/CaloriesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './CaloriesChart.css'; // הוספת ייבוא של קובץ CSS

const CaloriesChart = ({ meals }) => {
  const data = {
    labels: meals.map((meal, index) => `Meal ${index + 1}`),
    datasets: [
      {
        label: 'Calories',
        data: meals.map((meal) => meal.calories),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Calories Consumption</h2>
      <Line data={data} />
    </div>
  );
};

export default CaloriesChart;
