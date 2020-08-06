import React from "react";
import FunctionalComponent from "./functional-component";
import ClassComponent from "./class-component";
function App() {
  return (
    <div>
      <h1>Parent content will not affect child </h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
