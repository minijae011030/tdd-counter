import { useCounterStore } from "../model/store";

export default function Counter({ initial = 0 }) {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increase()}>증가</button>
      <button onClick={() => decrease()}>감소</button>
      <button onClick={() => reset()}>재설정</button>
    </div>
  );
}
