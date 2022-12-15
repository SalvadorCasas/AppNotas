import React from 'react';

const NoteItem=({ note })=>{
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <h3 className='card-title'>Título: {note.title}</h3>
        <p className='card-text'>Descripción: {note.description}</p>
      </div>
    </div>
  )
};

export default NoteItem;

