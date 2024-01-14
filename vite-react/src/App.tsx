import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Heading title="hello" />
      <Section>section</Section>
      <Counter setCount={setCount}>
        <h1>Count is {count}</h1>
      </Counter>
      <List
        items={["c", "b"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
};

export default App;
