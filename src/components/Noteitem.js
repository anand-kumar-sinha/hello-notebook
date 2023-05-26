import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updatenote} = props
    return (

            <div className='col-md-3 '>
                
                <div className={`card my-2 shadow p-3 mb-5 rounded-4 bg-${props.mode === 'light'?'success':'dark'} text-${props.mode === 'dark'?'light':'dark'} border-3 border-success bg-opacity-10`}>
                    <div className="card-body">
                        <h5 className="card-title">{note.tittle}</h5>
                        <h6 className="card-subtitle mb-2 text-secondary">{note.tag}</h6>
                        <p className="card-text">{note.description}</p>
                        <i className="bi bi-trash3-fill" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="bi bi-pencil-square mx-3" onClick={()=>{updatenote(note)}}></i>
                    </div>
                </div>
            </div>

    )
}

export default Noteitem
  