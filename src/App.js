import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Account from './pages/Account'
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;