import React from "react";

const ExpenseChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const maxTotal = Math.max(...Object.values(categoryTotals));

  const chartData = Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    total,
    percentage: maxTotal > 0 ? (total / maxTotal) * 100 : 0,
  }));

  if (expenses.length === 0) {
    return (
      <div className="p-4 bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          Expense Distribution
        </h2>
        <p className="text-gray-500">No expenses to display.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">
        Expense Distribution
      </h2>
      <div className="space-y-2">
        {chartData.map(({ category, total, percentage }) => (
          <div key={category} className="flex items-center">
            <span className="w-1/4 text-sm text-gray-600">{category}</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-6">
              <div
                className="bg-blue-500 h-6 rounded-full text-xs flex items-center justify-end pr-2 text-white"
                style={{ width: `${percentage}%` }}
                title={`$${total.toFixed(2)}`}
              >
                ${total.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
