import { useContext } from "react"
import React from 'react'
import noteContext from "../context/notes/noteContext"

const AboutUs = () => {
    const first = useContext(noteContext)
    return (
        <div>
            This is about {first.name} of age {first.age}
        </div>
    )
}
export default AboutUs