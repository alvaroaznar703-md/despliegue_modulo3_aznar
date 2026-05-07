import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from 'react-router-dom';
import { useCarritoStore } from "../store/CarritoStore";


export const DetallleProducto = () => {
    const { id } = useParams();
  const  { data: productos, cargando, error } = useFetch(`https://dummyjson.com/products/${id}`);
   if (cargando) return <h3>Cargando...</h3>;

   if (error) return <h3>Error</h3>;
    return (
    <div>
        <Link to="/">← Home</Link>

      <h1>{producto.title}</h1>

      <img src={producto.thumbnail}
        alt={producto.title}
      />

      <p>{producto.description}</p>

      <h2>${producto.price}</h2>
       <button onClick={agregarProducto}>
        Agregar producto
      </button>
      <button onClick={vaciarCarrito}>
        Vaciar carrito
      </button>


    </div>
  );
};




