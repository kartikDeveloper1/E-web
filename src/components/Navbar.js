import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid header-content ">
          <Link className='nav-title' to={'/'}>
            <p className="navbar-brand" >
              E-Web
            </p>
          </Link>
          <div className="content text-white">
              <p>Let's do some Shooping !! 🎉</p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
