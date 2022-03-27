import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
   
     

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg  m-b-2 fixed-top navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-2 " to="/"><em><b>NEWS 24*7</b></em></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link active text-decoration-none fs-2 m-r-4" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 " to="/health">Health</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 m-r-4" to="/science">Science</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 m-r-4" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 m-r-4" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 m-r-4" to="/business">Business</Link>
                                </li>
                                <li className="nav-item m-r-4">
                                    <Link className="nav-link text-decoration-none fs-2 m-r-4" to="/entertainment">Entertainment</Link>
                                </li>


                            </ul>

                        </div>
                        
                    </div>
                    
                </nav>
            </>
        )
    }
}

export default Navbar