import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/frontoffice/navbar.css'
import { Link as ScrlLink } from "react-scroll";
import { Link as DnmcLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Salama</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse offset-lg-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <ScrlLink to="about" spy={true} smooth={true} offset={50} duration={500}> <a className="nav-link" href="#">About</a></ScrlLink>
                                </li>
                                <li className="nav-item">
                                    <ScrlLink to="service" spy={true} smooth={true} offset={50} duration={500}> <a className="nav-link" href="#">Service</a></ScrlLink>
                                </li>
                                <li className="nav-item">
                                    <ScrlLink to="team" spy={true} smooth={true} offset={50} duration={500}> <a className="nav-link" href="#">Team</a></ScrlLink>
                                </li>
                                <li className="nav-item">
                                    <ScrlLink to="footer" spy={true} smooth={true} offset={50} duration={500}> <a className="nav-link" href="#">Contact</a></ScrlLink>
                                </li>
                                <li className="nav-item">
                                    <DnmcLink className="nav-link" to="/login">Login</DnmcLink>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="submit">Get started</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
