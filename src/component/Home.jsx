import React from 'react'
import { useFetch } from "../hooks/useFetch";
import { CardProductos } from "./CardProductos";
import styles from "./Home.module.css";


export const Home = () => {
  const { data: productos, cargando, error } = useFetch("https://dummyjson.com/products");

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1 className={styles.title}>Productos disponibles</h1>

      <div className={styles.div}>
        {productos.map((producto) => (
          <CardProductos
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

