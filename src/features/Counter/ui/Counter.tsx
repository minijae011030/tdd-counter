import { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(0);

  return <div>Count: 0</div>;
}
