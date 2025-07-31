import React from "react"
import styles from './CardsPoke.module.css';

type CardsProps = {
    nome:React.ReactNode;
    tipos:React.ReactNode;
    urlImg:React.ReactNode;
}

function CardsPoke(props: CardsProps) {
  let name = props.nome as string; 
  let types = props.tipos as string[]; 
  let urlImg = props.urlImg as string;

  return (
    <div className={styles.cardsPoke}>
      <img src={urlImg} alt={name} />
      <div className="itens">
        <h2>{name}</h2>
        <div>
          {types.map((tipo: string, index: number): React.ReactNode => {
            let bgColor = '';

            switch (tipo.toLowerCase()) {
              case 'fire':
                bgColor = '#FF5722';
                break;
              case 'water':
                bgColor = '#2196F3';
                break;
              case 'grass':
                bgColor = '#4CAF50';
                break;
              case 'electric':
                bgColor = '#FFEB3B';
                break;
              case 'psychic':
                bgColor = '#9C27B0';
                break;
              case 'ice':
                bgColor = '#03A9F4';
                break;
              case 'rock':
                bgColor = '#795548';
                break;
              case 'ground':
                bgColor = '#A1887F';
                break;
              case 'poison':
                bgColor = '#673AB7';
                break;
              case 'bug':
                bgColor = '#8BC34A';
                break;
              case 'dragon':
                bgColor = '#3F51B5';
                break;
              case 'flying':
                bgColor = '#00BCD4';
                break;
              case 'fighting':
                bgColor = '#E53935';
                break;
              case 'ghost':
                bgColor = '#607D8B';
                break;
              case 'steel':
                bgColor = '#B0BEC5';
                break;
              case 'dark':
                bgColor = '#212121';
                break;
              case 'fairy':
                bgColor = '#F06292';
                break;
              case 'normal':
                bgColor = '#BDBDBD';
                break;
              default:
                bgColor = '#BDBDBD';
            }

            return (
              <h3 key={index} style={{backgroundColor: bgColor}}>
                {tipo}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardsPoke;