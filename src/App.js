import React from 'react';
import Navbar from './components/Navbar';
import MealRecommendations from './components/MealRecommendations';
import WaterTracker from './components/WaterTracker';
import MealForm from './components/MealForm';



const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container" >
        <MealRecommendations />
        <WaterTracker />
        <MealForm/>
      </div>
    </div>
  );
};

export default App;

