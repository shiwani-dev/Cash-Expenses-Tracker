type Expense = {
  id: number;
  text: string;
};

type TableProps = {
  input: string;
  setInput: (value: string) => void;
  expenses: Expense[];
  editId: number | null;
  addExpense: () => void;
  updateExpense: () => void;
  startEdit: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
};

function Table({
  input,
  setInput,
  expenses,
  editId,
  addExpense,
  updateExpense,
  startEdit,
  deleteExpense,
}: TableProps) {
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
