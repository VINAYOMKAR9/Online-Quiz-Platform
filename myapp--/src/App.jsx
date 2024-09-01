import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import Login from './components/Login'
import { UserProvider } from './components/UserContext'
import Productss from './Pages/Productss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Productss/>
    {/* <UserProvider>
     <Login/>
    </UserProvider> */}
    </>
  )
}

export default App
