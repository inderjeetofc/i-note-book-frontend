import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NotesContext from '../context/notes/NotesContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'
export default function Notes() {
    let navigate = useNavigate()
    let { notes, getNotes } = useContext(NotesContext)
    useEffect(() => {
        if (localStorage.getItem('auth_token')) {
            getNotes()
        }
        else
            navigate('/login')
    }, [])

    return (
        <>
            <AddNote />
            <div className='container'>
                <div className='row'>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })}
                </div>
            </div>
        </>
    )
}
