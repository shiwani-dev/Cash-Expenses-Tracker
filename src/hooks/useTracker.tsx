import { useState } from "react";

function useTracker({
  expenses,
  setExpenses,
  input,
  setInput,
  editId,
  setEditId,
}) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
}
export default useTracker;
