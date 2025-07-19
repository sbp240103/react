import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >hello world</h1>
      <Card username="hello world" obj={{a:"apple",b:"ball"}}/>
      <Card  obj={{a:"aeroplane",b:"basketball"}}/>
    </>
  )
}

export default App
