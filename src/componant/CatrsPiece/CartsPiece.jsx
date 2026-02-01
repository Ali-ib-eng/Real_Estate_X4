import "./cartsPiece.css";
import Badge from "./../Badge/Badge.jsx";

const CartsPiece = ({ title, price, description }) => {
  return (
    <div className="za-cartsPieces">
      <h5>{title}</h5>
      <div className="za-priceReason">
        <h3>{price}</h3>
        {description && <Badge badgeLabel={description} />}
      </div>
    </div>
  );
};

export default CartsPiece;
