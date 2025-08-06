import { JSX } from "react";
import PageBuilder from "../../components/Parents/PageBuilder/PageBuilder";
import ButtonPage from "../../components/Children/ButtonPage/ButtonPage";
import Carousel ,{ CarouselItem } from "../../components/Children/Carrosel/Carrosel";

let itemsCarrousel: CarouselItem[] = [
  {
    path: 'https://i.redd.it/zfpt5r6fvizc1.jpeg',
    description: 'the vgc team builder is a tool designed to help players create and manage their teams for the Pokémon Video Game Championships (VGC). It allows users to select Pokémon, customize movesets, and strategize for competitive battles.'
  },
  {
    path: 'https://wallpapers.com/images/hd/pokemon-battle-background-qoi7z64gwndr08c6.jpg',
    description: 'enjoy the thrill of building your VGC team with our intuitive interface! Select your favorite Pokémon, customize their moves, and prepare for epic battles in the Pokémon Video Game Championships.'
  },
  {
    path: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/pokemon-go-battle-encounters-banner.jpg?q=70&fit=contain&w=1200&h=628&dpr=1',
    description: 'make your journey in the Pokémon Video Game Championships unforgettable with our VGC team builder! Strategize, customize, and dominate the competition with your unique team of Pokémon.'
  }
];

function VGC():JSX.Element {
    let mainContent = (
        <main>
            <Carousel items={itemsCarrousel}/>
            <h1>VGC Team Builder</h1>
            <p>Welcome to the VGC Team Builder!</p>
            <p>Here you can create and manage your VGC teams.</p>
            <p>Stay tuned for more features!</p>
            <ButtonPage name='montar meu time' hrf='/VGC/TeamBuilder'/>
        </main>
    );
    return (
        <PageBuilder main={mainContent}/>
    );
}

export default VGC;