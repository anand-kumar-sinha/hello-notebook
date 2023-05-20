// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {

  const host = 'http://localhost:5000'

  const noteInitial = []

  const [notes, setNotes] = useState(noteInitial)

  //get all notes
  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchnotes}`, {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MjYwODJmYjlkYjQ1ZWNmODA2ZmI3In0sImlhdCI6MTY4NDM0NzM2MX0.l_lAIufsmg7etK4XXQ26tGJAGcZpsoeon8HKFd0EmFs'
      }
    })

    const json = await response.json()
    console.log(json);
  }



  //adding a note
  const addNote = async (tittle, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MjYwODJmYjlkYjQ1ZWNmODA2ZmI3In0sImlhdCI6MTY4NDM0NzM2MX0.l_lAIufsmg7etK4XXQ26tGJAGcZpsoeon8HKFd0EmFs'
      },
      body: JSON.stringify({tittle, description, tag})
    })


    const note = {
      "_id": "6463a8d6a332db81yref3171e66", 
      "user": "646260ryt82fbyt9db45ecf806fb7",
      "tittle": tittle,
      "description": description,
      "tag": tag,
      "timestamp": "2023-05-16T16:01:26.076Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //deleting a note
  const deleteNote = (id) => {

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  //editing a note
  const editNote = async (id, tittle, description, tag) => {


    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2MjYwODJmYjlkYjQ1ZWNmODA2ZmI3In0sImlhdCI6MTY4NDM0NzM2MX0.l_lAIufsmg7etK4XXQ26tGJAGcZpsoeon8HKFd0EmFs'
      },
      body: JSON.stringify({ tittle, description, tag })
    })
    const json = response.json()

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index]
      if (element._id === id) {
        element.tittle = tittle
        element.description = description
        element.tag = tag
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>

      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState