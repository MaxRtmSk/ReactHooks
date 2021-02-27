import { useState, useMemo, useEffect } from "react";

/*Объекты и массивы в js хранятся по сылочной системе
  Когда мы вызываем рендер создается новый объект в данном случае это styled а useEffect смотрит за старым. Он видит что он изменился и по этому вызвает в useEffect callback. И useMemo может почь он возьмет и сохранит этот объект на след рендер.
  
  Хешировать постоянно все не надо потому что это какай-то код который может ударить по производительности
*/

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  console.log(num);
  while (i < 1000000000) i++;
  return num * 2;
}

export function MemoExample2() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? "darkred" : "black",
  }), [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles change");
  }, [styles]);

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
