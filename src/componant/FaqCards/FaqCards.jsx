import'./faqCards.css'

const FaqCards = ({question,description,btn,children}) => {
  return (
    <div className='card'>
        <h2>{question}</h2>
        <p>{description}</p>
        {children}
    </div>
  )
}

export default FaqCards
