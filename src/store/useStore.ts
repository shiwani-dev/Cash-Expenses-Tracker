import { create } from "zustand";

export type Expense = {
  id: number;
  text: string;
};

type Store = {
  expenses: Expense[];
  input: string;
  editId: number | null;

  setInput: (value: string) => void;

  addExpense: () => void;
  deleteExpense: (id: number) => void;
  startEdit: (expense: Expense) => void;
  updateExpense: () => void;
};

export const useStore = create<Store>((set, get) => ({
  expenses: [],
  input: "",
  editId: null,

  setInput: (value) => set({ input: value }),

  addExpense: () => {
    const { input, expenses } = get();
    if (!input.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      text: input,
    };

    set({
      expenses: [...expenses, newExpense],
      input: "",
    });
  },

  deleteExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),

  startEdit: (expense) =>
    set({
      input: expense.text,
      editId: expense.id,
    }),

  updateExpense: () => {
    const { expenses, editId, input } = get();

    set({
      expenses: expenses.map((e) =>
        e.id === editId ? { ...e, text: input } : e,
      ),
      editId: null,
      input: "",
    });
  },
}));
