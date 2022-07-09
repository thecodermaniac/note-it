import React, { useEffect } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";

export default function Navbar() {
    let location = useLocation();

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
                    <form class="form-inline my-2 my-lg-0">
                        <Link class="btn btn-dark" to="/login" role="button">Login</Link>
                    </form>

                </div>
            </nav>
        </>
    )
}
