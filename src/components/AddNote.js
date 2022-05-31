import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'
export default function AddNote() {
    const { addNote } = useContext(NotesContext)
    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const handleOnChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
    }
    return (
        <>
            <div className='container my-3'>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" id="description" placeholder="description" onChange={handleOnChange} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleOnClick}>Submit</button>
                </form>
            </div>
        </>
    )
}
