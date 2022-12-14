import React from 'react';

const NoteItem=({ note })=>{
  console.log(note);
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <h3 className='card-title'>{note.title}</h3>
      </div>
    </div>
  )
};

export default NoteItem;

