import React from "react";

export const CardProductos = ({ producto }) => {
  return (
    <div style={styles.card}>
      <img
        src={producto.thumbnail}
        alt={producto.title}
        style={styles.img}
      />

      <div style={styles.info}>
        <h3>{producto.title}</h3>
        <p>${producto.price}</p>
        <p style={styles.category}>{producto.category}</p>
      </div>
    </div>
  );
};
