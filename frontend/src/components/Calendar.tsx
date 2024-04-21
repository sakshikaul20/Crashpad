import React, { useState } from 'react';
import { Calendar as BigCalendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'; // Import moment library for localizing dates
import NavigationView from './CalNavView.tsx';

const localizer = momentLocalizer(moment); // Use moment for localizing dates

// Define custom views object with your custom view
const customViews = {
  navigationView: NavigationView,
};

const Calendar = ({ events, startAccessor, endAccessor, selectable, style }) => {
  // Function to handle navigation actions
  const handleNavigate = (action) => {
    // Implement navigation logic here
    console.log(`Navigating ${action}`);
    };


  return (
    <div>
      <BigCalendar
        localizer={localizer} // Pass the localizer
        events={events}
        startAccessor={startAccessor}
        endAccessor={endAccessor}
        selectable={selectable}
        style={{ height: '500px', ...style }}
        customViews={customViews}
        // views={Object.values(Views)} // Pass all available views
      />
    </div>
  );
};

export default Calendar;

