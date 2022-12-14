// DEPENDENCIAS
import React, { useEffect, useState } from "react";
import { Navigate , useParams } from "react-router-dom";
// useHistory no se utiliza mas

import * as UserServer from './UserServer'
//import UserList from "./UserList";


// COMPONENTE
const UserReg = () => {
    // VARIABLES DEL COMPONENTE
    const history = Navigate();
    const params = useParams();
    
    // ESTADO INICIAL
    const initialState = { id: 0, username:"", name: "",last_name:"", email: "example@email.com", password: "" };
  
    // HOOKS - setUsuario nos permite modificar el estado del usuario
    const [user, setUser] = useState(initialState);
  
    // MANEJO DE LOS CAMBIOS Y SE UTILIZA EN EL ONCHANGE DEL INPUT
    const handleInputChange = (e) => {
      //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN USUARIO Y RENDERIZA EN EL INPUT
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    // ENVIO DEL FORMULARIO QUE LA DECLARAMOS EN EL onSubmit DEL FORM que enviara el usuario al servidor para grabarlo en la base de datos
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res;
        if (!params.id) {
          res = await UserServer.registerUser(user);
          const data = await res.json();
          console.log("Data: ",data);
          if (data.id !== 0) {
            setUser(initialState);
          }
        } else {
        }
         history("/");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getUser = async (userId) => {
      try {
        const res = await UserServer.getUser(userId);
        const data = await res.json();
        const { name, foundation, website } = data.company;
        setUser({ name, foundation, website });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (params.id) {
        getUser(params.id);
      }
      // eslint-disable-next-line
    }, []);
     
    // SALIDA HTML
    return (
      <>
      <div className="col-md-3 mx-auto">
        <h2 className="mb-3 text-center">Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>
          <div className="mb-3">
            <label className="form-label"> Nombre</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>
          <div className="mb-3">
            <label className="form-label"> Apellido </label>
            <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>
          <div className="mb-3">
            <label className="form-label"> Email </label>
            <input type="email" name="email" value={user.email} placeholder="name@example.com" onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5">Password</label>
              <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} className="form-control" aria-describedby="passwordHelpBlock"/>
          </div>
          <div className="d-grid gap-2">
            {params.id ? (
              <button type="submit" className="btn btn-block btn-primary">
                Update
              </button>
            ) : (
              <button type="submit" className="btn btn-block btn-success">
                Registro
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="row col-md-10 mx-auto">
      </div>
      </>

    );
  };

  export default UserReg;