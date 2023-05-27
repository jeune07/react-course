const apikey="v7gghByckNziyrN4xGR4oQ57uekOZNoG"

let url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
// peticion fetch

const peticion = fetch(url);
peticion.then((respuesta)=>{
    //convertir la respuesta en json
    const data = respuesta.json();
    data.then((objeto)=>{
        console.log(objeto.data.images) })

}).catch((error) => {
    console.log("Error en la petición:", error);
  });
