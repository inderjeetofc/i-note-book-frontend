import React, { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'

export default function NoteItem({ note }) {
    const { deleteNote, updateNote } = useContext(NotesContext)
    const handleUpdateNote = () => {

    }
    return (
        <>
            <div className='col'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <img src="https://source.unsplash.com/random" className="card-img-top" alt="..."></img>
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <div className='d-flex justify-content-between'>
                            <i className="fa fa-trash-o" onClick={() => deleteNote(note._id)}></i>
                            <i className="fa fa-pencil" onClick={handleUpdateNote}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
