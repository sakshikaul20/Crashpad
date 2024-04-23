import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import crashPadImg from '../../images/Pad1.jpg';

const PastBooking: React.FC = () => {



    return (
        <>
        <div style={{ display:'flex',gap:'8px' }}>
            <Card  sx={{ maxWidth: 200 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={crashPadImg}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    CrashPad 8
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
                    CrashPad 9
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
                    CrashPad 10
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
                    CrashPad 11
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
                    CrashPad 12
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

export default PastBooking