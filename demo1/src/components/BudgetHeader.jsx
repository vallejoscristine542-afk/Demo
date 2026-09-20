import "./BudgetHeader.css";

export default function BudgetHeader() {
  return (
    <header className="budget-header">
      <div className="header-icon">
        🏠
      </div>

      <div>
        <p className="header-label">
          APARTMENT & BOARDING HOUSE
        </p>

        <h1>My Boarding House Budget</h1>

        <p className="header-description">
          Track your monthly budget and daily expenses easily.
        </p>
      </div>
    </header>
  );
}