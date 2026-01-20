import './arrowBtns.css'

const ArrowsBtns = ({ onPrev, onNext }) => {
  return (
    <div className='arrowsIcons'>
      <button onClick={onPrev}><img src="/assets/icons/faq/arrow-left.svg" alt="arrow" /></button>
      <button onClick={onNext}><img src="/assets/icons/faq/arrow-right.svg" alt="arrow" /></button>
    </div>
  )
}

export default ArrowsBtns
