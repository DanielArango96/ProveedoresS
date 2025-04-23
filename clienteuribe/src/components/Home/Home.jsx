import "./Home.css"
import { RegistroProveedor } from "../RegistroProveedor/RegistroProveedor"
export function Home(){

    return(

        <>
         <div className="container  mt-5 d-flex flex-column justify-content-center align-items-center"style={{ color: "#3E2723" }}><h1> Registrar Proveedor</h1></div>

            <section className="banner">

            </section>

            

            <section className="container-my-5 text-center">
                <section className="row p-5">
                    <div className="col-12 col-md-6">
                        <h3>ProveedorAPP</h3>
                        <img src="../../../src/assets/fondo2.png" alt="foto" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 align-self-center shadow p-5">
                        <p>Nuestra plataforma está diseñada para optimizar la gestión de proveedores en la industria textil. Con ProveedorAPP, puedes registrar, organizar y supervisar fácilmente a todos tus proveedores, asegurando un flujo de trabajo eficiente y una cadena de suministro confiable. Conéctate con los mejores fabricantes, controla pedidos y mejora la trazabilidad de tus insumos en un solo lugar.</p>
                    </div>
                </section>
            </section>

            <section className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Registrate como proovedor</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sint ipsam, quod quaerat iusto, cum cumque autem dicta rerum, laboriosam adipisci. Optio ipsa modi magni molestias. Quaerat maxime nesciunt repellat!</p>
                        <RegistroProveedor></RegistroProveedor>
                    </div>
                </div>
            </section>
            
        </>
    )

}