import React from 'react';
//link que permite acceder a los enlaces de la ruta
import { Link } from "react-router-dom";

const Navbar=()=>{

    return(    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" to="#">
                {/*titulo */}
                Notas
            </a>
            {/*se generaron botones*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/*Lista de botones*/}
                <ul className="navbar-nav">
                <li className="nav-item">
                    {/* Este link da un props con el first name y un to que permite definir a qué URL queremos que vaya. A cada link entonces que se agrega se le pone el nombre (en este caso home).*/}
                    <Link className="nav-link" to="/">
                    Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/UserRegister">
                    Registrarse
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/UserLogin">
                    Inciar sesión
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );

}

export default Navbar;

