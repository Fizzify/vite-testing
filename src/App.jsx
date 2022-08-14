import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        count: {count}
      </button>
    </>
  );
}

export default App;
