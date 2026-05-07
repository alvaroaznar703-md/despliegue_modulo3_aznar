import { create } from "zustand";

export const useCarritoStore = create((set, get) => ({
  items: [],

  agregarProducto: (producto) =>
    set((state) => {
      const existe = state.items.find(
        (item) => item.id === producto.id
      );

      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...producto, cantidad: 1 }],
      };
    }),

  eliminarProducto: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  vaciarCarrito: () => set({ items: [] }),

  actualizarCantidad: (id, cantidad) =>
    set((state) => {
      if (cantidad <= 0) {
        return {
          items: state.items.filter((item) => item.id !== id),
        };
      }

      return {
        items: state.items.map((item) =>
          item.id === id
            ? { ...item, cantidad }
            : item
        ),
      };
    }),
    incrementarCantidad: (id) =>
  set((state) => ({
    items: state.items.map((item) =>
      item.id === id
        ? {...item, cantidad: item.cantidad + 1}: item)
          
})),

decrementarCantidad: (id) =>
  set((state) => ({
    items: state.items
      .map((item) =>
        item.id === id
          ? {...item, cantidad: item.cantidad - 1}: item)
      
      .filter((item) => item.cantidad > 0),
  })),




  totalItems: () => {
    const { items } = get();
    return items.reduce((acc, item) => acc + item.cantidad, 0);
  },

  totalPrecio: () => {
    const { items } = get();
    return items.reduce(
      (acc, item) => acc + item.price * item.cantidad,
      0
    );
  },
}));
