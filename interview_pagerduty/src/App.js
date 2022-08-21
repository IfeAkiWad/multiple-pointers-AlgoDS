import React, {useState} from "react";
import './App.css';
import Dish from "./components/Dish";
import DishForm from "./components/DishForm";
import IngrFilter from "./components/IngrFilter";

const App = () => {
  const [dish, setDish] = useState([
    {name: 'Injera',
      ingredient: ['milk', 'flour', 'eggs']
    },
    {name: 'Akara',
    ingredient: ['milk', 'flour', 'eggs']
    },
    {name: 'Bandeja Paisa',
    ingredient: ['milk', 'flour', 'eggs']
    },
    {name: 'Tandoori Chicken',
    ingredient: ['milk', 'flour', 'eggs']
    },
    {name: 'Jolloff Rice',
    ingredient: ['pepper', 'tomato', 'onion']
    }
  ])

 
  const newDish = (name, ingredient) => {
    const newDish = [...dish, { name, ingredient: ingredient.split(',') }]
    setDish(newDish)
  }

  const removeDish = (index) => {
    const dishes = [...dish]
    dishes.splice(index, 1)
    setDish(dishes)
  }

  

  return (
    <div className="App">
      <IngrFilter dish={dish} />
      <br /><br />
      <h2>List of Dishes</h2> 
     
      {dish.map((dish, index) => <Dish key={index} 
        index={index} 
        dish={dish} 
        removeDish={removeDish}
      />
      )}<br />
      <h2>Add New Dish</h2>
        <DishForm  addNewDish={newDish}  dish={dish}  />
    </div>
  );
}

export default App;
