import { useState } from "react";

function calcSumCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

export function StateExample1() {
  const [counter, setCounter] = useState(() => {
    return calcSumCounter();
  });

  function increment() {
    // setCounter(counter + 1) 
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Cчетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
    </div>
  );
}
