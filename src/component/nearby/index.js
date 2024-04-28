import './index.css';
import Box from '../box';
import ListItem from '../list-item';
import Heading from '../heading';
import { Fragment } from 'react';

export default function Nearby({list}) {
    return (
        <Box shadow>
            <Heading className='nearby-title'>Nearby</Heading>
            <div className='nearby-list'>
            {list.map(({ id, ...rest }) => (
                <Fragment key={id}>
                    <Item {...rest} />
                </Fragment>
            ))}
        </div>
        </Box>
    )
}

function Item({ name, link }) {
    return (
        <ListItem>
            <a href={link}>{name}</a>
        </ListItem>
    )
}