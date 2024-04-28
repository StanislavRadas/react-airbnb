import './index.css';
import Box from '../box';
import ListItem from '../list-item';
import Heading from '../heading';

export default function Amenities({ amenities }) {
    const renderAmenitiesList = () => {
        const amenitiesKeys = Object.keys(amenities);
        return amenitiesKeys.map(key => {
            if (amenities[key]) {
                return (
                    <ListItem key={key}>
                        <span>{key}</span>
                    </ListItem>
                );
            }
            return null;
        });
    };

    return (
        <Box shadow>
            <Heading>Amenities</Heading>
            <ul className='amenities-list'>
                {renderAmenitiesList()}
            </ul>
        </Box>
    );
}