import React, { useState } from 'react';
import { Card, Typography, MenuItem, FormControl, Select } from '@mui/material';
import styled from 'styled-components';

interface PastBookingsProps {
  pastBookings: PastBooking[];
  properties: Property[];
}

interface Property {
  id: number;
  name: string;
}

interface PastBooking {
  id: number;
  propertyName: string;
  month: string;
  date: string;
  amount: number;
}

// Styled component for the PastBookingsContainer
const Container = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2em;
  border-radius: 20px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
  margin-right: 1em;
`;

// Styled component for the table
const Table = styled.table`
  width: 40%;
  border-collapse: collapse;
  margin-bottom: 1em;
`;

// Styled component for table header
const TableHeader = styled.th`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// Styled component for table data
const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// Styled component for empty message
const EmptyMessage = styled(Typography)`
  margin-top: 1em;
`;

const PastBookingsContainer: React.FC<PastBookingsProps> = ({ pastBookings, properties }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedProperty, setSelectedProperty] = useState<string>('All');

  // Filter past bookings based on selected month and property
  const filteredPastBookings = pastBookings ? pastBookings.filter(booking => {
    if (selectedMonth !== 'All' && booking.month !== selectedMonth) return false;
    if (selectedProperty !== 'All' && booking.propertyName !== selectedProperty) return false;
    return true;
  }) : [];

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Past Bookings</Typography>
      <FormControl>
        <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value as string)}>
          <MenuItem value="All">All Months</MenuItem>
          {/* Add menu items for each month */}
          <MenuItem value="January">January</MenuItem>
          <MenuItem value="February">February</MenuItem>
          {/* Add other months */}
        </Select>
      </FormControl>
      <FormControl>
        <Select value={selectedProperty} onChange={(e) => setSelectedProperty(e.target.value as string)}>
          <MenuItem value="All">All Properties</MenuItem>
          {/* Add menu items for each property */}
          {properties.map(property => (
            <MenuItem key={property.id} value={property.name}>{property.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Table>
        <thead>
          <tr>
            <TableHeader>Property Name</TableHeader>
            <TableHeader>Month</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredPastBookings.map(booking => (
            <tr key={booking.id}>
              <TableData>{booking.propertyName}</TableData>
              <TableData>{booking.month}</TableData>
              <TableData>{booking.date}</TableData>
              <TableData>{booking.amount}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      {filteredPastBookings.length === 0 && <EmptyMessage>No past bookings found.</EmptyMessage>}
    </Container>
  );
};

export default PastBookingsContainer;
