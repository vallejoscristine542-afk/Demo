import "./BudgetSummary.css";

export default function BudgetSummary({
  budget,
  totalExpenses,
  remainingBudget
}) {
  const formatMoney = (amount) => {
    return `₱${amount.toLocaleString("en-PH")}`;
  };

  const progress =
    budget > 0
      ? Math.min((totalExpenses / budget) * 100, 100)
      : 0;

  return (
    <section className="card summary-card">

      <div className="summary-title">
        <span>📊</span>
        <h2>Budget Summary</h2>
      </div>

      <div className="summary-item">
        <p>Monthly Budget</p>
        <h3>
          {formatMoney(budget)}
        </h3>
      </div>

      <div className="summary-item">
        <p>Total Expenses</p>
        <h3 className="expense-value">
          {formatMoney(totalExpenses)}
        </h3>
      </div>

      <div className="summary-item remaining">

        <p>
          {remainingBudget < 0
            ? "Over Budget"
            : "Remaining Budget"}
        </p>

        <h3
          className={
            remainingBudget < 0
              ? "danger-value"
              : ""
          }
        >
          {formatMoney(
            Math.abs(remainingBudget)
          )}
        </h3>

      </div>

      <div className="progress-section">

        <div className="progress-label">
          <span>Budget Used</span>
          <strong>
            {Math.round(progress)}%
          </strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          ></div>
        </div>

      </div>

    </section>
  );
}