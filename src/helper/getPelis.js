const getPelis = async () =>{
    const url ="https://api.themoviedb.org/3/discover/movie?api_key=83b099cb93fdb1bc0e99561d04fc2927";
    try {
        const response = await fetch(url);
        const datos = await response.json();

        return datos.results;
      } catch (error) {
        console.log(error);
      }
    };
export default getPelis
