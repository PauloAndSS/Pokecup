class Moves {
    private _name: string
    private _type: string
    private _category: string
    private _power: number | null
    private _accuracy: number | null
    private _pp: number
    private _priority: number
    private _effect: string
    constructor(
        name: string,
        type: string,
        category: string,
        power: number | null,
        accuracy: number | null,
        pp: number,
        effect: string,
        priority: number = 0
    ) {
        this._name = name;
        this._type = type;
        this._category = category;
        this._power = power;
        this._accuracy = accuracy;
        this._pp = pp;
        this._effect = effect;
        this._priority = priority;
    }
    
    getName(): string {
        return this._name;
    }

    getType(): string {
        return this._type;
    }

    getCategory(): string {
        return this._category;
    }

    getPower(): number | null {
        return this._power;
    }

    getAccuracy(): number | null {
        return this._accuracy;
    }

    getPP(): number {
        return this._pp;
    }

    getEffect(): string {
        return this._effect;
    }

    getPriority(): number {
        return this._priority;
    }

    toString(): string {
        return `(Move: ${this._name}, Type: ${this._type}, Category: ${this._category}, Power: ${this._power}, Accuracy: ${this._accuracy}, PP: ${this._pp}, Effect: ${this._effect}, Priority: ${this._priority})`;
    }
}

export default Moves;