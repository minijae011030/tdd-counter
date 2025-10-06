import { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [counter, setCounter] = useState(initial);
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>증가</button>
    </div>
  );
}
