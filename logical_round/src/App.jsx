import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logical from './components/ControlUncontrol'
import Array from './components/Array'
import Domain from './components/Domain'
import Debounce from './components/Debounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Debounce/>
    <Array/>
    <CUForm/>
    <Logical/>
    </>
  )
}

export default App
