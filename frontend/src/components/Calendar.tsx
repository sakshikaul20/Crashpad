import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { Calendar as BigCalendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'; // Import moment library for localizing dates

const localizer = momentLocalizer(moment); // Use moment for localizing dates

const Calendar = ({ events, startAccessor, endAccessor, selectable, style }) => {
  return (
    <div>
      <BigCalendar
        localizer={localizer} // Pass the localizer
        events={events}
        startAccessor={startAccessor}
        endAccessor={endAccessor}
        selectable={selectable}
        style={{ height: '500px' }}
        views={Object.values(Views)} // Pass all available views
      />
    </div>
  );
};

export default Calendar;




// const MyCalendar: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | Date[] | null>(null);

//   const handleDateChange = (value: Date | Date[] | null, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     setSelectedDate(value);
//   };

//   return (
//     <div>
//       <h1>Booking Calendar</h1>
//       <Calendar
//         defaultvalue={selectedDate}
//         onChange={handleDateChange}
//         calendarType="US"
//       />
//       {selectedDate && (
//         <p>Selected Date: {selectedDate instanceof Date ? selectedDate.toLocaleDateString() : null}</p>
//       )}
//     </div>
//   );
// };

// export default MyCalendar;
