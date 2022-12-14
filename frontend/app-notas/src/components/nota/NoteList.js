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
    <div className='row'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note}></NoteItem>
      ))}
    </div>
  );
};

export default NoteList;
