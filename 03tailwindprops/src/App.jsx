import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
// Created a whole new component - Card.jsx like App.jsx so that it can be used multiple times without writting its code
// We can pass argument in the card component when we are returning it for rendering(as Card has props argument which can recive all the arguments passed to it)
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  } //will be passed as obj = {myObj}
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App
