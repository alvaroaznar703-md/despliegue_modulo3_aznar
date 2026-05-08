import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from 'react-router-dom';
import { useCarritoStore } from "../store/useCarritoStore";
import styles from "./DetalleProducto.module.css";
import { useNavigate } from "react-router-dom";


export const DetalleProducto = () => {
    const { id } = useParams();
  const  { data: producto, cargando, error } = useFetch(`https://dummyjson.com/products/${id}`);
   const agregarProducto = useCarritoStore(
    (state) => state.agregarProducto
  );
   
   const navigate = useNavigate();

   if (cargando) return <h3>Cargando...</h3>;

   if (error) return <h3>Error</h3>;
   return (
  <div className={styles.container}>
    <Link to="/">← Home</Link>

    <h1 className={styles.title}>{producto.title}</h1>

    <div className={styles.detalle}>
      
      <div className={styles.imagen}>
        <img
          src={producto.thumbnail}
          alt={producto.title}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.parrafo}>
          {producto.description}
        </p>

        <h2 className={styles.precio}>
          $ {producto.price}
        </h2>

        <div className={styles.botones}>
          <button className={styles.button}
  onClick={() => { agregarProducto(producto);
    navigate("/carrito");
  }}
>
  Agregar producto
</button>

        </div>
      </div>
    </div>
  </div>
);
}
