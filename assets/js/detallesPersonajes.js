//--------------------IMPORT-------------------- 

import Personajes from "./personajes.js";
console.log(Personajes);

//--------------------EXPORT-------------------- 

export default class DetallesPersonaje extends Personajes {
    constructor(id, name, status, species, gender, created, origin, location, episode) {
        super(id);
        this._name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
    }
    get name () {
        return this._name;
    }
    set name (string) {
        this._name = string;
    }
    get status () {
        return this._status;
    }
    set status (string) {
        this._status = string;
    }
    infoModal() {
        return `${this.name} ${this.status} ${this.species} ${this.gender} ${this.created} ${this.origin} ${this.location} ${this.episode}`;
    }
    infoGeneral () {
        return `${this.id} ${this.name} ${this.status} ${this.species} ${this.gender} ${this.created} ${this.origin} ${this.location} ${this.episode}`;

    }
    
};

const detallePersonajes = new DetallesPersonaje()
            
          