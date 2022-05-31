import React, { useState } from 'react'
import NotesContext from "./NotesContext";


export default function NotesState(props) {
    const host = "http://localhost:3000"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5NjYyODM4NTU3NGNmODRkMmFjNCIsImVtYWlsIjoidGVzdDFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NTM5ODY4OTV9.uINXdB0WDABIPToULUzTIgnOo4hsTIGQ5kk1A1qCsvA"
    const noteSample = []
    const [notes, setnotes] = useState(noteSample)
    //add notes
    const addNote = async (title, description, tag) => {
        //api call
        let newNote = {
            title,
            description,
            tag,
        }
        let data = await fetch(`${host}/notes/create`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify(newNote)
        })
        data = await data.json()
        setnotes(notes.concat(newNote))
    }
    //delete notes
    const deleteNote = async (note_id) => {
        let data = await fetch(`${host}/notes/delete/${note_id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
        })
        data = await data.json()
        console.log(data)
        let newNotes = notes.filter((note) => { return (note._id !== note_id) })
        setnotes(newNotes)
    }

    //update notes
    const updateNote = (note_id, title, description, tag) => {
        // notes.map((note) => {
        //     if (note_id === note._id) {
        //         note.title = title,
        //             note.description = description,
        //             note.tag = tag
        //     }
        //     return note
        // })
        // setnotes(notes)
        // let data = await fetch(`${host}/notes/update/${note_id}`, {
        //     method: 'PUT', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'auth-token': token
        //     },
        // })
        // data = await data.json()
        // console.log(data)
    }
    //get all notes
    const getNotes = async () => {
        let data = await fetch(`${host}/notes/allNotes`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })
        data = await data.json()
        setnotes(data.note)
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
            {props.children}
        </NotesContext.Provider>
    )
}
