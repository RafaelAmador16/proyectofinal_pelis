import React from 'react'
import { useState, useEffect } from "react";
import getDatosPeli from "../helper/getDatosPeli";
import { Link, useParams } from 'react-router-dom';

function InfoPelicula() {
  const [pelicula, setPelicula] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getDatosPeli(id)
      .then((data) => {
        setPelicula(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!pelicula) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Información de la película</p>
      <h1>{pelicula.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${pelicula.poster_path}`} alt="" />
      <p>{pelicula.overview}</p>
    </div>
  );
}



export default InfoPelicula
