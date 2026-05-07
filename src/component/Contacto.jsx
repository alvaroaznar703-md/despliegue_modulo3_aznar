import React from 'react'
import { useForm } from 'react-hook-form';
import styles from "./Contacto.module.css";


export const Contacto = () => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm(); 

  const onSubmit = (formData) => {
    reset();
}
 return (    
    <div className={styles.container}>      
      <h2 className={styles.titulo}>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}className={styles.form}>
        <div className={styles.div}>
          <label>Nombre</label>
          <input 
            {...register("name", { required:"El campo es obligatorio" })}
            type="text"
          />
          {errors.name && <p className={styles.errores}>{errors.name.message}</p>}
        </div>
        <div className={styles.div}>
          <label>Email</label>
          <input 
            {...register("email", {
              required:"El campo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"Formato inválido"
              }
            })}
            type="email"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.div}>
          <label>Mensaje</label>
          <textarea 
            {...register("message", { required:"El campo es obligatorio" })}
          />
          {errors.message && <p className={styles.errores}>{errors.message.message}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );

};