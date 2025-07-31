import React, { ReactNode } from "react"
import styles from './CardsPoke.module.css';

interface CardsProps {
  nome: React.ReactNode
  tipos: React.ReactNode;
  urlImg: React.ReactNode;
}

function getTipoColor(tipo: string): string {
  switch (tipo.toLowerCase()) {
    case 'fire': return '#FF5722';
    case 'water': return '#2196F3';
    case 'grass': return '#4CAF50';
    case 'electric': return '#FFEB3B';
    case 'psychic': return '#9C27B0';
    case 'ice': return '#03A9F4';
    case 'rock': return '#795548';
    case 'ground': return '#A1887F';
    case 'poison': return '#673AB7';
    case 'bug': return '#8BC34A';
    case 'dragon': return '#3F51B5';
    case 'flying': return '#00BCD4';
    case 'fighting': return '#E53935';
    case 'ghost': return '#607D8B';
    case 'steel': return '#B0BEC5';
    case 'dark': return '#212121';
    case 'fairy': return '#F06292';
    case 'normal': return '#BDBDBD';
    default: return '#BDBDBD';
  }
}


function CardsPoke(props: CardsProps) {
  let nome = props.nome as string; 
  let types = props.tipos as string[]; 
  let urlImg = props.urlImg as string;
  
  return (
    <div
      className={`${styles.cardsPoke}`}
    >
      <img src={urlImg} alt={nome} />
      <div className="itens">
        <h2>{nome}</h2>
        <div>
          {types.map((tipo: string, index: number): React.ReactNode => {
            const bgColor = getTipoColor(tipo);
            return (
              <h3 key={index} style={{ backgroundColor: bgColor }}>
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