const API_URL = 'http://localhost:8000/note/notes-list/';
const API_URL_2 = 'http://localhost:8000/note/note-create/';
const API_URL_3 = 'http://localhost:8000/note/note-detail/<int:pk>/';
const API_URL_4 = 'http://localhost:8000/note/notes-list/';


//LISTA DE NOTAS
export const listNotes= async ()=>{
  return await fetch(API_URL);
}

export const createNote = async (newNote) => {
  return await fetch(API_URL_2,{
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
      },
      mode: 'no-cors', //
      // headers: [],
      body: JSON.stringify({
          "title": String(newNote.titulo).trim(),
          "description": String(newNote.descripcion).trim(), 
      })
  });
};

// ELIMINA UNA NOTA
export const deleteNote = async (noteId) => {
  return await fetch(`${API_URL_3}${noteId}`, {
  method: "DELETE",
  headers: {
      'Content-type': 'application/json'
  },
  mode: 'no-cors',
  })
};


export const getNote = async (noteId) => {
  return await fetch(`${API_URL_4}${noteId}`);
};