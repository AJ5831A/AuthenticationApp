import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import { Route , Routes , useLocation} from 'react-router-dom'
import About from './components/About'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const location = useLocation();
  const noNavbar = location.pathname === '/' || location.pathname === '/register'

  return (
    <>
      {
        noNavbar ?
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>

        :

        <Navbar content={
          <Routes>
            <Routes element={<ProtectedRoutes/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Routes>
        }/>
      }
      
      
    </>
  )
}

export default App
