import { useState, useCallback } from "react";
import ItemsList from "./itemsListUseCallback1";

//

export function UseCallbackExample1() {
  const [counter, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(counter).fill('').map((_,i) => `Элемент ${i + 1}`)
  }, [counter]);

  return (
    <>
      <h1 style={styles}>Число {counter}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Изменить
      </button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  );
}
