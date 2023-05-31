import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from 'uuid';

export const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input required="required"
                    id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                </input>
            </div>
            <div>
                <label>Cost</label>
                <input required="required"
                    id="cost"
                    type="text"
                    className="form-control"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}>
                </input>
            </div>
            <div>
                <button type="button"> Save</button>
            </div>
        </form>
    )
}