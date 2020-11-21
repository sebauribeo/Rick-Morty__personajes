//--------------------IMPORT--------------------

import DetallesPersonaje from "./detallesPersonajes.js";
console.log(DetallesPersonaje);

//--------------------IIFE-------------------- 

let llamadoDePersonajes = (() => {
    let mostrar = document.querySelector('.resultados');
    let datostotales;
    let url = "https://rickandmortyapi.com/api/character";

    var getPersonaje = async ()=> {
        try {
            let respuesta = await fetch(url);
            datostotales = await respuesta.json();
            return datostotales;
        }catch (error) {
            console.error(error);
        }
    }

    return {

//--------------------PERSONAJES--------------------

        Personaje: async () => {
            try {
                var personaje = await getPersonaje();
                personaje.results.forEach ((element,index) => {
                    mostrar.innerHTML += `
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" >
                    <img src="${element.image}" type="button" data-toggle="modal" data-target="#exampleModal${index}" alt="#">
                    <ul>    
                    <li>Id: ${element.id}</li>
                    <li>${element.species}</li>
                    </ul> 
                    </div>
                    `;
                    console.log(element);
                });   
            } catch (error) {
                console.error(error);
            }
        },

//--------------------MODAL-------------------- 

        DetallesPersonajes: async () => {
            try {
                var personaje = await getPersonaje();
                personaje.results.forEach((element,index) => {
                    mostrar.innerHTML += `
                        <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabe" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content ">
                                    <div class="nueva modal-header bg-warning">
                                        <h5 class="modal-title" id="exampleModalLabe">${element.name}</h5>
                                        <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body ">
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
                    `; 
                });            
            } catch (error) {
                console.error(error);
            }            
        },

//--------------------SPINER--------------------

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

llamadoDePersonajes.Personaje();
llamadoDePersonajes.DetallesPersonajes();
setTimeout(()=>{
    llamadoDePersonajes.eliminarSpiner();
},2000);