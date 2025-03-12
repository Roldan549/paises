import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Buscar } from './components/Buscar'
import { Mostrar } from './components/Mostrar'

function App() {
  const [pais, setpais] = useState("")
  return (
    <>
      <Buscar guardarpais={setpais}/>
      <Mostrar nombre={pais}/>
    </>
  )
}

export default App
