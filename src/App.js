import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Budget } from "./Components/Budget";
import { Remaining } from "./Components/Remaining";
import { Total } from "./Components/Total";
import { ExpenseList } from "./Components/ExpenseList";
import { AddExpense } from "./Components/AddExpenseForm";
import { AppProvider } from './Context/AppContext';

export const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">HBIC</h1>
        <h3>Head Budget In Charge</h3>
        <div className="row mt-2">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div>
            <Total />
          </div>
        </div>
        <h2 className="mt-3">Expenses</h2>
        <div>
          <div>

            {/* <ExpenseList /> */}
          </div>
        </div>
        <h2>Add Expense</h2>
        <div>
          <div>
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>

  );
};

