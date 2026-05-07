import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from 'react-router-dom';
import { useCarritoStore } from "../store/useCarritoStore";
import styles from "./DetalleProducto.module.css";


export const DetalleProducto = () => {
    const { id } = useParams();
  const  { data: producto, cargando, error } = useFetch(`https://dummyjson.com/products/${id}`);
   const agregarProducto = useCarritoStore(
    (state) => state.agregarProducto
  );
   const vaciarCarrito = useCarritoStore(
    (state) => state.vaciarCarrito
  );


   if (cargando) return <h3>Cargando...</h3>;

   if (error) return <h3>Error</h3>;
    return (
    <div className={styles.div}>
        <Link to="/">← Home</Link>

      <h1 className={styles.title}>{producto.title}</h1>

      <img src={producto.thumbnail}
        alt={producto.title}
        className={styles.image}
      />

      <p className={styles.parrafo}>{producto.description}</p>

      <h2 className={styles.title}>${producto.price}</h2>
       <button onClick={()=> agregarProducto(producto)} className={styles.button}>
        Agregar producto
      </button>
      <button onClick={vaciarCarrito} className={styles.button}>
        Vaciar carrito
      </button>


    </div>
  );
};


