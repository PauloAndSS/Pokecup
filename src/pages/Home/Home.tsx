import PageBuilder from "../../components/PageBuilder/PageBuilder";

function Home (){
    let main = (
        <main>
            <nav>
                <a href="/VGC/TeamBuilder">ir para TeamBuilder</a>
                <a href="/TCG/DeckBuilder">ir para DeckBuilder</a>
            </nav>
        </main>
    )
    return(
        <PageBuilder Element={main}/>
    )
}

export default Home;