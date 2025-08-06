export type status = {
    HP: number;
    ATACK: number;
    DEFENSE: number;
    SPECIAL_ATTACK: number;
    SPECIAL_DEFENSE: number;
    SPEED: number;
}

export class Pokemon {
    private _name: string
    private _type: string[]
    private _baseStats: status
    private _abilities: string[]
    private _sprite: string;
    constructor(name: string, type: string[], baseStats: status, abilities: string[], sprite: string) {
        this._name = name;
        this._type = type;
        this._baseStats = baseStats;
        this._abilities = abilities;
        this._sprite = sprite;
    }

    getName(): string {
        return this._name;
    }

    getType(): string[] {
        return this._type.slice();
    }

    getBaseStat(): status{
        return this._baseStats;
    }

    getSprite(): string {
        return this._sprite;
        }

    getAb(): string[] {
        return this._abilities.slice();
    }

    toString(): string {
        return `Pokemon: ${this._name}, Type: ${this._type.join(', ')}, Base Stats: ${JSON.stringify(this._baseStats)}, Abilities: ${this._abilities.join(', ')}, Sprite: ${this._sprite}`;
    }
}