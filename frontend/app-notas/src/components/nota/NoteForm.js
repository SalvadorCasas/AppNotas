import React, { useEffect, useState } from 'react';

import { useNavigate , useParams } from "react-router-dom";

// COMPONENTES
import * as NoteServer from './NoteServer';

const NoteForm = () => {
  const history = useNavigate();
  const params = useParams();

  const initialState = { id: 0, title: "", description: "" };

  const [note, setNote] = useState(initialState);

  const handleInputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res;
          if (!params.id) {
            res = await NoteServer.createNote(note);
            const data = await res.json();
            if (data.id !== 0) {
              setNote(initialState);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
  };

  const getNote = async (noteId) => {
    try {
      const res = await NoteServer.getNote(noteId),
      data = await res.json(),
      {name, fundation, website} = data.company;
      
      setNote({name, fundation, website});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (params.id) {
      getNote(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return(
    <div className='containerPrincipal'>
          <div className='form-group'>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 my-2">
                <i className="fa fa-user"></i>
                <input type='text' className='form-control' name="title" id="title" placeholder="Título" value={note.title} onChange={handleInputChange} required="required"/>  
              </div>
              <div className="mb-6 my-2">
                <input type='text' className='form-control' name="description" id="description" placeholder="Descripción" value={note.description} onChange={handleInputChange} required="required"/>  
              </div>
              <br />
              <div className="mb-6 my-2">
                <button type="submit" className="btn btn-block btn-primary">Crear nota</button>
              </div>
            </form>
          </div>
        </div>
  ) 
}

export default NoteForm;