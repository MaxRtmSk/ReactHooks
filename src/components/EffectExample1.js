import { useState, useEffect } from "react";

export function EffectExample1() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("useEffect", type);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

      return () => {
        console.log('срабатывает каждый раз когда очишается')
        console.log('clean type')
      }
  }, [type]);

  useEffect(() => {
    console.log("ComponentDidMount когда педаем пустой массив в useEffect");
    
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Посты</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
