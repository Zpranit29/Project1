
import './App.css'
import React from 'react'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Customer from "./components/Customer"
import Home from "./components/Home"
import Login from "./components/Login"
function App() {
 

  return (
    <div >

     
     <Routes>
         <Route exact path='/' element={<Home/>}/>
        <Route path="/customer" element={<Customer/>} />
        <Route path="/login" element={<Login />} />
     </Routes>
    </div>
  )
}

export default App
