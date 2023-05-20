import React, { useContext} from 'react'
import AddNote from './AddNote'
import Noteitem from './Noteitem'
import noteContext from '../context/notes/noteContext'


const Notes = (props) => {
    const context = useContext(noteContext)
    const { notes} = context
    return (
        <>

            <AddNote mode = {props.mode}/>
            <h2 className={`my-3 text-${props.mode === 'dark'?'light':'dark'}`}>Your Notes is here :</h2>
            <div className={`row text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} mode = {props.mode} />
                })}
            </div>
        </>
    )
}

export default Notes
