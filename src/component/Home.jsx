import React from 'react'
import { useFetch } from "../hooks/useFetch";
import { CardProducto } from "../components/CardProducto";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const Home = () => {
  const { data: productos, cargando, error } = useFetch(API_URL);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Productos disponibles</h1>

      <div>
        {productos.map((producto) => (
          <CardProducto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

