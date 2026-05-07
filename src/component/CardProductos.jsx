import React from "react";
import { Link } from "react-router-dom";
import { useCarritoStore } from "../store/useCarritoStore";
import styles from "./CardProductos.module.css";

export const CardProductos = ({ producto }) => {
  const agregarProducto = useCarritoStore((state) => state.agregarProducto);
  return (
    <div className={styles.card}>
      <img
        src={producto.thumbnail}
        alt={producto.title}
        className={styles.image}
      />

      <div>
        <h3 className={styles.title}>{producto.title}</h3>
        <p className={styles.description}>{producto.description}</p>
        <p className={styles.price}>${producto.price}</p>
        <button className={styles.button} onClick={() =>
            agregarProducto(producto)
          }
        >
          Agregar
        </button>
        <Link to={`/producto/${producto.id}`} className={styles.link}>Ver detalle</Link>
      </div>
    </div>
  );
};
