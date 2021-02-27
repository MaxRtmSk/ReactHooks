import React from 'react'
import {useAlert} from "./alert/AlertContext";

export default function Main(){
  const {toggle} = useAlert()
  return (
    <>
      <h1>Привет</h1>
      <button onClick={toggle}>Показать alert </button>
    </>
  )
}