import React, { FC, useState }  from 'react';
import './App.css';
import Pizza from './models/Pizza';
import AddPizzaForm from './components/addPizzaForm';


const  App: FC = () => {
  const [pizzasList, setPizzasList]= useState<Pizza[]>([])
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }
  console.log("pizzasList", pizzasList)
  return (
    <div className="App">
   <div className='wrap'>
    <span className='heading'>
      Наша Пицеррия.
    </span>
    <AddPizzaForm addPizza = {addPizza}/>
   </div>
    </div>
  );
}

export default App;
