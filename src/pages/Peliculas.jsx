import React, { useEffect } from 'react'
import Card from '../components/Card'
import { Link, useNavigate } from 'react-router-dom'

function Peliculas() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('usuario') && localStorage.getItem('contraseña');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }
  return (
    <>
    <div>Peliculas</div>
    <Card />
    </>
  )
}

export default Peliculas
