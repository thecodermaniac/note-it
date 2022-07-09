import React from 'react'
import { useContext, useEffect, useRef, useState } from "react"
import Noteitem from '../components/NotesItem';
import noteContext from "../context/notes/noteContext"
import { Addnote } from './Addnote';


function NotesBlock() {
    const refr = useRef(null)
    const context = useContext(noteContext);
    const { notes, getNotes, Editnote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const updateNote = (currentNote) => {
        console.log('updating');
        refr.current.click()
        console.log(currentNote.title);
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleclick = () => {
        console.log('lol');
        Editnote(note.id, note.etitle, note.edescription, note.etag)
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getNotes()
    }, [])
    return (
        <>
            <Addnote />
            <button ref={refr} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="eTitle" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="eTitle" name='etitle' aria-describedby="emailHelp" onChange={handleChange} value={note.etitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edesc" className="form-label">Description</label>
                                    <input type="email" className="form-control" id="edesc" name='edescription' onChange={handleChange} value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="email" className="form-control" id="etag" name='etag' onChange={handleChange} value={note.etag} />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleclick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    {notes.map((note) => {
                        return <Noteitem notes={note} updateNote={updateNote} />
                    })}
                </div>
            </div>
        </>
    )
}

export default NotesBlock