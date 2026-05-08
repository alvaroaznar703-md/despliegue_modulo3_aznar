import React from "react";
import { useCarritoStore } from "../store/useCarritoStore";
import { useForm } from "react-hook-form";
import styles from "./Compras.module.css";
import { useNavigate } from "react-router-dom";

export const Compras = () => {
  const items = useCarritoStore((state) => state.items);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const totalPrecio = useCarritoStore((state) => state.totalPrecio);
  const navigate = useNavigate();

  const metodoPago = [
    { value: "cash", label: "Efectivo" },
    { value: "card", label: "Tarjeta de crédito" },
    { value: "transfer", label: "Transferencia bancaria" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const orden = {
      cliente: formData,
      items,
      total: totalPrecio(),
      fecha: new Date().toISOString(),
    };

    vaciarCarrito();
    reset();
     navigate("/compra-exitosa");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Finaliza tu compra</h2>
      <h3>Total: ${totalPrecio()}</h3>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.div}>
          <label>Nombre</label>
          <input
            type="text" placeholder="Ingresa tu Nombre"
            {...register("name", {
              required: "El campo es obligatorio",
            })}
          />
          {errors.name && <p className={styles.errores}>{errors.name.message}</p>}
        </div>

        <div className={styles.div}>
          <label>Email</label>
          <input
            type="email" placeholder="Ingresa tu Email"
            {...register("email", {
              required: "El campo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato inválido",
              },
            })}
          />
          {errors.email && (
            <p className={styles.errores}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.div}>
          <label>Método de pago</label>
          <select
            {...register("metodoPago", {
              required: "Seleccioná un método de pago",
            })}
          >
            <option value="">Seleccionar</option>
            {metodoPago.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>

          {errors.metodoPago && (
            <p className={styles.errores}>{errors.metodoPago.message}</p>
          )}
        </div>

        <button type="submit" className={styles.button}>Finalizar compra</button>
      </form>
      </div>
  );
};


