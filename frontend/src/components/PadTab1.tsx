import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
// import Pad1 from '../images/Pad1.jpg'
import CountryEscape from '../images/CountryEscape.jpg';
import Calendar from "./Calendar.tsx";


const PadOne: React.FC = () => {

    const events = [
        {
            title: 'Doe Reservation',
            start: new Date(2024, 3, 21),
            end: new Date(2024, 3, 27),
        }
        // Add more events as needed
    ];

    return (
        <>
        <div style={{ display:'flex', gap:'50px' }}>
            <Link to="../property1"> {/* Link to the desired component */}
                <Card  sx={{ maxWidth: 500, maxHeight: 500 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={CountryEscape}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Country Escape
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        City, State, Zip code | Distance
                        Stays | Rating
                        Request | Stays
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
            {/* Calendar component */}
            <Calendar
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                style={{ height: '350px' }}
            />
            
        </div>
        </>
    );
}

export default PadOne