// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = 'https://note-backend-mej8.vercel.app'

  const noteInitial = []

  const [notes, setNotes] = useState(noteInitial)

  //get all notes
  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })

    const json = await response.json()
    setNotes(json)
  }



  //adding a note
  const addNote = async (tittle, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({tittle, description, tag})
    })

    const  note = await response.json();
 

    setNotes(notes.concat(note))
  }

  //deleting a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = response.json()


    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  //editing a note
  const editNote = async (id, tittle, description, tag) => {


    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ tittle, description, tag })
    })
    const json = await response.json()


    for (let index = 0; index < notes.length; index++) {
      const element = notes[index]
      if (element._id === id) {
        notes[index].tittle = tittle
        notes[index].description = description
        notes[index].tag = tag
        break
      }
    }
    setNotes(notes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>

      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState