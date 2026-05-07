import React from 'react'
import styles from "./Header.module.css";


export const Header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.titulo}>App de productos</h2>
    </div>
  )
}

