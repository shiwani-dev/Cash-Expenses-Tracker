import useTracker from "../hooks/useTracker";

type Expense = {
  id: number;
  text: string;
};

function Tracker({
  expenses,
  setExpenses,
  input,
  setInput,
  editId,
  setEditId,
}) {
  const { expenses, input, editId, setExpenses, setInput, setEditId } =
    useTracker();

  const addExpense = () => {
    if (!input.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      text: input,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const startEdit = (expense: Expense) => {
    setInput(expense.text);
    setEditId(expense.id);
  };

  const updateExpense = () => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === editId ? { ...expense, text: input } : expense,
      ),
    );
    setEditId(null);
    setInput("");
  };
}

export default Tracker;
