import './arrowBtns.css'

const ArrowsBtns = ({ onPrev, onNext }) => {
  return (
    <div className="arrowsIcons">
      <button onClick={onPrev} ><img src="/Real_Estate_X4//assets/icons/faq/arrow-left.svg" alt="arrow" className="X4Team"/></button>
      <button onClick={onNext}><img src="/Real_Estate_X4//assets/icons/faq/arrow-right.svg" alt="arrow" class="X4Team"/></button>
    </div>
  )
}

export default ArrowsBtns
