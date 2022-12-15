import React, { useEffect, useState } from 'react';

import { useNavigate , useParams } from "react-router-dom";

// COMPONENTES
import * as UserServer from './UserServer.js';

const UserReg = () => {
  const history = useNavigate();
  const params = useParams();

  const initialState = { id: 0, username: "", password: "", email: "", last_name: "", name: "" };

  const [user, setUser] = useState(initialState);

  const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res;
          if (!params.id) {
            res = await UserServer.registerUser(user);
            const data = await res.json();
            if (data.id !== 0) {
              setUser(initialState);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await UserServer.deleteUser(userId),
      data = await res.json(),
      {name, fundation, website} = data.company;
      
      setUser({name, fundation, website});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (params.id) {
      deleteUser(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return(
    <div className='containerPrincipal'>
          <div className='form-group'>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 my-2">
                <i className="fa fa-user"></i>
                <input type='text' className='form-control' name="username" id="username" placeholder="Usuario" value={user.username} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6 my-2">
                <input type='text' className='form-control' name="name" id="name" placeholder="Nombre" value={user.name} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6 my-2">
                <input type='text' className='form-control' name="last_name" id="last_name" placeholder="Apellido" value={user.last_name} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6">
                <input type="email" className="form-control" name="email" id="email" value={user.email} onChange={handleInputChange} required="required" placeholder="Email"/>
              </div>
              <div className="mb-6 my-2">
                <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} className="form-control" required="required" placeholder='Contraseña'/>    
              </div>
              <br />
              <div className="mb-6 my-2">
                <button type="submit" className="btn btn-block btn-primary">Registrarse</button>
              </div>
            </form>
          </div>
        </div>
  ) 
}

export default UserReg;