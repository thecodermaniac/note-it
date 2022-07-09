import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

function NotesItem(props) {
    const context = useContext(noteContext);
    const { Deletenote } = context;
    const { notes, updateNote } = props
    const handleDelete = () => {
        Deletenote(notes._id)
    }
    return (
        <div className="col-md-3">
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{notes.title}</h5>
                    <p class="card-text">{notes.description}</p>
                    <div class="d-flex justify-content-around">
                        <button type="button" class="btn btn-outline-success" onClick={() => { updateNote(notes) }}>Edit</button>
                        <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesItem