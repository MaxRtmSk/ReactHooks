import React, { useEffect, useState } from "react";

function useLogger(value){
  useEffect(()=>{
    console.log('Value changed:', {value})
    console.log(typeof value)
  }, [value])
}

function useInput(initialValue){
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}

export function CustomHookExample1(){
  // const [name, setName] = useState('')

  // const changeHandler = event => {
  //   setName(event.target.value)
  // }

  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
    <div>
      {/* <input type="text" value={input.value} onChange={input.onChange}/> */}
      <input type="text" {...input}/>
      <input type="text" {...lastName}/>
      <h1>{input.value}</h1>   
    </div>
  )
}