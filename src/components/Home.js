import React from 'react'
import NotesBlock from '../components/NotesBlock'
import { useHistory } from "react-router-dom"

const Home = () => {
    const history = useHistory()
    return (
        <>
            {localStorage.getItem('token') ? <NotesBlock /> : history.push('/SignUp')}
        </>
    )
}
export default Home