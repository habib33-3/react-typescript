import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  userName: string;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {}, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTwo = useCallback(() => setCount((prev) => prev + 1), []);

  type fibFunc = (n: number) => number;

  const fib: fibFunc = useCallback((n) => {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const myNum: number = 37;

  const result = useMemo(() => fib(myNum), [fib]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        onClick={addTwo}
      >
        Add two
      </button>
      <h2>{result}</h2>
    </div>
  );
};

export default App;
