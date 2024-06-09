import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from 'react-calendar'
import ReactCalender from './components/Calender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ReactCalender/>
    </>
  )
}

export default App
