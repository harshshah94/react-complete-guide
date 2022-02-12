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
  let expensesContent = <p>No expenses found.</p>;

  if (expensesByYear.length > 0) {
    expensesContent = expensesByYear.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

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
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
