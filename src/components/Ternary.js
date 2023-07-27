import React from "react";
import { useState } from "react";
import News from "./News";
import Dashboard from "./Dashboard";

export default function Ternary() {
  const [num, setNum] = useState(true);

  //   function opt() {
  //      var name="dfgh"
  //      console.log(name?"true":"false")

  //   }
  

  return (
    <div>
      {num ?  <Dashboard />:<News  />}

      <button style={{padding:'2px'}} onClick={() => setNum(!num)}>submit</button>
    </div>
  );
}
