import React, { useState } from 'react';



const MealRecommendations = () => {
  const [meal, setMeal] = useState(null);
  const [mealType, setMealType] = useState('All'); // סוג הארוחה
  const [dietType, setDietType] = useState('All'); // סוג הדיאטה

  const recommendedMeals = [
    // Breakfast
    { name: 'Oatmeal with Berries', category: 'Breakfast', diet: 'Vegan', calories: 200, protein: 5, carbs: 40, fat: 5 },
    { name: 'Avocado Toast', category: 'Breakfast', diet: 'Vegan', calories: 250, protein: 6, carbs: 30, fat: 15 },
    { name: 'Chia Pudding with Coconut Milk', category: 'Breakfast', diet: 'Vegan', calories: 180, protein: 4, carbs: 20, fat: 10 },
    { name: 'Egg White Omelette', category: 'Breakfast', diet: 'Low Carb', calories: 180, protein: 20, carbs: 5, fat: 8 },
    { name: 'Greek Yogurt with Honey', category: 'Breakfast', diet: 'Balanced', calories: 220, protein: 15, carbs: 20, fat: 9 },
    { name: 'Smoothie Bowl with Banana and Berries', category: 'Breakfast', diet: 'Vegan', calories: 300, protein: 6, carbs: 50, fat: 8 },
    { name: 'Whole Grain Pancakes', category: 'Breakfast', diet: 'Balanced', calories: 350, protein: 10, carbs: 60, fat: 12 },
    { name: 'Vegan Tofu Scramble', category: 'Breakfast', diet: 'Vegan', calories: 200, protein: 15, carbs: 10, fat: 12 },
    { name: 'Peanut Butter Banana Toast', category: 'Breakfast', diet: 'Balanced', calories: 280, protein: 8, carbs: 40, fat: 12 },
    { name: 'Scrambled Eggs with Spinach', category: 'Breakfast', diet: 'Low Carb', calories: 250, protein: 20, carbs: 5, fat: 18 },
    { name: 'Cottage Cheese with Pineapple', category: 'Breakfast', diet: 'Balanced', calories: 180, protein: 15, carbs: 20, fat: 4 },
    { name: 'Blueberry Muffin with Almond Milk', category: 'Breakfast', diet: 'Balanced', calories: 300, protein: 6, carbs: 50, fat: 8 },
    { name: 'Vegan Protein Shake', category: 'Breakfast', diet: 'Vegan', calories: 250, protein: 20, carbs: 30, fat: 5 },
    { name: 'Almond Butter Smoothie', category: 'Breakfast', diet: 'Balanced', calories: 300, protein: 10, carbs: 35, fat: 12 },
    { name: 'Egg and Cheese Sandwich', category: 'Breakfast', diet: 'Balanced', calories: 400, protein: 22, carbs: 45, fat: 15 },
    { name: 'Vegan Breakfast Burrito', category: 'Breakfast', diet: 'Vegan', calories: 350, protein: 15, carbs: 55, fat: 10 },
    { name: 'French Toast with Maple Syrup', category: 'Breakfast', diet: 'Balanced', calories: 450, protein: 12, carbs: 65, fat: 18 },
    { name: 'Green Smoothie with Spinach and Kale', category: 'Breakfast', diet: 'Vegan', calories: 200, protein: 5, carbs: 30, fat: 5 },
    { name: 'Quinoa Porridge with Almond Milk', category: 'Breakfast', diet: 'Vegan', calories: 280, protein: 8, carbs: 45, fat: 8 },
    { name: 'Buckwheat Pancakes with Berries', category: 'Breakfast', diet: 'Balanced', calories: 350, protein: 10, carbs: 55, fat: 12 },
    { name: 'Scrambled Tofu with Mushrooms', category: 'Breakfast', diet: 'Vegan', calories: 250, protein: 18, carbs: 15, fat: 10 },
    { name: 'Sweet Potato Hash with Avocado', category: 'Breakfast', diet: 'Balanced', calories: 300, protein: 8, carbs: 45, fat: 12 },
    { name: 'Yogurt Parfait with Granola', category: 'Breakfast', diet: 'Balanced', calories: 350, protein: 15, carbs: 50, fat: 10 },
    { name: 'Mango Smoothie with Coconut Milk', category: 'Breakfast', diet: 'Vegan', calories: 250, protein: 4, carbs: 40, fat: 10 },
    { name: 'Coconut Flour Pancakes', category: 'Breakfast', diet: 'Low Carb', calories: 300, protein: 12, carbs: 15, fat: 18 },
    { name: 'Vegan Banana Pancakes', category: 'Breakfast', diet: 'Vegan', calories: 350, protein: 8, carbs: 60, fat: 12 },
    { name: 'Omelette with Feta Cheese', category: 'Breakfast', diet: 'Balanced', calories: 320, protein: 20, carbs: 8, fat: 25 },
    { name: 'Breakfast Quinoa with Almonds', category: 'Breakfast', diet: 'Vegan', calories: 350, protein: 10, carbs: 50, fat: 12 },
    { name: 'Smoothie with Oats and Almond Butter', category: 'Breakfast', diet: 'Balanced', calories: 400, protein: 15, carbs: 50, fat: 15 },
  
    // Lunch
    { name: 'Grilled Chicken Salad', category: 'Lunch', diet: 'Low Carb', calories: 300, protein: 25, carbs: 30, fat: 10 },
    { name: 'Quinoa and Veggie Bowl', category: 'Lunch', diet: 'Vegan', calories: 350, protein: 10, carbs: 50, fat: 12 },
    { name: 'Turkey Sandwich on Whole Grain', category: 'Lunch', diet: 'Balanced', calories: 400, protein: 30, carbs: 50, fat: 10 },
    { name: 'Shrimp and Avocado Salad', category: 'Lunch', diet: 'Low Carb', calories: 300, protein: 25, carbs: 15, fat: 18 },
    { name: 'Vegan Lentil Soup', category: 'Lunch', diet: 'Vegan', calories: 280, protein: 12, carbs: 40, fat: 6 },
    { name: 'Stir-fried Tofu with Vegetables', category: 'Lunch', diet: 'Vegan', calories: 320, protein: 20, carbs: 35, fat: 15 },
    { name: 'Grilled Salmon Salad', category: 'Lunch', diet: 'Low Carb', calories: 400, protein: 35, carbs: 10, fat: 25 },
    { name: 'Veggie Wrap with Hummus', category: 'Lunch', diet: 'Vegan', calories: 350, protein: 12, carbs: 40, fat: 14 },
    { name: 'Chicken Caesar Salad', category: 'Lunch', diet: 'Low Carb', calories: 350, protein: 30, carbs: 10, fat: 20 },
    { name: 'Tuna Salad with Avocado', category: 'Lunch', diet: 'Low Carb', calories: 320, protein: 28, carbs: 5, fat: 22 },
    { name: 'Roasted Vegetable Quinoa Bowl', category: 'Lunch', diet: 'Vegan', calories: 300, protein: 10, carbs: 50, fat: 8 },
    { name: 'Greek Salad with Feta Cheese', category: 'Lunch', diet: 'Balanced', calories: 280, protein: 12, carbs: 20, fat: 18 },
    { name: 'Vegan Chickpea Salad', category: 'Lunch', diet: 'Vegan', calories: 320, protein: 15, carbs: 40, fat: 12 },
    { name: 'Chicken and Brown Rice Bowl', category: 'Lunch', diet: 'Balanced', calories: 450, protein: 35, carbs: 55, fat: 10 },
    { name: 'Grilled Veggie Wrap', category: 'Lunch', diet: 'Vegan', calories: 300, protein: 10, carbs: 45, fat: 8 },
    { name: 'Bulgur Wheat Salad with Tomatoes', category: 'Lunch', diet: 'Vegan', calories: 340, protein: 12, carbs: 50, fat: 10 },
    { name: 'Turkey and Avocado Wrap', category: 'Lunch', diet: 'Low Carb', calories: 350, protein: 25, carbs: 15, fat: 18 },
    { name: 'Vegan Black Bean Tacos', category: 'Lunch', diet: 'Vegan', calories: 380, protein: 15, carbs: 60, fat: 12 },
    { name: 'Zucchini Noodles with Pesto', category: 'Lunch', diet: 'Low Carb', calories: 300, protein: 12, carbs: 10, fat: 25 },
    { name: 'Vegan Falafel Wrap', category: 'Lunch', diet: 'Vegan', calories: 400, protein: 15, carbs: 50, fat: 16 },
    { name: 'Chicken and Vegetable Stir-fry', category: 'Lunch', diet: 'Balanced', calories: 450, protein: 35, carbs: 40, fat: 15 },
    { name: 'Grilled Tofu Salad with Sesame Dressing', category: 'Lunch', diet: 'Vegan', calories: 320, protein: 20, carbs: 25, fat: 15 },
    { name: 'Lentil Salad with Tomatoes and Cucumbers', category: 'Lunch', diet: 'Vegan', calories: 350, protein: 18, carbs: 40, fat: 10 },
    { name: 'Beef and Broccoli Stir-fry', category: 'Lunch', diet: 'Low Carb', calories: 450, protein: 40, carbs: 15, fat: 20 },
    { name: 'Spinach and Feta Quiche', category: 'Lunch', diet: 'Balanced', calories: 400, protein: 18, carbs: 30, fat: 25 },
    { name: 'Grilled Veggie Sandwich on Whole Wheat', category: 'Lunch', diet: 'Vegan', calories: 380, protein: 12, carbs: 55, fat: 10 },
    { name: 'Quinoa Salad with Chickpeas and Spinach', category: 'Lunch', diet: 'Vegan', calories: 350, protein: 12, carbs: 50, fat: 10 },
    { name: 'Eggplant and Lentil Stew', category: 'Lunch', diet: 'Vegan', calories: 320, protein: 15, carbs: 45, fat: 8 },
    { name: 'Salmon and Avocado Sushi Roll', category: 'Lunch', diet: 'Low Carb', calories: 350, protein: 25, carbs: 15, fat: 20 },
    { name: 'Vegan Pad Thai', category: 'Lunch', diet: 'Vegan', calories: 400, protein: 15, carbs: 60, fat: 12 },
    { name: 'Baked Sweet Potato with Black Beans', category: 'Lunch', diet: 'Vegan', calories: 350, protein: 10, carbs: 60, fat: 5 },
    { name: 'Chicken Shawarma Salad', category: 'Lunch', diet: 'Low Carb', calories: 400, protein: 30, carbs: 15, fat: 25 },
  
    // Dinner
    { name: 'Grilled Salmon with Asparagus', category: 'Dinner', diet: 'Low Carb', calories: 400, protein: 35, carbs: 10, fat: 25 },
    { name: 'Vegan Lentil Curry', category: 'Dinner', diet: 'Vegan', calories: 450, protein: 18, carbs: 60, fat: 15 },
    { name: 'Chicken and Vegetable Kebabs', category: 'Dinner', diet: 'Low Carb', calories: 350, protein: 30, carbs: 10, fat: 18 },
    { name: 'Vegan Eggplant Parmesan', category: 'Dinner', diet: 'Vegan', calories: 400, protein: 15, carbs: 50, fat: 18 },
    { name: 'Beef Stir-fry with Broccoli', category: 'Dinner', diet: 'Low Carb', calories: 450, protein: 40, carbs: 15, fat: 20 },
    { name: 'Vegan Stuffed Bell Peppers', category: 'Dinner', diet: 'Vegan', calories: 350, protein: 12, carbs: 45, fat: 10 },
    { name: 'Shrimp Scampi with Zucchini Noodles', category: 'Dinner', diet: 'Low Carb', calories: 400, protein: 30, carbs: 12, fat: 18 },
    { name: 'Grilled Tofu with Stir-fried Vegetables', category: 'Dinner', diet: 'Vegan', calories: 300, protein: 20, carbs: 35, fat: 10 },
    { name: 'Baked Cod with Lemon and Herbs', category: 'Dinner', diet: 'Low Carb', calories: 350, protein: 35, carbs: 10, fat: 12 },
    { name: 'Vegan Chickpea Stew', category: 'Dinner', diet: 'Vegan', calories: 400, protein: 20, carbs: 50, fat: 10 },
    { name: 'Chicken Stir-fry with Cauliflower Rice', category: 'Dinner', diet: 'Low Carb', calories: 350, protein: 30, carbs: 15, fat: 12 },
    { name: 'Vegan Buddha Bowl', category: 'Dinner', diet: 'Vegan', calories: 450, protein: 15, carbs: 65, fat: 15 },
    { name: 'Pesto Zoodles with Grilled Chicken', category: 'Dinner', diet: 'Low Carb', calories: 400, protein: 35, carbs: 15, fat: 20 },
    { name: 'Vegan Chili', category: 'Dinner', diet: 'Vegan', calories: 350, protein: 18, carbs: 50, fat: 10 },
    { name: 'Beef and Vegetable Stew', category: 'Dinner', diet: 'Balanced', calories: 450, protein: 40, carbs: 35, fat: 15 },
    { name: 'Vegan Lentil Bolognese', category: 'Dinner', diet: 'Vegan', calories: 400, protein: 18, carbs: 55, fat: 12 },
    { name: 'Grilled Chicken with Quinoa', category: 'Dinner', diet: 'Balanced', calories: 450, protein: 35, carbs: 50, fat: 10 },
    { name: 'Mushroom and Barley Risotto', category: 'Dinner', diet: 'Vegan', calories: 400, protein: 12, carbs: 55, fat: 12 },
    { name: 'Spaghetti Squash with Marinara Sauce', category: 'Dinner', diet: 'Low Carb', calories: 300, protein: 12, carbs: 20, fat: 15 },
    { name: 'Vegan Coconut Curry with Tofu', category: 'Dinner', diet: 'Vegan', calories: 450, protein: 15, carbs: 55, fat: 18 },
    { name: 'Herb-crusted Salmon with Green Beans', category: 'Dinner', diet: 'Low Carb', calories: 420, protein: 35, carbs: 10, fat: 25 },
    { name: 'Stuffed Zucchini Boats', category: 'Dinner', diet: 'Vegan', calories: 350, protein: 10, carbs: 45, fat: 10 },
    { name: 'Grilled Pork Chops with Sweet Potatoes', category: 'Dinner', diet: 'Balanced', calories: 500, protein: 40, carbs: 50, fat: 20 },
    { name: 'Vegan Shepherd’s Pie', category: 'Dinner', diet: 'Vegan', calories: 400, protein: 15, carbs: 55, fat: 12 },
    { name: 'Baked Lemon Chicken with Roasted Vegetables', category: 'Dinner', diet: 'Low Carb', calories: 400, protein: 35, carbs: 15, fat: 18 },
  
    // Snacks
    { name: 'Almonds', category: 'Snack', diet: 'Low Carb', calories: 160, protein: 6, carbs: 5, fat: 14 },
    { name: 'Carrot Sticks with Hummus', category: 'Snack', diet: 'Vegan', calories: 200, protein: 5, carbs: 20, fat: 10 },
    { name: 'Greek Yogurt with Berries', category: 'Snack', diet: 'Balanced', calories: 180, protein: 15, carbs: 20, fat: 4 },
    { name: 'Apple Slices with Peanut Butter', category: 'Snack', diet: 'Balanced', calories: 200, protein: 5, carbs: 25, fat: 8 },
    { name: 'Trail Mix', category: 'Snack', diet: 'Balanced', calories: 300, protein: 10, carbs: 30, fat: 18 },
    { name: 'Vegan Protein Bar', category: 'Snack', diet: 'Vegan', calories: 220, protein: 15, carbs: 25, fat: 6 },
    { name: 'Rice Cakes with Almond Butter', category: 'Snack', diet: 'Vegan', calories: 150, protein: 4, carbs: 20, fat: 8 },
    { name: 'Boiled Eggs', category: 'Snack', diet: 'Low Carb', calories: 140, protein: 12, carbs: 2, fat: 8 },
    { name: 'Chia Pudding', category: 'Snack', diet: 'Vegan', calories: 180, protein: 6, carbs: 20, fat: 10 },
    { name: 'Vegan Energy Balls', category: 'Snack', diet: 'Vegan', calories: 180, protein: 6, carbs: 20, fat: 8 },
    { name: 'Mixed Berries', category: 'Snack', diet: 'Vegan', calories: 100, protein: 2, carbs: 25, fat: 0 },
    { name: 'Cottage Cheese with Cucumber Slices', category: 'Snack', diet: 'Low Carb', calories: 150, protein: 15, carbs: 5, fat: 5 },
    { name: 'Dark Chocolate with Almonds', category: 'Snack', diet: 'Balanced', calories: 200, protein: 4, carbs: 20, fat: 12 },
    { name: 'Vegan Kale Chips', category: 'Snack', diet: 'Vegan', calories: 100, protein: 4, carbs: 10, fat: 6 },
    { name: 'Cucumber Slices with Guacamole', category: 'Snack', diet: 'Vegan', calories: 180, protein: 4, carbs: 12, fat: 14 },
    { name: 'Protein Shake', category: 'Snack', diet: 'Balanced', calories: 200, protein: 25, carbs: 10, fat: 2 },
    { name: 'Vegan Smoothie with Spinach and Banana', category: 'Snack', diet: 'Vegan', calories: 250, protein: 8, carbs: 40, fat: 5 },
    { name: 'Crispy Roasted Chickpeas', category: 'Snack', diet: 'Vegan', calories: 180, protein: 8, carbs: 25, fat: 6 },
    { name: 'Turkey Jerky', category: 'Snack', diet: 'Low Carb', calories: 150, protein: 20, carbs: 5, fat: 4 },
    { name: 'Almond Flour Crackers with Cheese', category: 'Snack', diet: 'Low Carb', calories: 180, protein: 8, carbs: 10, fat: 12 },
    { name: 'Vegan Edamame', category: 'Snack', diet: 'Vegan', calories: 150, protein: 15, carbs: 12, fat: 5 },
    { name: 'Frozen Yogurt with Blueberries', category: 'Snack', diet: 'Balanced', calories: 200, protein: 8, carbs: 35, fat: 5 },
    { name: 'Vegan Popcorn', category: 'Snack', diet: 'Vegan', calories: 100, protein: 3, carbs: 20, fat: 2 },
    { name: 'Beef Jerky', category: 'Snack', diet: 'Low Carb', calories: 150, protein: 25, carbs: 5, fat: 3 },
    { name: 'Vegan Sweet Potato Chips', category: 'Snack', diet: 'Vegan', calories: 200, protein: 2, carbs: 30, fat: 10 },
    { name: 'Coconut Yogurt with Berries', category: 'Snack', diet: 'Vegan', calories: 180, protein: 5, carbs: 25, fat: 8 },
    { name: 'Hard-Boiled Eggs with Avocado', category: 'Snack', diet: 'Low Carb', calories: 220, protein: 12, carbs: 5, fat: 18 },
    { name: 'Vegan Chocolate Almond Smoothie', category: 'Snack', diet: 'Vegan', calories: 250, protein: 10, carbs: 35, fat: 10 },
    { name: 'Vegan Zucchini Chips', category: 'Snack', diet: 'Vegan', calories: 120, protein: 4, carbs: 10, fat: 8 },
  ];
  

  const getRandomMeal = () => {
    const filteredMeals = recommendedMeals.filter((meal) => {
      const typeMatch = mealType === 'All' || meal.category === mealType;
      const dietMatch = dietType === 'All' || meal.diet === dietType;
      return typeMatch && dietMatch;
    });

    const randomIndex = Math.floor(Math.random() * filteredMeals.length);
    setMeal(filteredMeals[randomIndex]);
  };

  return (
    <div>
      <h2>Healthy Meal Recommendations</h2>

      {/* בחירת סוג הארוחה */}
      <div>
        <label>Select Meal Type: </label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>

      {/* בחירת סוג הדיאטה */}
      <div>
        <label>Select Diet Type: </label>
        <select value={dietType} onChange={(e) => setDietType(e.target.value)}>
          <option value="All">All</option>
          <option value="Vegan">Vegan</option>
          <option value="Low Carb">Low Carb</option>
          <option value="Balanced">Balanced</option>
        </select>
      </div>

      <button onClick={getRandomMeal}>Get a Meal Recommendation</button>

      {meal && (
        <div className="meal">
          <h3>{meal.name}</h3>
          <p>Category: {meal.category}</p>
          <p>Diet: {meal.diet}</p>
          <p>Calories: {meal.calories}</p>
          <p>Protein: {meal.protein}g</p>
          <p>Carbs: {meal.carbs}g</p>
          <p>Fat: {meal.fat}g</p>
        </div>
      )}
    </div>
  );
};

export default MealRecommendations;
