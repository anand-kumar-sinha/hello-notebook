import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function Noteitem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note } = props
    return (

            <div className='col-md-3 '>
                <div className={`card my-3 shadow p-3 mb-5 rounded bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'dark'?'light':'dark'}`}>
                    <div className="card-body">
                        <h5 className="card-title">{note.tittle}</h5>
                        <h6 className="card-subtitle mb-2 text-secondary">{note.tag}</h6>
                        <p className="card-text">{note.description}</p>
                        <i className="bi bi-trash3-fill" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="bi bi-pencil-square mx-3"></i>
                    </div>
                </div>
            </div>

    )
}

export default Noteitem
 