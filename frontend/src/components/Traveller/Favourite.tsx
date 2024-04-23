import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import crashPadImg1 from '../../images/Lot1.jpg';
import crashPadImg2 from '../../images/Lot2.jpg';
import crashPadImg3 from '../../images/Lot3.jpg';
import crashPadImg4 from '../../images/Lot4.jpg';
import crashPadImg5 from '../../images/Lot5.jpg';


const Favourite: React.FC = () => {



    return (
        <>
        <div style={{ display:'flex',gap:'8px' }}>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150}}
                image={crashPadImg1}
                title="green iguana"
            />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                CrashPad 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                City, State, Zip code | Distance
                Stays | Rating
                Request | Stays
                </Typography>
            </CardContent>
        </Card>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={crashPadImg2}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                CrashPad 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                City, State, Zip code | Distance
                Stays | Rating
                Request | Stays
                </Typography>
            </CardContent>
        </Card>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={crashPadImg3}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                CrashPad 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                City, State, Zip code | Distance
                Stays | Rating
                Request | Stays
                </Typography>
            </CardContent>
        </Card>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={crashPadImg4}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                CrashPad 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                City, State, Zip code | Distance
                Stays | Rating
                Request | Stays
                </Typography>
            </CardContent>
            
        </Card>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150}}
                image={crashPadImg5}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                Indiana Dunes State Park beach trail campground
                </Typography>
                <Typography variant="body2" color="text.secondary">
                City, State, Zip code | Distance
                Stays | Rating
                Request | Stays
                </Typography>
            </CardContent>
        </Card>
        
        </div>
        </>
    );
}

export default Favourite