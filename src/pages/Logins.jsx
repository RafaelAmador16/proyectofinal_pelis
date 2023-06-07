import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Logins() {
    const navigate = useNavigate();
  const handleLogin = (event) =>{
    event.preventDefault();
  localStorage.setItem("usuario", event.target.nombre.value)
  localStorage.setItem("password", event.target.contraseña.value)
  navigate('/peliculas')
}
  const handleLogout =(event)=>{
    event.preventDefault();
    localStorage.setItem("usuario", '')
    localStorage.setItem("password", '')
    
  }

  return (
    <>
    <form onSubmit={handleLogin}>
        <input type='text' name='nombre' placeholder='Nombre' />
        <input type='password' name='contraseña' placeholder='Password' />
        <button type='submit'> Login</button>
    </form>
    <form onSubmit={handleLogout}>
        <label>Logout</label>
        <button type='submit'>Logout</button>
    </form>
    </>
  )
}

export default Logins