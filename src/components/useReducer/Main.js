import React from 'react'
import {useAlert} from "./alert/AlertContext";

export default function Main(){
  const {show} = useAlert()
  return (
    <>
      <h1>Привет</h1>
      <button onClick={()=> show('Этот текст из Main')}>Показать alert </button>
    </>
  )
}