import React from 'react'
import { NavLink } from 'react-router-dom'

function NavMenu() {
  return (
    <>
        <div>
            <h1>NavMenu</h1>
        </div>
        <div>
            <NavLink to="/peliculas">Peliculas</NavLink>
            
            <NavLink to="/login">Login</NavLink>
        </div>
    </>
  )
}

export default NavMenu
