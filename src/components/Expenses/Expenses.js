import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
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
        {/* {expensesByYear.length === 0 && <p>No expenses found.</p>}
        {expensesByYear.length > 0 &&
          expensesByYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpenseList items={expensesByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
