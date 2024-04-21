import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CloseIcon from '@mui/icons-material/Close';

const images = [
  {
    original: 'path/to/image1.jpg',
    thumbnail: 'path/to/thumbnail1.jpg',
  },
  // More images...
];

const ReservationModal = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
  
    const handleDateChange = (value, event) => {
      setSelectedDate(value);
    };
  
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={{ /* Add styles for the modal box */ }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
  
          <ImageGallery items={images} />
  
          <Typography variant="h6">What this place offers</Typography>
          {/* Additional info here... */}
  
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
  
          <Grid container spacing={2}>
            {/* Reservation Form */}
            <Grid item xs={6}>
              <TextField
                label="Check-in"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Check-out"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Guests"
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">$42/night</Typography>
              {/* Additional price info and policies here... */}
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained">
                Reserve
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };
  
  export default ReservationModal;
  