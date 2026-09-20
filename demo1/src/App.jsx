import { useMemo, useState } from "react";
import BudgetHeader from "./components/BudgetHeader";
import BudgetForm from "./components/BudgetForm";
import BudgetSummary from "./components/BudgetSummary";
import BudgetList from "./components/BudgetList";
import "./App.css";

export default function App() {
  const [budget, setBudget] = useState(10000);
  const [expenses, setExpenses] = useState([]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (total, expense) => total + Number(expense.amount),
      0
    );
  }, [expenses]);

  const remainingBudget = budget - totalExpenses;

  const addExpense = (expense) => {
    setExpenses((oldExpenses) => [
      ...oldExpenses,
      {
        ...expense,
        id: Date.now()
      }
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((oldExpenses) =>
      oldExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <main className="app">
      <div className="container">

        <BudgetHeader />

        <section className="dashboard">

          <div className="main-column">

            <BudgetForm
              budget={budget}
              setBudget={setBudget}
              onAddExpense={addExpense}
            />

            <BudgetList
              expenses={expenses}
              onDelete={deleteExpense}
            />

          </div>

          <div className="side-column">

            <BudgetSummary
              budget={budget}
              totalExpenses={totalExpenses}
              remainingBudget={remainingBudget}
            />

            <section className="tips-card">

              <div className="tips-header">
                <span>💡</span>

                <div>
                  <h2>Boarding House Tips</h2>
                  <p>
                    Manage your monthly expenses wisely.
                  </p>
                </div>
              </div>

              <div className="tip">
                <span>01</span>
                <p>
                  Pay your rent and utilities first.
                </p>
              </div>

              <div className="tip">
                <span>02</span>
                <p>
                  Set a weekly budget for food.
                </p>
              </div>

              <div className="tip">
                <span>03</span>
                <p>
                  Keep some money for emergencies.
                </p>
              </div>

            </section>

          </div>

        </section>

      </div>
    </main>
  );
}