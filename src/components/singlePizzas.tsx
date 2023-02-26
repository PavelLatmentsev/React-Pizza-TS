import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import EditPizzaForm from "./editPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const heandleToogleEdit = () => {
        setEdit(prevState => !prevState)
    }
    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} р</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={heandleToogleEdit} />
                <AiFillDelete onClick={() => deletePizza(pizza.id)} />
            </div>
            {edit
                ? <EditPizzaForm data={pizza} updatePizza={updatePizza} heandleToogleEdit={heandleToogleEdit} />
                : null}
        </div>
    );
}

export default SinglePizza;