import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import NavBar from '../../src/layout/NavBar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3>
              <b>Meta</b>
              <b className="um">3</b>group
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-dark" to="/addpost">
            Adicionar Post
          </Link>
        </div>
      </nav>
    </div>
  )
}
