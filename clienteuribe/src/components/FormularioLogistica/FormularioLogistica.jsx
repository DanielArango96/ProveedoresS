import { useState } from "react";
import axios from "axios";

export function FormularioLogistica() {
  const [formData, setFormData] = useState({
    nombreProveedor: "",
    nombreEncargado: "",
    correoEncargado: "",
    numeroContactoEncargado: "",
    productos: "",
    cantidad: "",
    numeroRecibo: "",
    detalles: "",
    transportadora: "",
    numeroGuia: "",
    fechaRecepcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el campo modificado es 'fechaRecepcion', formatea la fecha
    if (name === "fechaRecepcion") {
      // Convierte el formato de la fecha a YYYY-MM-DD
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/logistica", formData);
      console.log("Registro de logística guardado:", response.data);
    } catch (error) {
      console.error("Error al guardar registro de logística:", error.response.data);
    }
  };

  return (
    <form className="border rounded p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="nombreProveedor"
          className="form-control"
          placeholder="Nombre Proveedor"
          value={formData.nombreProveedor}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="nombreEncargado"
          className="form-control"
          placeholder="Nombre encargado"
          value={formData.nombreEncargado}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="correoEncargado"
          className="form-control"
          placeholder="Correo encargado"
          value={formData.correoEncargado}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="numeroContactoEncargado"
          className="form-control"
          placeholder="Número Contacto encargado"
          value={formData.numeroContactoEncargado}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="productos"
          className="form-control"
          placeholder="Productos"
          value={formData.productos}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="cantidad"
          className="form-control"
          placeholder="Cantidad"
          value={formData.cantidad}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="numeroRecibo"
          className="form-control"
          placeholder="Número Recibo"
          value={formData.numeroRecibo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="detalles"
          className="form-control"
          placeholder="Detalles"
          value={formData.detalles}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="transportadora"
          className="form-control"
          placeholder="Transportadora"
          value={formData.transportadora}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="numeroGuia"
          className="form-control"
          placeholder="Número Guía"
          value={formData.numeroGuia}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          name="fechaRecepcion"
          className="form-control"
          placeholder="Fecha de recepción"
          value={formData.fechaRecepcion}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar registro
      </button>
    </form>
  );
}
