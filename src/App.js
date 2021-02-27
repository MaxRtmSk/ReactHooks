import "./App.css";
import React, { useState } from "react";
import { EffectExample1 } from "./components/EffectExample1";
import { StateExample1 } from "./components/StateExample1";
import { EffectExample2 } from "./components/EffectExample2";
import { RefExample1 } from "./components/RefExample1";
import { MemoExample1 } from "./components/MemoExample1";
import { MemoExample2 } from "./components/MemoExapmle2";
import { UseCallbackExample1 } from "./components/UseCallbackExample1";
import { ContextExample1 } from "./components/useContext/contextExample1/ContextExample1";
import { ContextExample2 } from "./components/useContext/contextExample2/ContextExample2";
import { ReducerExample1 } from "./components/useReducer/ReducerExample1";
import { CustomHookExample1 } from "./components/customHook/CustomHookExample1";


function App() {
  

  return (
    <div className="App">
      {/* <StateExample1/> */}

      {/* <EffectExample1/> */}
      {/* <EffectExample2/> */}

      {/* <RefExample1/> */}

      {/* <MemoExample1/> */}
      {/* <MemoExample2/> */}

      {/* <UseCallbackExample1/> */}

      {/* <ContextExample1/> */}
      {/* <ContextExample2/> */}

      {/* <ReducerExample1/> */}
      <CustomHookExample1/>
    </div>
  );
}

export default App;
