import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='container'>
      <h1 id='Titulo'>Formulario</h1>
      <Formulario></Formulario>
    </section>
  )
}

export default App
