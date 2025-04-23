import "./Logistica.css"
import { FormularioLogistica } from "../FormularioLogistica/FormularioLogistica";



export function Logistica(){

    return(
 

        <>
         <div className="container  mt-5 d-flex flex-column justify-content-center align-items-center"style={{ color: "#3E2723" }}><h1> Registrar Productos</h1></div>

            <section className="bannerl">
           

            

            </section>
            

        

            

            <section className="container-my-5 text-center">
                <section className="row p-5">

                <div className="col-12 col-md-6 align-self-center shadow p-5">
                        <p>Facilitamos el control y la gestión de tus productos textiles. Con nuestra plataforma, puedes registrar, clasificar y actualizar fácilmente cada producto, desde telas y materias primas hasta prendas terminadas. Mantén un inventario organizado, optimiza tu cadena de suministro y mejora la trazabilidad de cada artículo en tu negocio.</p>
                    </div>
                    <div className="col-6 col-md-6">
                        <h3>Logistica</h3>
                        <img src="../../../src/assets/proveedor.png" alt="foto" className="img-fluid" />
                    </div>
                   
                </section>
            </section>

            <section className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Ingresa los productos</h3>
                        <hr />
                        <p>En este apartado registramos la informacion de los productos recibidos!</p>
                        <FormularioLogistica></FormularioLogistica>
                    </div>
                </div>
            </section>
            
        </>
    )

}