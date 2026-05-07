import React from 'react'
import {  BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Header } from './component/Header';
import { NavBar } from './component/NavBar';
import { Footer } from './component/Footer';
import { Contacto } from './component/Contacto';
import {Home} from "./component/Home";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>} />
        

      </Routes>
      <Footer />

      
      </BrowserRouter>

    </div>
  )
}
