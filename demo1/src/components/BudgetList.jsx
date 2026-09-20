import "./BudgetList.css";

export default function BudgetList({
  expenses,
  onDelete
}) {
  const formatMoney = (amount) => {
    return `₱${Number(amount).toLocaleString("en-PH")}`;
  };

  const getIcon = (category) => {
    const icons = {
      Rent: "🏠",
      Electricity: "⚡",
      Water: "💧",
      Internet: "🌐",
      Food: "🍱",
      Transportation: "🚌",
      School: "📚",
      Laundry: "🧺",
      Other: "📦"
    };

    return icons[category] || "💰";
  };

  return (
    <section className="card list-card">

      <div className="list-heading">

        <div>
          <h2>Monthly Expenses</h2>
          <p>
            List of your recorded expenses.
          </p>
        </div>

        <span className="expense-count">
          {expenses.length} items
        </span>

      </div>

      {expenses.length === 0 ? (

        <div className="empty-state">
          <span>📝</span>

          <p>
            No expenses added yet.
          </p>

          <small>
            Add your first expense above.
          </small>
        </div>

      ) : (

        <div className="expense-list">

          {expenses.map((expense) => (

            <div
              className="expense-row"
              key={expense.id}
            >

              <div className="expense-icon">
                {getIcon(expense.category)}
              </div>

              <div className="expense-details">

                <h3>
                  {expense.category}
                </h3>

                <p>
                  {expense.description}
                </p>

              </div>

              <div className="expense-right">

                <strong>
                  {formatMoney(expense.amount)}
                </strong>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    onDelete(expense.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}