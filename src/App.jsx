import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { NavBar } from './component/NavBar';
import { Footer } from './component/Footer';
import { Contacto } from './component/Contacto';
import { Home } from "./component/Home";
import { DetalleProducto } from './component/DetalleProducto';
import { Carrito } from './component/Carrito';
import { Compras } from './component/Compras';
import { CompraExitosa } from './page/CompraExitosa';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

