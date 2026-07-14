import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addvehicle from './components/Addvehicle'
import Viewbooking from './components/Viewbooking'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
            


      <Route path='/' element={<Addvehicle/>} />
      <Route path='/viewall' element={<Viewbooking/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
