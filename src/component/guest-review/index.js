import './index.css'
import Heading from '../heading'
import { Fragment } from 'react'
import Box from '../box'

export default function GuestReview({list}) {
    return (
        <div className='room__block'>
        <Heading border>Guest review</Heading>
        <div className='room__list'>
            {list.map(({ id, ...rest }) => (
                <Fragment key={id}>
                    <View {...rest} />
                </Fragment>
            ))}
        </div>
    </div>
    )
}

function View({ guestName, rating, review }) {
    return (
        <Box className='room'>
            <div className='flex-view'>
                <span className='review__title'>{guestName}</span>
                <span className='review__info'>Rating: {rating}</span>
            </div>
            <p>{review}</p>
        </Box>
    )
}