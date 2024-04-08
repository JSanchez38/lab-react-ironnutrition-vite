import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json'
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson)

  const handleDeleteEvent = (event) => {
    setFoods(foods.filter(e => e.id !== event.id))
  }

  const handleCreate = (event) => {
    setFoods([...foods, event])
  }

  return (
  <>
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
    <div>
      <AddFoodForm onCreate={handleCreate} />
    </div>

    <div>
    {foods.map((food) => (
      <FoodBox key={food.id} food={food} onDelete={handleDeleteEvent}/>
    ))}
    </div>
  </>
  );
}

export default App;
