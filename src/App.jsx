import './App.css'
import AboutLittleLemon from './AboutLittleLemon'
import HomePage from './HomePage'
import Contact from './Contact';
import Login from './Login';
import Loginout from './Login out';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";


function App() {


  return (
    <>
      <nav>
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/"className='nav-item'>Contact</Link>
        <Link to="/"ClassName='nav-item '>Login</Link>
        <Link to="/"ClassName='nav-item' >Login out</Link>
      </nav>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutLittleLemon />}></Route>
          <Route path="/"element={<Contact/>}></Route>
          <Route path="/"element={<Login/>}></Route>
          <Route path='/'element={<Loginout/>}></Route>
      </Routes>
    </>
  )
}

export default App
