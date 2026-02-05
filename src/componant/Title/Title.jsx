import'./title.css'

const Title = ({title,subTitle}) => {
  return (
    <div className='za-forTitle'>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title
