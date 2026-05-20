function Table({
  input,
  setInput,
  expenses,
  editId,
  addExpense,
  updateExpense,
  startEdit,
  deleteExpense,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  expenses: Expense[];
  editId: number | null;
  addExpense: () => void;
  updateExpense: () => void;
  startEdit: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
}) {
  return (
    <div className="p-4">
      <div>
        <h1>Expense CRUD App</h1>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter expense text"
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
    </div>
  );
}
export default Table;
