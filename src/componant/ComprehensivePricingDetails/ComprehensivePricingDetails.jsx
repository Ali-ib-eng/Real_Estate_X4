import CartsPiece from '../CatrsPiece/CartsPiece'
import Sparkles from '../Sparkles/Sparkles'
import Title from '../Title/Title'
import TopOfThePricesCarts from '../TopOfThePricesCarts/TopOfThePricesCarts'
import './comprehensivePricingDetails.css'

const ComprehensivePricingDetails = () => {
    return (
        <div className='za-ComprehensiveContainer'>
            <Sparkles />
            <Title
                title="Comprehensive Pricing Details"
                subTitle="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
            />
            <div className="za-note">
                <h3>Note</h3>
                <p>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </div>
            <div className="za-prices-section">
                <div className="za-firstChild-prices">
                    <span>Listing Price</span>
                    <h2>$1,250,000</h2>
                </div>
                <div className="za-prices-container">
                    <TopOfThePricesCarts title='Additional Fees'>
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Property Transfer Tax" price="$25,000" description="Based on the sale price and local regulations" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Legal Fees" price="$3,000" description="Approximate cost for legal services, including title transfer" />
                        </div>
                        <hr />
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Home Inspection" price="$500" description="Recommended for due diligence" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Property Insurance" price="$1,200" description="Annual cost for comprehensive property insurance" />
                        </div>
                        <hr />
                        <CartsPiece title="Mortgage Fees" price="Varies" description="If applicable, consult with your lender for specific details" />
                    </TopOfThePricesCarts>

                    <TopOfThePricesCarts title='Monthly Costs'>
                        <CartsPiece title="Property Taxes" price="$1,250" description="Approximate monthly property tax based on the sale price and local rates" />
                        <hr />
                        <CartsPiece title="Homeowners' Association Fees" price="$300" description="Monthly fee for common area maintenance and security" />
                    </TopOfThePricesCarts>

                    <TopOfThePricesCarts title="Total Initial Costs">
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Listing Price" price="$1,250,000" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Additional Fees" price="$29,700" description="Property transfer tax, legal fees, inspection, insurance" />
                        </div>
                        <hr />
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Down Payment" price="$250,000" description="20%" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Mortgage Amount" price="$1,000,000" description="If applicable" />
                        </div>
                    </TopOfThePricesCarts>

                    <TopOfThePricesCarts title="Monthly Expenses">
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Property Taxes" price="$1,250" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Homeowners' Association Fee" price="$300"/>
                        </div>
                        <hr />
                        <div className="za-twoPriceCards">
                            <CartsPiece title="Mortgage Payment" price="Varies based on terms and interest rate" description="If applicable" />
                            <hr className='hrStyling' />
                            <CartsPiece title="Property Insurance" price="$100" description="Approximate monthly cost" />
                        </div>
                    </TopOfThePricesCarts>

                </div>
            </div>
        </div>
    )
}

export default ComprehensivePricingDetails
