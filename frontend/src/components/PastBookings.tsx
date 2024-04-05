import React from 'react';
import { Card, Typography } from '@mui/material';
// import { VehicleType } from './Component/Types';
import styled from 'styled-components';

interface PastBookingsProps {
    id: number;
    propertyName: string;
    // vehicleType: string;
    date: number;
    amount: number;
    emptyMessage?: string;
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


const PastBookingsContainer = ({ id, propertyName, vehicleType, date, amount, emptyMessage }) => {
    return (
      <Container>
        <Typography variant="h5" gutterBottom>Past Bookings</Typography>
        <Table>
          <thead>
            <tr>
              <TableHeader>Property Name</TableHeader>
              <TableHeader>Vehicle Type</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Amount</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>{propertyName}</TableData>
              <TableData>{vehicleType}</TableData>
              <TableData>{date}</TableData>
              <TableData>{amount}</TableData>
            </tr>
            <tr>
              <TableData>{propertyName}</TableData>
              <TableData>{vehicleType}</TableData>
              <TableData>{date}</TableData>
              <TableData>{amount}</TableData>
            </tr>
            <tr>
              <TableData>{propertyName}</TableData>
              <TableData>{vehicleType}</TableData>
              <TableData>{date}</TableData>
              <TableData>{amount}</TableData>
            </tr>
            <tr>
              <TableData>{propertyName}</TableData>
              <TableData>{vehicleType}</TableData>
              <TableData>{date}</TableData>
              <TableData>{amount}</TableData>
            </tr>
            <tr>
              <TableData>{propertyName}</TableData>
              <TableData>{vehicleType}</TableData>
              <TableData>{date}</TableData>
              <TableData>{amount}</TableData>
            </tr>

            {/* Additional rows if there are multiple bookings */}
          </tbody>
        </Table>
        {emptyMessage && <EmptyMessage>{emptyMessage}</EmptyMessage>}
      </Container>
    );
  };
  
  export default PastBookingsContainer;
  
