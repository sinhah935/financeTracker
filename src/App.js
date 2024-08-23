import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>

    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;