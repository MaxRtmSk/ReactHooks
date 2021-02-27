import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import Main from "./Main";

export const AlertContext = React.createContext();

export const ContextExample1 = () => {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <div>
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlertContext.Provider>
  );
};
