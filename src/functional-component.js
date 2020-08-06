import React, { useState, useEffect, useRef } from "react";

function FunctionalComponent() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("barfoo");
  const [newCounter, setNewCounter] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    const inputElement = inputRef.current;
    const timer = setTimeout(() => {
      console.log("border change");
      if (inputElement) {
        inputElement.style.border = "1px solid blue";
      }
    }, 1000);
    return () => {
      console.log("cleanup");
      if (inputElement) {
        inputElement.style.border = "1px solid black";
      }
      clearTimeout(timer);
    };
  });
  const handleNewCounter = () => {
    setNewCounter(newCounter + 1);
  };
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>React fast refresh will preserve state</h2>
      <div>
        <button onClick={handleNewCounter}>Increase value</button>
        <p>{newCounter}</p>
      </div>
      <div>
        <button onClick={handleCounter}>Increase value</button>
        <p>{counter}</p>
      </div>
      <div>
        <label htmlFor="name">Enter First Name</label>
        <input value={value} onChange={handleInputChange} name="name" id="name" ref={inputRef} />
      </div>
    </div>
  );
}

export default FunctionalComponent;
