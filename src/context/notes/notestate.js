import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const Initnotes = []
    const [notes, setnotes] = useState(Initnotes)
    const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/app/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        console.log(json)
        setnotes(json)
    }


    const Addnote = async (title, description, tag) => {
        const response = await fetch(`${host}/app/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        // var note = {
        //     "_id": "62bbe24bd855d9d9a94a8eb7",
        //     "user": "62babc1f1dadfc1fac4ae98d",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2022-06-29T05:25:31.039Z",
        //     "__v": 0
        // }
        // setnotes(notes.concat(note))
        getNotes()
    }
    const Deletenote = async (id) => {
        console.log(`the required id: ${id}`);
        const response = await fetch(`${host}/app/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        var newnotes = notes.filter((note) => { return note._id !== id })
        setnotes(newnotes)
    }
    const Editnote = async (id, title, description, tag) => {
        console.log(`editing id: ${id}`);
        console.log(description);

        const response = await fetch(`${host}/app/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        console.log(newNotes)
        //client side edit
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
                break
            }
        }
        setnotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setnotes, Addnote, Deletenote, Editnote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState