import { useCarritoStore } from "../store/useCarritoStore";
import { Link } from "react-router-dom";

export const Carrito = () => {
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const totalItems = useCarritoStore((state) => state.totalItems);
  const totalPrecio = useCarritoStore((state) => state.totalPrecio);
  const incrementarCantidad = useCarritoStore((state) => state.incrementarCantidad);
  const decrementarCantidad = useCarritoStore((state) => state.decrementarCantidad);

  if (items.length === 0) {
    return (
      <div>
        <h2>🛒 Mi Carrito</h2>
        <p>El carrito está vacío</p>
        <Link to="/">← Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>🛒 Mi Carrito ({totalItems()} items)</h2>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>

          <button onClick={() => decrementarCantidad(item.id)}>-1</button>

          <span>{item.cantidad}</span>

          <button onClick={() => incrementarCantidad(item.id)}>+1</button>

          <button onClick={() => eliminarProducto(item.id)}>
            Eliminar
          </button>

          <hr />
        </div>
      ))}

      <h3>Total: ${totalPrecio()}</h3>

      <button onClick={vaciarCarrito}>
        Vaciar carrito
      </button>

      <br />

      <Link to="/">← Seguir comprando</Link>
    </div>
  );
};
