import Item from "../../../ts/model/Item";
import Style from "./CardItemPoke.module.css";

type CardItemProps = {
  item: Item;
};

function CardItem({ item }: CardItemProps) {
  return (
    <div className={Style.cardItem}>
      <div className={Style.itemImg}>
        <img src={item.sprite} alt={item.nome} />
      </div>
      <div className={Style.itemDetails}>
        <h2>{item.nome}</h2>
        <p>{item.efeito}</p>
      </div>
    </div>
  );
}

export default CardItem;