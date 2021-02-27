import React from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import Main from "./Main";



export const ContextExample2 = () => {

  return (
    <AlertProvider>
      <div>
        <Alert />
        <Main toggle={()=>{}} />
      </div>
    </AlertProvider>
  );
};
