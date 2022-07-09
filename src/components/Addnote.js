import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"



export const Addnote = () => {
    const context = useContext(noteContext);
    const { Addnote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "General" })
    const handleclick = (e) => {
        e.preventDefault()
        Addnote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "General" })
    }
    const handleChange = (ev) => {
        setNote({ ...note, [ev.target.name]: ev.target.value })
    }

    return (
        <div className="container my-3">
            <h2 className='my-3'>Add Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="email" className="form-control" id="Title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handleChange} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="email" className="form-control" id="desc" name='description'value={note.description} onChange={handleChange} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="email" className="form-control" id="tag" name='tag' onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Notes</button>
            </form>
        </div>
    )
}
