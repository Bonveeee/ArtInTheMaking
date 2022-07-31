import React from 'react'
import { Link } from 'react-router-dom'


//resposible for displaying navbar in the SPA
function Navbar() {
  return (
  
    <nav className="navbar">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ArtWorks">ArtsWorks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Artists">Artists</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Helpdesk">Helpdesk</Link>
                    </li>
                </ul>
            </div>
        </nav>
      )
}

export default Navbar