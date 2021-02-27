import { useState, useMemo } from "react";

//

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0;
  console.log(num);
  while (i < 1000000000) i++;
  return num * 2;
}

export function MemoExample1() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  return (
    <>
      <h1 style={styles}>Число {computed}</h1>
      <button onClick={() => setNumber((prev) => +prev + 1)}>+</button>
      <button
        onClick={() =>
          setNumber((prev) => {
            return prev - 1;
          })
        }
      >
        -
      </button>
      <button onClick={() => setColored((prev) => !prev)}>изменить</button>
    </>
  );
}
