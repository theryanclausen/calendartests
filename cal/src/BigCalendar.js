import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import styled from "styled-components";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

const CalendarDay = styled(Calendar)`
  margin: 20px;

  .rbc-time-view {
    height: 500px;
    width: 600px;
  }
  .rbc-event {
    background: purple;
  }
`;

const CalendarMonth = styled(Calendar)`
  margin: 20px;
  
  .rbc-month-view {
    border-radius: 21px;
    overflow: hidden;
    height: 450px;
    width: 250px;
    border-color:red;
  }
  .rbc-row-bg{

  }
  .rbc-row-segment{
      height:10px;

  }
  .rbc-event {
    background: purple;
    width:5px;
    height:8px;
  }
`;

class BigCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(moment()),
        end: new Date(moment().add(1, "hour")),
        title: "Dance"
      },
      {
        start: new Date(moment("2019-01-13 15")),
        end: new Date(moment("2019-01-13 16")),
        title: "Party"
      }
    ],
    participants: [
      {
        start: new Date(moment()),
        end: new Date(moment().add(1, "hour")),
        title: "Mom"
      },
      {
        start: new Date(moment()),
        end: new Date(moment().add(1, "hour")),
        title: "Tina"
      },
      {
        start: new Date(moment("2019-01-13 15")),
        end: new Date(moment("2019-01-13 16")),
        title: "Dad"
      },
      {
        start: new Date(moment("2019-01-13 15")),
        end: new Date(moment("2019-01-13 16")),
        title: "Roofus"
      }
    ]
  };

  render() {
    return (
      <div
        className="App"
        style={{
          maxWidth: "900px",
          display: "flex",
          justifyContent: "spaceBetween"
        }}
      >
        <CalendarDay
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          scrollToTime={new Date(moment().subtract(2, "hours"))}
        />
        <CalendarMonth
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.participants}
          popup
          toolbar={false}
          getDrilldownView={(
            targetDate,
            currentViewName,
            configuredViewNames
          ) => {
            if (
              currentViewName === "month" &&
              configuredViewNames.includes("week")
            ) {
              return "week";
            }
            return null;
          }}
        />
      </div>
    );
  }
}

export default BigCalendar;
