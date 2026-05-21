import { useStore } from "../store/useStore";

function Dashboard() {
  const expenses = useStore((state) => state.expenses);

  return <h1>Total items: {expenses.length}</h1>;
}
export default Dashboard;
