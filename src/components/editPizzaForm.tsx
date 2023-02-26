import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    heandleToogleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, heandleToogleEdit }) => {
    const [editPizza, setEditPizza] =
        useState<Pizza>(data);

    const heandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setEditPizza({ ...editPizza, [name]: value })
    }
    const heandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = editPizza;
        if (title && price && img) {
            updatePizza(editPizza)
            heandleToogleEdit()
        }


    }
    return (<form action="" onSubmit={heandleSubmit} className="edit-form">
        <input
            type="text"
            name="title"
            placeholder="Название"
            onChange={heandleChange}
            value={editPizza.title}
        />
        <input
            type="text"
            name="price"
            placeholder="Стоимость"
            onChange={heandleChange}
            value={editPizza.price}
        />
        <input
            type="text"
            name="img"
            placeholder="Изображение"
            onChange={heandleChange}
            value={editPizza.img}
        />
        <button type="submit"> Подтвердить</button>
    </form>);
}

export default EditPizzaForm;