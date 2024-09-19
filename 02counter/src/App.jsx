import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//We made a function named addValue which updares the value of counter everytime button is clicked
//When we checked, the updation was happening in the consolei.e. our JS output screen but it wasn't ahappening in the UI
//To enable this change React uses hooks useState(makes the update in all the places of UI where we have the given variable)
function App() {

  const [counter, setCounter]  = useState(15) // -> userState takes default value
  //returns an array of size 2, 0th contains variable and 1st is function

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1 OR setCounter(counter)
    //setCounter(counter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
