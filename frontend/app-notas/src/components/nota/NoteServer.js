const API_URL = 'http://localhost:8000/note/notes-list/';

export const listNotes= async ()=>{
  return await fetch(API_URL);
}