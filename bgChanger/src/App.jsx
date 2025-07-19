import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Card colors="blue"/>
      <Card colors="yellow"/>
      <Card colors="pink"/>
      <Card colors="red"/>
      <Card colors="green"/>
      <Card colors="purple"/>
      <Card colors="gray"/>
      <Card colors="indigo"/>
   </>
  )
}

export default App
