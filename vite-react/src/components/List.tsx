import { ReactNode } from "react";

type Props<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};

const List = <T,>({ items, render }: Props<T>) => {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
