import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Movies} from "./Movies.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Movies!</h1>
        <Movies />
    </>
  )
}

export default App
