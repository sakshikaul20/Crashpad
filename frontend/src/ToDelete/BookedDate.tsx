import React, { useState } from 'react';
import Properties from './Properties';
import Calendar from '../components/Calendar';

const BookedDates = () => {
    const [bookedDates, setBookedDates] = useState([]);

    const handlePropertyBooking = (dates) => {
        setBookedDates([...bookedDates, ...dates]);
    };

    return (
        <div>
            <Properties onPropertyBooking={handlePropertyBooking} />
            <Calendar bookedDates={bookedDates} />
        </div>
    );
};

export default BookedDates
