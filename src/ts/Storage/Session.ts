import TeamPokemon from "../Model/TeamPokemon";

export function sessionGetTeam(): TeamPokemon[] {
    const team = sessionStorage.getItem('team');
    if (team == null) {
        sessionStorage.setItem('team', JSON.stringify([]));
        return [];
    }else if (team === '[]') {
        return [];
    } else{
        return JSON.parse(team) as TeamPokemon[];
    }
}

export function sessionSetTeam(team: TeamPokemon[]): void {
    sessionStorage.setItem('team', JSON.stringify(team));
}

export function sessionAddPokemonTeam(pokemon: TeamPokemon): void {
    const team = sessionGetTeam();
    if (!team.some(p => p.getId() === pokemon.getId())) {
        team.push(pokemon);
        sessionSetTeam(team);
    }
}

export function sessionRemovePokemonTeam(pokemonId: number): void {
    const team = sessionGetTeam();
    const updatedTeam = team.filter(p => p.getId() !== pokemonId);
    sessionSetTeam(updatedTeam);
}

export function abortSessionTeam(): void {
    sessionStorage.removeItem('team');
}