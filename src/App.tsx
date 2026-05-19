function App() {
  const name = "TypeScript";
  const age = 2024 - 2012;
  const isLearning = true;
  return (
    <div className="App">
      <h1>TypeScript Learning</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Learning: {isLearning.toString()}</p>
    </div>
  );
}
export default App;
