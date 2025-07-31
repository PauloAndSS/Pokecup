class Pokemon{
    private _Name:string
    private _Sprite:string
    private _Descryption:string
    private _Types:string[]

    constructor(name:string,sprite:string,descryption:string,type:string[]){
        this._Name = name;
        this._Sprite = sprite;
        this._Descryption = descryption;
        this._Types = type;
    }

    Name():string{
        return this._Name;
    }

    Sprite():string{
        return this._Sprite;
    }

    Desc():string{
        return this._Descryption;
    }

    Types():string[]{
        return this._Types;
    }
}

export default Pokemon;