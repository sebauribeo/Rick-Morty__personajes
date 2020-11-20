import DetallesPersonaje from "./detallesPersonajes.js";
console.log(DetallesPersonaje);


let llamadoDePersonajes = (() => {
    let mostrar = document.querySelector('.resultados');
    let modal = document.querySelector('#infoModal');
    let next = document.querySelector('#pagination');
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
                const personaje = await getPersonaje();
                personaje.results.forEach ((element) => {
                    mostrar.innerHTML += `
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" >
                    <img src="${element.image}" alt="">
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

        infoModal: async () => {
                const personaje = await getPersonaje();
                personaje.results.forEach((element, index) => {
                    console.log(index);
                    if (++index <= 19) {
                        modal.innerHTML += `
                        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog ">
                                <div class="modal-content ">
                                    <div class="nueva modal-header bg-warning">
                                        <h5 class="modal-title" id="exampleModalLabel ">${element.name}</h5>
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
                    };
                    
                });            
        },

        paginacion: async () => {
            try {
                const pagina = await getPersonaje();
                pagina.info.forEach((element) => {
                    next.innerHTML = `
                    <div class="pagination justify-content-center" >
                    <ul class="pagination bg-warning">
                    <li class="page-item">
                      <a class="page-link" href="${element.info}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
llamadoDePersonajes.infoModal();
llamadoDePersonajes.paginacion();
setTimeout(()=>{
    llamadoDePersonajes.eliminarSpiner();
},2000);