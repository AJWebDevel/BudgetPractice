import React, { useState } from "react";
export const AddExpense = () => {
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        alert('name' + name + 'cost' + cost)
    }
    return (
        <form>
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
                <button type="button" onClick={onSubmit}> Save</button>
            </div>
        </form>
    )
}