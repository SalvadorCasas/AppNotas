import React , { useState } from 'react';

const NoteList=()=>{

  const initialState = [
    {
      id:9,
      title:"Primera Nota",
      description:"Esta es la primera nota que creamos",
    },
  ];

//CREA ATRIBUTO notes y METODO setNotes
const [notes,setNotes]=useState(initialState);

  return (
    <div>
      {notes.map((notes)=>(
        <h2>{notes.title}</h2>
      ))}
    </div>
  );
};

export default NoteList;
