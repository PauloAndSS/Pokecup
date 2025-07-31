import {Carrousel} from "../../components/children/CarrouselBanner/Carrousel";
import PageBuilder from "../../components/PageBuilder/PageBuilder";
import Style from "./Home.module.css";

function Home (){

    let Banner = [
         {
    imagem: "https://www.ytgraphics.com/static/37185b29bed15d0ca11f5aa507fc2032/2493a/pokmeon.webp",
    descricao: "Monte sua estratégia, desafie os campeões. Pokecup é onde os mestres nascem.",
  },
  {
    imagem: "https://uploads.promoview.com.br/2025/04/lZjL77GJ-pokemon-go-gamescom-latam-abre.webp",
    descricao: "TCG ou VGC? Aqui você domina os dois mundos com decks lendários e times imbatíveis.",
  }
]

    let main = (
        <main>
            <section>
                <Carrousel items={Banner}/>
            </section>
            <section>
                <span>
                    Descubra a arena onde estratégia, paixão e competição se encontram! ⚔️<br/>
                    No <strong>Pokecup</strong>, você não só monta times — você cria lendas. Cada escolha importa, cada golpe é decisivo.
                </span>
            </section>
            <section>
                <p>
                    Seja no universo do <strong>TCG</strong> ou nas batalhas intensas do <strong>VGC</strong>, o Pokecup é seu guia definitivo para montar o time perfeito.<br/>
                    Explore combinações únicas de Pokémon, cartas poderosas e estratégias vencedoras. Teste ideias, compartilhe decks e aprimore sua performance como treinador.
                </p>
                <a href="/VGC/TeamBuilder" className={Style["botao-time"]}>Monte seu time</a>
            </section>
        </main>
    )
    return(
        <PageBuilder Element={main}/>
    )
}

export default Home;