import { useState } from 'react'

import './App.css'

function App() {

  const [counter , setCounter] = useState(9)

  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
  }

  // let counter = 9
  // const addValue = () => {
  //   counter += 1
  //   console.log(counter)
  // }

  return (
    <>
      <h1>React with Viraj : {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
        >Add value</button> {" "}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
