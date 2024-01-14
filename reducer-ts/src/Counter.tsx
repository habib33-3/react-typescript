import { ChangeEvent, ReactNode, useReducer } from "react";

type Props = {
  children: (num: number) => ReactNode;
};

const initialState = {
  count: 0,
  text: "",
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initialState,
  action: ReducerActionType
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

const Counter = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          onClick={decrement}
        >
          +
        </button>
      </div>
      <input
        type="text"
        title="form"
        onChange={handleTextInput}
        name=""
        id=""
      />
      <h1>{state.text}</h1>
    </>
  );
};

export default Counter;
