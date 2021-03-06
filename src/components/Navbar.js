import React, { useEffect } from 'react'
import {
    Link,
    useLocation,
    useHistory
} from "react-router-dom";

export default function Navbar() {
    const history = useHistory()
    let location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    useEffect(() => {
        console.log(location)
    }, [location]);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Note It</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/home' ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">AboutUs</Link>
                            </li>
                        </ul>
                    </div>
                    {!localStorage.getItem('token') ? <form class="d-flex">
                        <Link class="btn btn-dark" to="/login" role="button">Login</Link>
                        <Link class="btn btn-dark ms-4" to="/signUp" role="button">SignUp</Link>
                    </form> : <form class="d-flex"><button type="button" class="btn btn-dark" onClick={handleLogout}>Log Out</button></form>}
                </div>
            </nav>
        </>
    )
}
