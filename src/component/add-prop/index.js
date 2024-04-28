import './index.css';
import Box from '../box';
import ListItem from '../list-item';
import Heading from '../heading';

export default function AddProp({houseRules, cancellationPolicy, localTransportation, hostLanguages, specialOffers}) {
    return (
        <Box shadow>
            <Heading>Additional Properties</Heading>
            <ul className='prop-list'>
                <ListItem>
                    <span className='add-item'>Hause rules:</span>
                    <p className='prop-item'>{houseRules}</p>
                </ListItem>
                <ListItem>
                    <span className='add-item'>Cancelation policy:</span>
                    <p>{cancellationPolicy}</p>
                </ListItem>
                <ListItem>
                    <span className='add-item'>Public Transportation:</span>
                    <p>{localTransportation}</p>
                </ListItem>
                <ListItem>
                    <span className='add-item'>Host language:</span>
                    <p>{hostLanguages}</p>
                </ListItem>
                <ListItem>
                    <span className='add-item'>Special Offers:</span>
                    <p>{specialOffers}</p>
                </ListItem>
            </ul>
        </Box>
    )
}