import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Buscar } from './components/Buscar'

function App() {
  const [pais, setpais] = useState("")
  console.log(pais)
  return (
    <>
      <Buscar guardarpais={setpais}/>
    </>
  )
}

export default App
