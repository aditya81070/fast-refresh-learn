import React from "react";
import FunctionalComponent from "./functional-component";
import ClassComponent from "./class-component";
function App() {
  return (
    <div>
      <h1>Parent is changed to both should rerender</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
