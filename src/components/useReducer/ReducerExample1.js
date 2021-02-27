import React from "react";
import { useState } from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import Main from "./Main";



export const ReducerExample1 = () => {

  return (
    <AlertProvider>
      <div>
        <Alert />
        <Main toggle={()=>{}} />
      </div>
    </AlertProvider>
  );
};
