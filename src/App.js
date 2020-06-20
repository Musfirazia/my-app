import React, { useState } from 'react';
import './App.css';
import Message from './Message.js';
function App() {

let [count,setCount]=useState(1);
let [isMorning,setisMorning]=useState(true);
  return (
    <div className={`box${isMorning ? 'morning' :''}`} >
      <Message count={count} />
      <h1 >{isMorning ? 'Good Morning':'Good Evening'}</h1>
    <button onClick={()=>setCount(++count)}>  Update Button </button>
      <button onClick={()=>{setisMorning(!isMorning) }}>
      {isMorning ? 'morning':'Evening'}</button>
    </div>
  );
}

export default App;
