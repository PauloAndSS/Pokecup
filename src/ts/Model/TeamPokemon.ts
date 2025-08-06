import Moves from "./Moves";
import {Pokemon} from "./Pokemon";

type status = {
    HP: number;
    ATACK: number;
    DEFENSE: number;
    SPECIAL_ATTACK: number;
    SPECIAL_DEFENSE: number;
    SPEED: number;
}

class TeamPokemon extends Pokemon {
    private id: number
    private idCount: number = 0
    private abilitie: string
    private level: number
    private moves: Moves[]
    constructor(name: string, type: string[], baseStats: status, abilities: string[],sprite:string, moves: Moves[]=[],level: number = 1,abilitie: string = "none") {
       super(name, type, baseStats, abilities,sprite);
        this.id = this.idCount++;
        this.level = level;
        this.moves = moves;
        this.id = this.idCount++;
        this.abilitie = abilitie;
    }

    getId(): number {
        return this.id;
    }

    getLevel(): number {
        return this.level;
    }

    setLevel(level: number): void {
        this.level = level;
    }

    getMoves(): Moves[] {
        return this.moves.slice();
    }

    setMoves(moves:Moves[]): void {
        moves.forEach(move => {
            this.addMove(move);
        });
    }

    addMove(move:Moves): void {
        let movesList:string[] = this.moves.map(m => m.getName());
        if (!movesList.includes(move.getName())) {
            this.moves.push(move);
        }
    }

    removeMove(move: string): void {
        this.moves = this.moves.filter(m => m.getName() !== move);
    }

    toString(): string {
    return `{${super.toString()}ID: ${this.id}, Name: ${this.getName()}, Level: ${this.level}, Abilitie: ${this.abilitie}, Moves: ${this.moves.map(m => m.toString())}, Sprite: ${super.getSprite()}}`;
    }
}

export default TeamPokemon;