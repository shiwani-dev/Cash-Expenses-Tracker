import useTracker from "../hooks/useTracker";
import Table from "../components/Table";

function Tracker() {
  const {
    expenses,
    input,
    setInput,
    editId,
    addExpense,
    deleteExpense,
    startEdit,
    updateExpense,
  } = useTracker();

  return (
    <Table
      input={input}
      setInput={setInput}
      expenses={expenses}
      editId={editId}
      addExpense={addExpense}
      updateExpense={updateExpense}
      startEdit={startEdit}
      deleteExpense={deleteExpense}
    />
  );
}

export default Tracker;
