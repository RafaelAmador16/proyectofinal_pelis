import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMenu from '../components/NavMenu'

function Layout() {
  return (

    <>
        <NavMenu />
        <hr />
        <Outlet />
        <hr />
        <div>
            Footer Ejemplo
        </div>
    </>
  )
}

export default Layout