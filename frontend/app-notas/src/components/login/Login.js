import React, { useEffect, useState } from 'react'

import { useNavigate , useParams } from "react-router-dom";

// COMPONENTES
import * as LoginServer from './LoginServer.js'; 

const LoginForm = () =>{
    const history = useNavigate();
    const params = useParams();
    const initialState = { username: "", password: "", email: "", last_name: "", name: "" };
    const [ingreso, setIngreso] = useState(initialState);

    // GUARDA LA INFO DE LOS INPUTS
    const handleInputChange = (e) => {
        setIngreso({ ...ingreso, [e.target.name]: e.target.value });
        console.log(ingreso);
    };

    useEffect(() => {
    if (params.username) {
        setIngreso(params.username);
    }  // eslint-disable-next-line
    }, []);

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res;
          if (!params.username) {
            console.log("RES: ", ingreso);
            res = await LoginServer.loginUsuario(ingreso);
             console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.username !== '') {
              history("/");
              setIngreso(ingreso);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
      };



    return (
        <div className='containerPrincipal'>
          <div className='form-group'>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 my-2">
                <i className="fa fa-user"></i>
                <input type='text' className='form-control' name="username" id="username" placeholder="Usuario" value={ingreso.username} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6 my-2">
                <input type='text' className='form-control' name="name" id="name" placeholder="Nombre" value={ingreso.name} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6 my-2">
                <input type='text' className='form-control' name="last_name" id="last_name" placeholder="Apellido" value={ingreso.last_name} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6">
                <input type="email" className="form-control" name="email" id="email" value={ingreso.email} onChange={handleInputChange} required="required" placeholder="Email"/>
              </div>
              <div className="mb-6 my-2">
                <input type="password" name="password" id="password" value={ingreso.password} onChange={handleInputChange} className="form-control" required="required" placeholder='Contraseña'/>    
              </div>
              <br />
              <div className="mb-6 my-2">
                <button type="submit" className="btn btn-block btn-primary">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
    );
}

export default LoginForm;