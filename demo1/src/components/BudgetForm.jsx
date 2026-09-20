import { useState } from "react";
import "./BudgetForm.css";

export default function BudgetForm({
  budget,
  setBudget,
  onAddExpense
}) {
  const [category, setCategory] = useState("Rent");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const categories = [
    "Rent",
    "Electricity",
    "Water",
    "Internet",
    "Food",
    "Transportation",
    "School",
    "Laundry",
    "Other"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    onAddExpense({
      category: category,
      amount: Number(amount),
      description: description || category
    });

    setAmount("");
    setDescription("");
  };

  return (
    <section className="card form-card">

      <div className="section-heading">
        <div className="heading-icon">
          💰
        </div>

        <div>
          <h2>Budget Settings</h2>
          <p>Set your monthly budget.</p>
        </div>
      </div>

      <label htmlFor="budget">
        Monthly Budget
      </label>

      <div className="budget-input">
        <span>₱</span>

        <input
          id="budget"
          type="number"
          min="0"
          value={budget}
          onChange={(event) =>
            setBudget(Number(event.target.value))
          }
        />
      </div>

      <hr />

      <div className="section-heading">
        <div className="heading-icon">
          ➕
        </div>

        <div>
          <h2>Add Expense</h2>
          <p>Record your boarding house expenses.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="category">
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="description">
          Description
        </label>

        <input
          id="description"
          type="text"
          placeholder="Example: Monthly rent"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />

        <label htmlFor="amount">
          Amount
        </label>

        <div className="amount-input">
          <span>₱</span>

          <input
            id="amount"
            type="number"
            min="1"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
          />
        </div>

        <button
          type="submit"
          className="add-button"
        >
          Add Expense
        </button>

      </form>

    </section>
  );
}