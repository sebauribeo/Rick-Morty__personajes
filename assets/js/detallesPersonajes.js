export default class DetallesPersonaje extends Personajes {
    constructor(Id, name, status, species, gender, created, origin, location, episode) {
        super(Id);
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
    }
}

