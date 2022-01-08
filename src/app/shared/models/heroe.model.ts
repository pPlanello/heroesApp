export interface Heroe {
    id?:               string;
    superhero:        string;
    publisher:        Publishers;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string;
}

export enum Publishers {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
