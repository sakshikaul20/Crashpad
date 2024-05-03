import React, { useState } from "react";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import NavigationView from "./CalNavView.tsx";

const localizer = momentLocalizer(moment);

const customViews = {
  navigationView: NavigationView,
};

const Calendar = ({
  events,
  startAccessor,
  endAccessor,
  selectable,
  style,
}) => {
  const handleNavigate = (action) => {
    console.log(`Navigating ${action}`);
  };

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor={startAccessor}
        endAccessor={endAccessor}
        selectable={selectable}
        style={{ height: "500px", ...style }}
        customViews={customViews}
      />
    </div>
  );
};

export default Calendar;
