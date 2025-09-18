import { useState } from 'react'
import './App.css'
import Landingpage from './pages/Landingpage'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Landingpage/>
        
    </>
  )
}

export default App
