import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2019");

  const yearChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const expensesByYear = props.expenseItems.filter((expense) => {
    return enteredYear === new Date(expense.date).getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYear}
          onYearChange={yearChangeHandler}
        />
        {expensesByYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
