import TeamVGC from "../Model/TeamVGC";
import TeamPokemon from "../Model/TeamPokemon";
import Moves from "../Model/Moves";

//Parte com Auxilo de IA para interpretar o time importado, ainda sendo estudada a melhor forma de fazer isso

function parseMoves(movesString: string): Moves[] {
    const movesArray: Moves[] = [];
    const moveRegex = /\(Move: (.*?), Type: (.*?), Category: (.*?), Power: (.*?), Accuracy: (.*?), PP: (.*?), Effect: (.*?), Priority: (.*?)\)/g;
    let match;
    while ((match = moveRegex.exec(movesString)) !== null) {
        const [_, name, type, category, power, accuracy, pp, effect, priority] = match;
        const move = new Moves(
            name,
            type,
            category,
            power ? parseInt(power) : null,
            accuracy ? parseInt(accuracy) : null,
            parseInt(pp),
            effect,
            parseInt(priority)
        );
        movesArray.push(move);
    }
    return movesArray;
}

function parseTeamPokemon(pokemonString: string): TeamPokemon {
    const regex = /ID: (\d+), Name: (.*?), Level: (\d+), Abilitie: (.*?), Moves: \[(.*?)\], Sprite: (.*?)/;
    const match = regex.exec(pokemonString);
    if (!match) throw new Error('Formato de Pokémon inválido');
    const [_, id, name, level, abilitie, movesString, sprite] = match;
    const baseStats = {
        HP: 50,
        ATACK: 50,
        DEFENSE: 50,
        SPECIAL_ATTACK: 50,
        SPECIAL_DEFENSE: 50,
        SPEED: 50
    };
    const moves = parseMoves(movesString);
    const pokemonSprite = sprite || "default_sprite.png";
    const teamPokemon = new TeamPokemon(
        name,
        ["Normal"],
        baseStats,
        ["None"],
        pokemonSprite,
        moves,
        parseInt(level),
        abilitie
    );
    return teamPokemon;
}

function InterpreterTeam(importTeam: string): TeamVGC {
    const teamRegex = /\/team :(.+?)\/trainer :(.+?)\/rating :(\d+)\[(.*?)\]/;
    const match = teamRegex.exec(importTeam);
    if (!match) throw new Error('Formato de time inválido');
    const [_, name, trainer, rating, pokemonsString] = match;
    const pokemons = pokemonsString
        .split('},')
        .map((pokemonStr) => parseTeamPokemon(pokemonStr + '}'));

    return new TeamVGC(name, pokemons, trainer, parseInt(rating));
}

export default InterpreterTeam;