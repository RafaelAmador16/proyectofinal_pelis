import React, { useEffect, useState } from 'react'
import getPelis from '../helper/getPelis'
import { Link } from 'react-router-dom';
function Card() {
    const initialStatePelis =[];
    const [peliculas, setPeliculas] = useState(initialStatePelis);
    const [busqueda, setBusqueda] = useState("");
    const handleInputChange = (event) => {
      setBusqueda(event.target.value);
    };
  
    const filteredPelis = peliculas.filter((peli) => {
      return peli.title.toLowerCase().includes(busqueda.toLowerCase());
    });

    
     // Efectos
  useEffect(() => {
    pintarPelisTaquilleras();
  }, []);

  // Lógica
  const pintarPelisTaquilleras = () => {
    getPelis()
      .then((datos) => {
        const primeras10Pelis = datos.slice(0, 10);

        setPeliculas(primeras10Pelis);
   
      })
      .catch((error) => console.log(error));
    }
    
    return (
      <>
        <div>
          <input type="text" placeholder="Buscar pelicula" onChange={handleInputChange} />
        </div>
        {filteredPelis.map((peli) => (
          <div key={peli.id}>
            <Link to={`/peliculas/${peli.id}`} key={peli.id} data={peli}>
            <h1>{peli.title}</h1>
            <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + peli.poster_path} alt="" />
            </Link>
          </div>
        ))}
      </>
    );
  
};

export default Card