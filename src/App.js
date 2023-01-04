import React from 'react'
import Home from './home/Home'
import Login from './login/login'
import { Link, Route, Routes } from "react-router-dom";
import Contact from './contacts/Contact';
import {About} from './about/About';
import Footer from './footer/Footer';







function App() {
  return (
    <div> 
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/footer" element={<Footer/>}/>
      
      

    </Routes>

   

    </div>
  )
}

export default App