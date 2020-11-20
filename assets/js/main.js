// import personajes from "./personajes";
// // import detalles from "./detallesPersonajes";
// console.log(personajes);
// // console.log(detalles);

let llamadoDePersonajes = (() => {
    let mostrar = document.querySelector('.resultados');
    let datostotales;
    let url = "https://rickandmortyapi.com/api/character";

    let getPersonaje = async ()=> {
        try {
            let respuesta = await fetch(url);
            datostotales = await respuesta.json();
            return datostotales;
        }catch (error) {
            console.error(error);
        }
    }

    return {
        mostrarPersonaje: async () => {
            try {
                var personaje = await getPersonaje();
                personaje.results.forEach ((element) => {
                    mostrar.innerHTML += `
                    <div  class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 " >
                        <img type="button"  data-toggle="modal" data-target="#exampleModal" src="${element.image}" alt="">
                            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog ">
                                    <div class="modal-content ">
                                        <div class="modal-header bg-dark text-white">
                                            <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
                                            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <ul>
                                                <li>Número: ${element.id}</li>
                                                <li>Condicion: ${element.status}</li>
                                                <li>Especie: ${element.species}</li>
                                                <li>Sexo :${element.gender}</li>
                                                <li>Creación :${element.created}</li>
                                                <li>Origen :${element.origin.name}</li>
                                                <li>Planeta: ${element.location.name}</li>
                                                <li>Aparición en episodios :${element.episode.length}</li>
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        <ul>    
                            <li>Id: ${element.id}</li>
                            <li>${element.species}</li>
                        </ul> 
                    </div>
                    `;
                 });   
            } catch (error) {
                console.error(error);
            }
    },
        eliminarSpiner: async () => {
            try {
                let spiner = document.querySelector('.spinner-border')
                spiner.style.display = "none";
                cantidadPersonajes.innerHTML = `${datostotales.results.length}`; 
            } catch (error) {
                console.error(error);
            }
        }
    }
})();

llamadoDePersonajes.mostrarPersonaje();
setTimeout(()=>{
    llamadoDePersonajes.eliminarSpiner();
},2000);