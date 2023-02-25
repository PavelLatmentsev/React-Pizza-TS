import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initstate = {
    title:"",
    price: "",
    img: ""
}
const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = 
    useState<{title:string, price:string, img:string}>(initstate);

const heandleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewPizza({...newPizza, [name]:value})
}
const heandleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {title, price, img} = newPizza;
    if (title && price && img) {
        addPizza({
            title,
            img,
            price: Number(price),
            id: Date.now()
        })
    }
    setNewPizza(initstate)

}
    return ( <form action="" onSubmit={heandleSubmit}>
        <input 
        type="text" 
        name="title" 
        placeholder="Название"
        onChange={heandleChange}
        value={newPizza.title}
        />
                <input 
        type="text" 
        name="price" 
        placeholder="Стоимость"
        onChange={heandleChange}
        value={newPizza.price}
        />
                       <input 
        type="text" 
        name="img" 
        placeholder="Изображение"
        onChange={heandleChange}
        value={newPizza.img}
        />
        <button type="submit"> + Добавить в меню</button>
    </form> );
}
 
export default AddPizzaForm;