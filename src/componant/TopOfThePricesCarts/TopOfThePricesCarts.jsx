import BtnsSecondStyle from '../BtnsSecondStyle/BtnsSecondStyle'
import './topOfThePricesCarts.css'

const TopOfThePricesCarts = ({ title,children }) => {
    return (
        <div className='za-pricesCartsContainer'>
            <div className="za-topPricesCart">
                <h4>{title}</h4>
                <BtnsSecondStyle
                    btnTitle='Learn More'
                />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default TopOfThePricesCarts
