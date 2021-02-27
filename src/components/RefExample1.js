import { useState, useEffect, useRef } from "react";

export function RefExample1() {
  const [value, setValue] = useState('initial')
  const countRef = useRef(1)
  const inputRef = useRef('null')
  const prevValue = useRef('')

  useEffect(()=>{
    countRef.current++
    console.log(inputRef.current.value)
  })

  useEffect(()=>{
    prevValue.current = value
  },[value])

  const focus =()=> inputRef.current.focus()
  

  return(
    <div>
      {countRef.current}
      <input ref={inputRef} type={'text'} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
      <button onClick={focus}>Фокус</button>
      <p>Превидушее значение value: {prevValue.current}</p>
    </div>
  )
}
