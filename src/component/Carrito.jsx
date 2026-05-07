import { useCarritoStore } from "../store/CarritoStore";

export const Carrito = () => {
  const items= useCarritoStore((state)=>state.items);
  const eliminarProducto= useCarritoStore((state)=>state.eliminarProducto);
  const actulizarCantidad= useCarrtoStore((state)=>state.actulizarCantidad);
  const vaciarCarrito= useCarritoStore((state)=>state.vaciarCarrito);
  const totalItems= useCarritoStore((state)=>state.totalItems);
  const totalPrecio= useCarritoStore((state)=>state.totalPrecio);

  if(items.length===0){
    return(
        <div>
            <h3>🛒Mi Carrito</h3>
            <p>Este carrito se encuentra vacio</p>


        </div>

    );
  }
return(
    <div>
        <h3>🛒Mi Carrito ({totalItems()}items)</h3>
        {items.map((item)=>(
            <div key={item.id}>
                <span>{item.nombre}</span>
                <button onClick={()=>actulizarCantidad(item.id, item.cantidad - 1)}></button>
                <span>{item.cantidad}</span>
                <button onClick={()=>actulizarCantidad(item.id, item.cantidad + 1)}></button>

            </div>
        ))}
    </div>
);
};

