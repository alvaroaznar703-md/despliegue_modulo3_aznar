import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
        Home
        </Link>
        <Link to="/contacto" className={styles.link}>
        Contacto
        </Link>
        <Link to="/carrito" className={styles.link}>Carrito</Link>

    </nav>
  )
}
