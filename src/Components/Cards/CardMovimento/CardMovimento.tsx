import Movimento from "../../../ts/model/Movimento";
import Style from "./CardMovimento.module.css"

type CardMovimentoProps = {
  movimento: Movimento;
};

function CardMovimento({ movimento }: CardMovimentoProps) {
  return (
    <div className={Style.cardMovimento}>
      <div className={Style.movimentoDetails}>
        <h2>{movimento.nome}</h2>
        <p><strong>Dano:</strong> {movimento.dano}</p>
        <p><strong>Efeito:</strong> {movimento.efeito}</p>
      </div>
    </div>
  );
}

export default CardMovimento;
