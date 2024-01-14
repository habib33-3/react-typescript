import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter>{(num: number) => <>Current:{num}</>}</Counter>
    </div>
  );
};

export default App;
