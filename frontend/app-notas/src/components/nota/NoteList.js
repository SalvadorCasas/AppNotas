import React , { useEffect, useState } from 'react';
import * as NoteServer from './NoteServer';

const NoteList = () => {

  /*const initialState = [
    {
      id:9,
      title:"Primera Nota",
      description:"Esta es la primera nota que creamos",
    },
  ];*/

//CREA ATRIBUTO notes y METODO setNotes
  const [notes,setNotes]= useState([]);

  const listNotes= async () => {
    try {
      const res = await NoteServer.listNotes();
      const data = await res.json();
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <h2>{note.title}</h2>
      ))}
    </div>
  );
};

export default NoteList;
