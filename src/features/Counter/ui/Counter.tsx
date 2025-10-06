import { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </div>
  );
}
