const getDatosPeli = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=83b099cb93fdb1bc0e99561d04fc2927`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getDatosPeli;
  