import { useState } from "react";
import axios from "axios";

export function RegistroProveedor() {
  const [formData, setFormData] = useState({
    nombres: "",
    documento: "",
    direccion: "",
    ciudad: "",
    representante: "",
    telefonoContacto: "",
    correo: "",
    fechaEnvio: "",
    costoEnvio: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/proveedor", formData);
      console.log("Proveedor registrado:", response.data);
    } catch (error) {
      console.error("Error al registrar proveedor:", error.response.data);
    }
  };

  return (
    <form className="border rounded p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="nombres"
          className="form-control"
          placeholder="Nombres"
          value={formData.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="documento"
          className="form-control"
          placeholder="Documento"
          value={formData.documento}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="direccion"
          className="form-control"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="ciudad"
          className="form-control"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="representante"
          className="form-control"
          placeholder="Representante"
          value={formData.representante}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="telefonoContacto"
          className="form-control"
          placeholder="Teléfono Contacto"
          value={formData.telefonoContacto}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="correo"
          className="form-control"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          name="fechaEnvio"
          className="form-control"
          placeholder="Fecha Envio"
          value={formData.fechaEnvio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="costoEnvio"
          className="form-control"
          placeholder="Costo Envio"
          value={formData.costoEnvio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="descripcion"
          className="form-control"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Enviar Registro
      </button>
    </form>
  );
}
