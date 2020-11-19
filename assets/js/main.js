let global = (() => {
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
                var personaje = await getPersonaje();
                personaje.results.forEach ((element) => {
                    mostrar.innerHTML += `
                    <div  class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 " >
                        <img type="button"  data-toggle="modal" data-target="#exampleModal" src="${element.image}" alt="">
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title " id="exampleModalLabel">${element.name}</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <ul>
                                                <li>Número: ${element.id}</li>
                                                <li>Condicion: ${element.status}</li>
                                                <li>Especie: ${element.species}</li>
                                                <li>Sexo :${element.gender}</li>
                                                <li>Planeta: ${element.location.name}</li>
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
},

        // modal: async () => {
        //     var personaje = await getPersonaje();
        //     personaje.results.forEach ((element) => {
        //         mostrar.innerHTML +=

        //     });    
        // },

        eliminarSpiner: async () => {
            let spiner = document.querySelector('.spinner-border')
            spiner.style.display = "none";
            cantidadPersonajes.innerHTML = `${getPersonaje.length}`;

            
        }
    }
})();

global.mostrarPersonaje();
setTimeout(()=>{
    global.eliminarSpiner();
},2000);