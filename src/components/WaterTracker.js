import React, { useState } from 'react';
import '../styles/WaterTracker.css';
import waterCup from '../assets/water-cup.png';



const WaterTracker = () => {
  const [cups, setCups] = useState(0);
  const [motivation, setMotivation] = useState(""); // משפטי מוטיבציה
  const [cupImages, setCupImages] = useState([]); // מצב למערך של תמונות כוסות

  const motivationalQuotes = [
    "Great job! Keep your body hydrated!",
    "You’re doing amazing, keep drinking water!",
    "Every sip counts towards a healthier you!",
    "Keep going, you're on the right track!",
    "Hydration is key to feeling your best!",
    "Way to go! Keep up the good work!",
    "Another step closer to your hydration goal!",
    "You’re a hydration hero!",
    "Stay refreshed and stay strong!",
    "Water is life—keep drinking!"
  ];

  const getRandomMotivationalQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };

  const handleDrinkWater = () => {
    setCups(cups + 1);
    const motivation = getRandomMotivationalQuote();
    setMotivation(motivation);
    setCupImages([...cupImages, <img key={cups} src={waterCup} alt="Water Cup" className="cup-image" />]); // הוספת תמונה חדשה
  };

  const handleRemoveCup = () => {
    if (cups > 0) {
      setCups(cups - 1);
      setCupImages(cupImages.slice(0, -1)); // הסרת התמונה האחרונה
    }
  };

  return (
    <div className="water-tracker">
      <h2>Water Tracker</h2>
      <p>You've had {cups} cups of water today.</p>
      
      <progress value={cups} max="8"></progress>

      <button onClick={handleDrinkWater}>
        <i className="fas fa-glass-water"></i> Drink a Cup
      </button>
      <button onClick={handleRemoveCup} disabled={cups === 0}>Remove Last Cup</button> {/* כפתור להסרת כוס */}

      {/* הצגת משפט מוטיבציה */}
      {motivation && <p className="motivation-text">{motivation}</p>}

      {/* הצגת התמונות של הכוסות */}
      <div className="cup-images-container">
        {cupImages}
      </div>
    </div>
  );
};

export default WaterTracker;
