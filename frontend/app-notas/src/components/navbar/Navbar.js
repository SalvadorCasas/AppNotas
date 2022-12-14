import React from 'react';
//link que permite acceder a los enlaces de la ruta
import { Link } from "react-router-dom";

const Navbar=()=>{

    return(    
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link className="navbar-brand" to="#">
                Notas
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
                    <Link className="nav-link" to="/login">
                    Iniciar sesión
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/NoteList">
                    Lista Notas
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );

}

export default Navbar;

