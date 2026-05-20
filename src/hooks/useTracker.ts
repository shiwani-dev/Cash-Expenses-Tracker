import { useState } from "react";

export type Expense = {
  id: number;
  text: string;
};

function useTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

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

  return {
    expenses,
    setExpenses,
    input,
    setInput,
    editId,
    setEditId,
    addExpense,
    deleteExpense,
    startEdit,
    updateExpense,
  };
}

export default useTracker;
