import Pokemon from "./Pokemon";

class TimePokemon {
    private NomeTime:string;
    private Time:Pokemon[] = [];

    constructor(nome :string){
        this.NomeTime = nome;
    }

    nomeTime(){
        return this.NomeTime;
    }

    addTime(pokemon:Pokemon){
        this.Time.push(pokemon)
    }

    deleteTime(nomePokemon:string){
        let pokemonRemove = null

        for(let i=0;i<this.Time.length;i++){
            if(this.Time[i].Name() == nomePokemon){
                let index = i;
                i = this.Time.length;
                return index;
            }
        }

        if(pokemonRemove != null){
            this.Time.splice(pokemonRemove, 1)
        }else{
            console.error("pokemon não encontrado no time")
        }
    }
}

export default TimePokemon;