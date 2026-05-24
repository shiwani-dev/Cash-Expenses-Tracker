import { useStore } from "../store/useStore";

function Table() {
  const {
    input,
    setInput,
    food,
    setFood,
    price,
    setPrice,
    date,
    setDate,

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

      <input
        value={price}
        type="number"
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
      />

      <input
        value={food}
        onChange={(e) => setFood(e.target.value)}
        placeholder="Food"
      />

      <input
        type="date"
        value={date.toISOString().split("T")[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
        placeholder="Date"
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

/* import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
 */
