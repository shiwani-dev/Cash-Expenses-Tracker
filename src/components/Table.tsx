import { useStore } from "../store/useStore";

function Table() {
  const {
    input,
    setInput,
    expenses,
    editId,
    addExpense,
    updateExpense,
    startEdit,
    deleteExpense,
  } = useStore();

  return (
    <div>
      <h2>Expense Tracker</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expense"
      />

      {editId ? (
        <button onClick={updateExpense}>Update</button>
      ) : (
        <button onClick={addExpense}>Add</button>
      )}

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.text}

            <button onClick={() => startEdit(expense)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;
