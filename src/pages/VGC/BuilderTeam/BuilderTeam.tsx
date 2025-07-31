import GalleryPokemon from "../../../components/children/GalleryPokemons/GalleryPokemons";

import PageBuilder from "../../../components/PageBuilder/PageBuilder";

function BuilderTeam(){
    let main = (
        <main>
            <GalleryPokemon limit={15} set={0}></GalleryPokemon>
        </main>
    )
    return(
        <PageBuilder Element={main}/>
    )
}

export default BuilderTeam;