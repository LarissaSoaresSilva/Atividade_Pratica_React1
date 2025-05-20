import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Este é o componente Home, que recebe props."
      />
      <hr />
      <Contador />
      <hr />
      <Tarefa />
      <hr />
      <Login />
    </>
  )
}

export default App
