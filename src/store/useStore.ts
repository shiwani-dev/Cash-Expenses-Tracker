import { create } from "zustand";

export type Expense = {
  id: number;
  text: string;
  food: string;
  price: number;
  date: Date;
};

type Store = {
  expenses: Expense[];
  input: string;
  food: string;
  price: number;
  date: Date;
  editId: number | null;

  setInput: (value: string) => void;
  setFood: (value: string) => void;
  setPrice: (value: number) => void;
  setDate: (value: Date) => void;

  addExpense: () => void;
  deleteExpense: (id: number) => void;
  startEdit: (expense: Expense) => void;
  updateExpense: () => void;
};

export const useStore = create<Store>((set, get) => ({
  expenses: [],
  input: "",
  food: "",
  price: 0,
  date: new Date(),
  editId: null,

  setInput: (value) => set({ input: value }),
  setFood: (value) => set({ food: value }),
  setPrice: (value) => set({ price: value }),
  setDate: (value) => set({ date: value }),

  addExpense: () => {
    const { input, food, price, date, expenses } = get();
    if (!input.trim()) return;

    const newExpense: Expense = {
      id: Date.now(),
      text: input,
      food: food,
      price: price,
      date: date,
    };

    set({
      expenses: [...expenses, newExpense],
      input: "",
      food: "",
      price: 0,
      date: new Date(),
    });
  },

  deleteExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),

  startEdit: (expense) =>
    set({
      input: expense.text,
      food: expense.food,
      price: expense.price,
      date: expense.date,
      editId: expense.id,
    }),

  updateExpense: () => {
    const { expenses, editId, input, food, price, date } = get();

    set({
      expenses: expenses.map((e) =>
        e.id === editId
          ? { ...e, text: input, food: food, price: price, date: date }
          : e,
      ),
      editId: null,
      input: "",
      food: "",
      price: 0,
      date: new Date(),
    });
  },
}));
