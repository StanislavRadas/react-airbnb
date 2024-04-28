import './index.css'

export default function Host({name, image, response_rate, response_time, info, phone}) {
    return (
        <div className='flex'>
            <img src={image} className='host-img' />
            <div className='title'>
            <h1 className='title__text'>HOST - {name}</h1>
            <div className='title__sub-block'>
                <span className='title__sub-value'>{phone} rating</span>
                <span className='title__sub-value'>{response_time} feedback</span>
                <span className='title__sub-value'>{response_rate}% answer speed </span>
            </div>
            <div className='title__sub-value'>{info}</div>
        </div>
        </div>
    )
}