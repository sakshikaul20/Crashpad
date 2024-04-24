import React from 'react';
import { Card, CardContent, Typography, TextField, ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CustomCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginTop: '0px',
  height: "400px"
});

const CustomToggleButton = styled(ToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#FDA117',
  },
});

const ReservationCard = () => {
  // State for selected cancellation policy
  const [cancellation, setCancellation] = React.useState('non-refundable');

  const handleCancellationChange = (event, newCancellation) => {
    if (newCancellation !== null) {
      setCancellation(newCancellation);
    }
  };
  const navigate = useNavigate();
  const handlereservecrashpad = () => {
    navigate('/payment'); 
  };

  return (
    <CustomCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          $100/night
        </Typography>
        <TextField
          size="small"
          label="Check-in"
          type="date"
          defaultValue="2024-06-23"
          sx={{ marginRight: '10px', width: 'calc(50% - 10px)' }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          size="small"
          label="Check-out"
          type="date"
          defaultValue="2024-06-23"
          sx={{ width: 'calc(50% - 10px)' }}
          InputLabelProps={{ shrink: true }}
        />
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          Guests
        </Typography>
        <TextField
          size="small"
          type="number"
          defaultValue={1}
          InputProps={{ inputProps: { min: 1 } }}
          sx={{ width: '100px', marginBottom: '20px' }}
        />
        <Typography variant="body1" gutterBottom>
          Cancellation Policies
        </Typography>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={cancellation}
          exclusive
          onChange={handleCancellationChange}
          fullWidth
        >
          <CustomToggleButton value="non-refundable">
            Non-refundable Total• $240 
          </CustomToggleButton>
          <CustomToggleButton value="refundable">
            Refundable Total • $230 
          </CustomToggleButton>
        </ToggleButtonGroup>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          Total after taxes $255 total
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: '#FDA117', marginTop: '20px' }}
          fullWidth
          onClick={handlereservecrashpad}
          
        >
          Reserve
        </Button>
        
      </CardContent>
    </CustomCard>
  );
};

export default ReservationCard;
