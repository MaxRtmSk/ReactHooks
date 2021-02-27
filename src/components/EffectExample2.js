import { useState, useEffect } from "react";

export function EffectExample2() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    
    //удаление через return
    return()=>{
      window.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
