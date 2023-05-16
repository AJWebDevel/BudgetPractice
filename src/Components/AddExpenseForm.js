import React from "react";
export const AddExpense = () => {
    return (
        <form>
            <div>
                <label>Name</label>
                <input required="required"
                    id="name"
                    type="text"
                    className="form-control">
                </input>
            </div>
            <div>
                <label>Cost</label>
                <input required="required"
                    id="cost"
                    type="text"
                    className="form-control">
                </input>
            </div>
            <div>
                <button type="button"> Save</button>
            </div>
        </form>
    )
}