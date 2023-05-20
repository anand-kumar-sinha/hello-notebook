import React, { useState } from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext } from 'react'


const AddNote = (props) => {
  const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({tittle: "", description : "", tag : ""})


    const handleClick = (e) =>{
      e.preventDefault()
      addNote(note.tittle, note.description, note.tag)
    }

    const onChange = (e) =>{
      setNote({...note, [e.target.name] : e.target.value})
    }

  return (
    <div className='my-3'>
      <form >
        <h2 className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}>Add New Note :</h2>
        <div className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <label htmlFor="tittle" className="form-label " >Tittle</label>
          <input type="text" className={`form-control bg-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} placeholder='Enter your Tittle' id="tittle" name="tittle" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <label htmlFor="description" className="form-label" >Description</label>
          <textarea className={`form-control bg-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} id="description" name="description" rows="5" placeholder='Enter your Description' onChange={onChange}></textarea>
        </div><div className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
          <label htmlFor="tag" className="form-label " >Tag</label>
          <input type="text" className={`form-control bg-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} placeholder='Enter your Tag' id="tag" name="tag" aria-describedby="emailHelp" onChange={onChange}/>
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Add Now</button>
      </form>

    </div>
  )
}

export default AddNote
