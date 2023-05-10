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
      <div>
        <div>
          <input type="text" placeholder="Buscar pelicula" onChange={handleInputChange} />
        </div>
        <div id='div1'>
        {filteredPelis.map((peli) => (
          
            <Link to={`/peliculas/${peli.id}`} key={peli.id} data={peli}>
            <h3>{peli.title}</h3>
            <img src={"https://image.tmdb.org/t/p/w300" + peli.poster_path} alt="" />
            </Link>
         
        ))}
         </div>
      </div>
    );
};

export default Card