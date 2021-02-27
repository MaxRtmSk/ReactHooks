import React, { useContext, useReducer } from 'react'
import { useState } from "react";

const AlertContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
  switch (action.type){
    case SHOW_ALERT: return {...state, visibility: true, text: action.text}
    case HIDE_ALERT: return {...state, visibility: false}
    default: return state
  }
}

export const AlertProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    visibility: false,
    text: ''
  })

  const show = (text) => dispatch({
    type: SHOW_ALERT, text
  })

  const hide = () => dispatch({
    type: HIDE_ALERT
  })

  return (
  <AlertContext.Provider value={{
    visibility: state.visibility,
    text: state.text,
    show,
    hide
    }}>
    {children}
  </AlertContext.Provider>
  )
}