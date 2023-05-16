import React from "react";
import { TiDelete } from 'react-icons/ti'

export const ExpenseItem = (props) => {
    return (
        <li className="list-group-item d-flex justify">
            ${props.name}
            <div>
                <span className="badge badge-primary text-black">
                    ${props.cost}
                </span>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li>
    );
};