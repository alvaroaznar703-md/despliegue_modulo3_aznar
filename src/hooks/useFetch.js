import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }

        const json = await respuesta.json();
        setData(json.products);
      } catch (error) {
        setError(error);
      } finally {
        setCargando(false);
      }
    };

    fetchDatos();
  }, [url]);

  return { data, cargando, error };
};
