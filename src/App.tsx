import React, { FC, useState } from "react";
import './App.css';
import Pizza from './models/Pizza';
import AddPizzaForm from './components/addPizzaForm';
import DisplayPizzas from "./components/displayPizzas";



const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map(pizza =>
      (pizza.id === newPizza.id ? newPizza : pizza)))
  }
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(item => item.id !== id)
    setPizzasList(newPizzasList)
  }
  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>
          Наша Пицеррия.
        </span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza} />
      </div>
    </div>
  );
}

export default App;
