import './cartsPiece.css'

const CartsPiece = ({ title, price, description}) => {
    return (
        <div className='za-cartsPieces'>
            <h5>{title}</h5>
            <div className="za-priceReason">
                <h3>{price}</h3>
                {description && <p>{description}</p>}
            </div>
        </div>

    )
}

export default CartsPiece
