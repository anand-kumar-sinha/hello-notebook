import React, { useContext, useEffect, useRef, useState } from 'react'
import AddNote from './AddNote'
import Noteitem from './Noteitem'
import noteContext from '../context/notes/noteContext'


const Notes = (props) => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    useEffect(() => {
        getNotes()
    })
    
    const [note, setNote] = useState({id : "", etittle: "", edescription : "", etag : ""})

    const updatenote = (currentNote) => {
        ref.current.click()
        setNote({id : currentNote._id, etittle : currentNote.tittle, edescription: currentNote.description, etag : currentNote.tag})
    }


    const handleClick = (e) =>{
        editNote(note.id, note.etittle, note.edescription ,note.etag)
        refclose.current.click()
      }
  
      const onChange = (e) =>{
        setNote({...note, [e.target.name] : e.target.value})
      }

    const ref = useRef(null)
    const refclose = useRef(null)
    return (
        <>

            <AddNote mode={props.mode} />


            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content bg-${props.mode === 'dark'?'dark':'light'}`}>
                        <div className="modal-header">
                            <h1 className={`modal-title fs-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="exampleModalLabel">Edit</h1>
                        </div>
                        <div className="modal-body">
                            <form >
                                <h2 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Edit Note :</h2>
                                <div className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                    <label htmlFor="etittle" className="form-label " >Tittle</label>
                                    <input type="text" className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder='Enter your Tittle' id="etittle" name="etittle" aria-describedby="emailHelp" onChange={onChange} minLength={3} required value={note.etittle}/>
                                </div>
                                <div className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                    <label htmlFor="edescription" className="form-label" >Description</label>
                                    <textarea className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} onChange={onChange} id="edescription" name="edescription" rows="5" placeholder='Enter your Description' minLength={5} required value={note.edescription}/>
                                </div><div className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                    <label htmlFor="etag" className="form-label " >Tag</label>
                                    <input type="text" className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`} placeholder='Enter your Tag' id="etag" name="etag" aria-describedby="emailHelp" onChange={onChange} required value={note.etag}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal" ref={refclose}>Close</button>
                            <button type="button" className="btn btn-outline-primary" onClick={handleClick} >Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your Notes is here :</h2>
            <div className={`row text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updatenote={updatenote} mode={props.mode} />
                })}
            </div>
        </>
    )
}

export default Notes
