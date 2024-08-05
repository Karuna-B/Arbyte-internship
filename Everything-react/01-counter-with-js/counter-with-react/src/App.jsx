import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";

function App(){

  const [count,setCount]=useState(0);

  const addToCount=()=>{
    if(count<10){
      setCount(count+1);
    }
  };
  const subFromCount=()=>{
    if(count>0){
      setCount(count-1);
    }
  };
  return(
    <div>
      <h4>Current count is ...</h4>
      <h1>{count}</h1>
      <button onClick={subFromCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  )
}

export default App;