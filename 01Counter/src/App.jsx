import { useState } from 'react';
function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter value:{counter}</h1>
      <button
      onClick={addValue}
      >Add value:{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
