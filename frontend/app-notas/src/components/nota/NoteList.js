import React , { useEffect, useState } from 'react';

//COMPONENTES
import NoteItem from './NoteItem';


import * as NoteServer from './NoteServer';

const NoteList = () => {

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
    <div className="row my-3">
      <h3 > Tus Notas </h3>
      <div className="container">
    {
      ( notes && notes.length > 0 )
      ?
      notes.map((note) => {
        return <NoteItem key={note.id} note={note} />
    })
    : 
    null
    }
    </div>
    </div>
  );
};

export default NoteList;
