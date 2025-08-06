import { JSX } from "react";
import PageBuilder from "../../components/Parents/PageBuilder/PageBuilder";
import style from './Home.module.css';
import Carousel,{CarouselItem} from "../../components/Children/Carrosel/Carrosel";

let itemsCarrousel: CarouselItem[] = [
  {
    path: 'https://as1.ftcdn.net/jpg/05/62/13/54/1000_F_562135455_9cRKUGrx050EVpT8iyn9Q5DgThUG8l28.jpg',
    description: 'Build the perfect team with Bulbasaur and take your Pokémon journey to the next level! Harness the power of grass-type moves and outsmart your opponents in battle. Ready to evolve?'
  },
  {
    path: 'https://www.ytgraphics.com/wp-content/uploads/2014/12/pokmeon.jpg',
    description: 'Ignite your team with Charmander’s fiery spirit! Choose the fire-type starter and blaze through your battles. Create the ultimate team to become the Pokémon Champion!'
  },
  {
    path: 'https://licensing.biz/wp-content/uploads/2024/10/Pokemon-Full-image-1024x576.png',
    description: 'Dive into victory with Squirtle! Ready to take on every challenge? Build a well-rounded team and experience the thrill of strategic battles with this water-type powerhouse!'
  },
  {
    path: 'https://licensing.biz/wp-content/uploads/2024/10/Pokemon-Full-image-1024x576.png',
    description: '⚡️ Join Pikachu and electrify your team! With its speed and powerful Electric-type moves, Pikachu is ready to help you conquer every gym challenge. Ready to be a Pokémon Master?'
  }
];


function Home():JSX.Element {
    let mainContent = (
        <main>
            <Carousel items={itemsCarrousel}/>
            <h1>Welcome to Pokecup</h1>
            <p>Your one-stop destination for all things Pokémon!</p>
            <p>Explore our features and join the community.</p>
            <p>Stay tuned for more updates!</p>
            <section>
                <div className={style.aboutSection}>
  <h2>Sobre o Projeto 📝</h2>
  <p>
    Este site foi desenvolvido como parte de um <strong>trabalho interdisciplinar</strong> do curso de <strong>Tecnologia em Sistemas para Internet</strong> do <strong>IFES - Campus Santa Teresa</strong>, com o objetivo de explorar novas tecnologias, aprimorar habilidades no desenvolvimento de aplicações web e oferecer uma experiência interativa aos usuários. 
    O projeto é <strong>sem fins lucrativos</strong> e visa proporcionar um estudo profundo sobre a criação de interfaces e manipulação de APIs.
  </p>

  <p>
    O site foi alimentado pela <a href="https://pokeapi.co/" target="_blank" className={style.link}>API oficial da PokeAPI</a>, uma API pública que fornece informações detalhadas sobre os Pokémon. Com ela, conseguimos criar uma galeria interativa e dinâmica dos Pokémon, onde os usuários podem visualizar informações como nome, tipo, habilidades, e muito mais. ⚡️
  </p>

  <p>
    🚧 <strong>Futuras Atualizações</strong>: Este projeto ainda está em andamento, e teremos muitas melhorias no futuro, incluindo mais páginas e funcionalidades para você explorar. Fique atento para as atualizações!
  </p>

  <p>
    🔥 <strong>Montar Seu Time</strong>: Para uma experiência ainda mais completa, vá para a seção de <strong>VGC</strong> e monte seu time Pokémon! 
    💥 Ao clicar em "Montar seu time", você poderá visualizar a galeria dos Pokémon formados através da API e conferir o poder da sua seleção.
  </p>

  <p>
    Estamos animados para continuar desenvolvendo o projeto e adicionar novos recursos para tornar essa plataforma ainda mais interativa. 💻✨
  </p>

  <div className={style.footerInfo}>
    <p><strong>Instituição:</strong> IFES - Campus Santa Teresa</p>
    <p><strong>Curso:</strong> Tecnologia em Sistemas para Internet</p>
    <p><strong>Disciplinas:</strong> Front-end II, Programação Orientada a Objetos II, Arquitetura de Software</p>
    <p><strong>Aluno:</strong> Paulo André Soares da Silva</p>
  </div>
</div>

            </section>
        </main>
    );
  return (
    <PageBuilder main={mainContent}/>
  );
}

export default Home;