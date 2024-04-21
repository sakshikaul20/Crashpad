import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import crashPadImg from './../../images/profile4.jpg';

const Favourite: React.FC = () => {



    return (
        <>
        <div style={{ display:'flex',gap:'8px' }}>
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150}}
                image={crashPadImg}
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
        <Card  sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 150 }}
                image={crashPadImg}
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
                image={crashPadImg}
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
                image={crashPadImg}
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
                image={crashPadImg}
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