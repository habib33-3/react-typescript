import { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  children: ReactNode;
  setCount: Dispatch<SetStateAction<number>>;
};

const Counter = ({ children, setCount }: Props) => {
  return (
    <div>
      {children}

      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
