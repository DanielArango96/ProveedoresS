export function FormularioLogistica() {
    return (
      <>
        <form className="border rounded p-5 ">
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombre Proveedor" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombre encargado" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Correo encargado" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Numero Contacto encargado" />
          </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Productos" />
          </div>
          <div className="mb-3">
            <input type="int" className="form-control" placeholder="Cantidad" />
          </div>
          <div className="mb-3">
            <input type="date" className="form-control" placeholder="Numero Recibo" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Detalles" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Transportadora" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Numero Guia" />
          </div>
          <div className="mb-3">
            <input type="date" className="form-control" placeholder="Fecha de recepción" />
          </div>
         
        
          <button className="btn btn-primary">Guardar registro</button>
        </form>
      </>
    );
  }
  