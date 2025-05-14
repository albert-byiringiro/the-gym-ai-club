import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import MonthlyTotals from "./components/MonthlyTotals"; // Added import
import ExpenseChart from "./components/ExpenseChart"; // Added import

function App() {
  const [expenses, setExpenses] = useState(() => {
    const localData = localStorage.getItem("expenses");
    return localData
      ? JSON.parse(localData)
      : [
          {
            id: uuidv4(),
            title: "Groceries",
            amount: 45.75,
            date: "2025-04-15",
            category: "Food",
          },
          {
            id: uuidv4(),
            title: "Gas",
            amount: 30.0,
            date: "2025-04-16",
            category: "Transport",
          },
          {
            id: uuidv4(),
            title: "Restaurant",
            amount: 65.2,
            date: "2025-04-18",
            category: "Food",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const addExpense = (expense) => {
    const newExpense = {
      id: uuidv4(),
      ...expense,
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (startDateFilter && new Date(expense.date) < new Date(startDateFilter)) {
      return false;
    }
    if (endDateFilter && new Date(expense.date) > new Date(endDateFilter)) {
      return false;
    }
    return true;
  });

  const calculateMonthlyTotals = () => {
    const monthlyData = {};
    filteredExpenses.forEach((expense) => {
      const month = new Date(expense.date).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month] += expense.amount;
    });
    return Object.entries(monthlyData).map(([month, total]) => ({
      month,
      total,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Expense Tracker
      </h1>
      <ExpenseForm onAddExpense={addExpense} />
      <div className="my-6 p-4 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          Filter Expenses by Date
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDateFilter}
              onChange={(e) => setStartDateFilter(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDateFilter}
              onChange={(e) => setEndDateFilter(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />
      <MonthlyTotals monthlyTotals={calculateMonthlyTotals()} />{" "}
      <ExpenseChart expenses={filteredExpenses} />{" "}
      {/* Added ExpenseChart component */}
    </div>
  );
}

export default App;
