import { useEffect, useState } from "react";
import "./App.css";
import NewComponent from "./NewComponent";
function App() {
  const [count, setCount] = useState(0);
  const [typeOfInteger, setTypeOfInteger] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count > 0) {
      setTypeOfInteger("positive");
    } else if (count < 0) {
      setTypeOfInteger("negative");
    } else {
      setTypeOfInteger("zero");
    }
  }, [count]);

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{typeOfInteger}</h1>

      <NewComponent />
    </div>
  );
}

export default App;
