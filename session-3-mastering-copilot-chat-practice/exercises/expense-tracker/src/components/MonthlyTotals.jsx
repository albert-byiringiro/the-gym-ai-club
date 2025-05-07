function MonthlyTotals({ monthlyTotals }) {
  if (!monthlyTotals || monthlyTotals.length === 0) {
    return null; // Don't render if there are no totals
  }

  return (
    <div className="my-6 p-4 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">
        Monthly Spending Totals
      </h2>
      <div className="space-y-2">
        {monthlyTotals.map(({ month, total }) => (
          <div key={month} className="flex justify-between items-center p-2 bg-white rounded shadow">
            <span className="text-gray-600">{month}:</span>
            <span className="font-semibold text-blue-600">${total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyTotals;
