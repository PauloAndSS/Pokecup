import TeamPokemon from "./TeamPokemon";

class TeamVGC {
    private name: string
    private pokemons: TeamPokemon[]
    private trainer: string
    private rating: number
    constructor(name:string,pokemons:TeamPokemon[],trainer:string,rating:number) {
        this.name = name;
        this.pokemons = pokemons;
        this.trainer = trainer;
        this.rating = rating;
    }

    getName(): string {
        return this.name;
    }
    
    getPokemons(): TeamPokemon[] {
        return this.pokemons.slice();
    }

    getTrainer(): string {
        return this.trainer;
    }

    getRating(): number {
        return this.rating;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPokemons(pokemons: TeamPokemon[]): void {
        pokemons.forEach(pokemon => {
            this.addPokemon(pokemon);
        });
    }

    setTrainer(trainer: string): void {
        this.trainer = trainer;
    }

    setRating(rating: number): void {
        this.rating = rating;
    }

    addPokemon(pokemon: TeamPokemon): void {
        if (!this.pokemons.some(p => p.getId() === pokemon.getId())) {
            this.pokemons.push(pokemon);
        }
    }

    removePokemon(pokemonId: number): void {
        this.pokemons = this.pokemons.filter(p => p.getId() !== pokemonId);
    }

    exportTeam(): string {
    return `/team :${this.name}/trainer :${this.trainer}/rating :${this.rating}[${this.pokemons.map(pokemon => pokemon.toString()).join(", ")}]`;}
}

export default TeamVGC;