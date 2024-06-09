
import { useState } from "react";
import Calendar from "react-calendar";

const ReactCalender = () => {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    fetchEvent(newDate);
  };

  const formatDate = (date) => {
    // Ensure the date is in 'YYYY-MM-DD' format
    return date.toISOString().split('T')[0];
  };

  const fetchEvent = (selectedDate) => {
    const calendarEvents = [
      { "date": "6/1/2024", "title": "Event 1" },
      { "date": "6/2/2024", "title": "Event 2" },
      { "date": "6/3/2024", "title": "Event 3" },
      { "date": "6/4/2024", "title": "Event 4" },
      { "date": "6/5/2024", "title": "Event 5" },
      { "date": "6/6/2024", "title": "Event 6" },
      { "date": "6/7/2024", "title": "Event 7" },
      { "date": "6/8/2024", "title": "Event 8" },
      { "date": "6/9/2024", "title": "Event 9" },
      { "date": "6/10/2024", "title": "Event 10" },
      { "date": "6/11/2024", "title": "Event 11" },
      { "date": "6/12/2024", "title": "Event 12" },
      { "date": "6/13/2024", "title": "Event 13" },
      { "date": "6/14/2024", "title": "Event 14" },
      { "date": "6/15/2024", "title": "Event 15" },
      { "date": "6/16/2024", "title": "Event 16" },
      { "date": "6/17/2024", "title": "Event 17" },
      { "date": "6/18/2024", "title": "Event 18" },
      { "date": "6/19/2024", "title": "Event 19" },
      { "date": "6/20/2024", "title": "Event 20" },
      { "date": "6/21/2024", "title": "Event 21" },
      { "date": "6/22/2024", "title": "Event 22" },
      { "date": "6/23/2024", "title": "Event 23" },
      { "date": "6/24/2024", "title": "Event 24" },
      { "date": "6/25/2024", "title": "Event 25" },
      { "date": "6/26/2024", "title": "Event 26" },
      { "date": "6/27/2024", "title": "Event 27" },
      { "date": "6/28/2024", "title": "Event 28" },
      { "date": "6/29/2024", "title": "Event 29" },
      { "date": "6/30/2024", "title": "Event 30" }
    ];

    
    const foundEvent = calendarEvents.find(event => event.date === selectedDate.toLocaleDateString());
    console.log(selectedDate.toLocaleDateString())

    setEvent(foundEvent ? foundEvent.title : null);
  };

  return (
    <div>
      <Calendar
        className="react-calendar"
        onChange={handleDateChange}
        value={date}
      />
      <p className="date">{date.toDateString()}</p>
      <p>{event ? event : "No event on this date"}</p>
    </div>
  );
};

export default ReactCalender;
// import { useState, useEffect } from "react";
// import Calendar from "react-calendar";

// const ReactCalender = () => {
//   const [date, setDate] = useState(new Date());
//   const [event, setEvent] = useState(null);

//   const formatDate = (date) => {
//     // Ensure the date is in 'YYYY-MM-DD' format
//     return date.toISOString().split("T")[0];
//   };

//   const fetchEvent = (selectedDate) => {
//     const calendarEvents = [
//       { "date": "2024-06-01", "title": "Event 1" },
//       { "date": "2024-06-02", "title": "Event 2" },
//       { "date": "2024-06-03", "title": "Event 3" },
//       { "date": "2024-06-04", "title": "Event 4" },
//       { "date": "2024-06-05", "title": "Event 5" },
//       { "date": "2024-06-06", "title": "Event 6" },
//       { "date": "2024-06-07", "title": "Event 7" },
//       { "date": "2024-06-08", "title": "Event 8" },
//       { "date": "2024-06-09", "title": "Event 9" },
//       { "date": "2024-06-10", "title": "Event 10" },
//       { "date": "2024-06-11", "title": "Event 11" },
//       { "date": "2024-06-12", "title": "Event 12" },
//       { "date": "2024-06-13", "title": "Event 13" },
//       { "date": "2024-06-14", "title": "Event 14" },
//       { "date": "2024-06-15", "title": "Event 15" },
//       { "date": "2024-06-16", "title": "Event 16" },
//       { "date": "2024-06-17", "title": "Event 17" },
//       { "date": "2024-06-18", "title": "Event 18" },
//       { "date": "2024-06-19", "title": "Event 19" },
//       { "date": "2024-06-20", "title": "Event 20" },
//       { "date": "2024-06-21", "title": "Event 21" },
//       { "date": "2024-06-22", "title": "Event 22" },
//       { "date": "2024-06-23", "title": "Event 23" },
//       { "date": "2024-06-24", "title": "Event 24" },
//       { "date": "2024-06-25", "title": "Event 25" },
//       { "date": "2024-06-26", "title": "Event 26" },
//       { "date": "2024-06-27", "title": "Event 27" },
//       { "date": "2024-06-28", "title": "Event 28" },
//       { "date": "2024-06-29", "title": "Event 29" },
//       { "date": "2024-06-30", "title": "Event 30" }
//     ];

   
    
//     const foundEvent = calendarEvents.find(event => event.date === selectedDate.toISOString().split("T")[0]);
//     console.log(selectedDate)

//     setEvent(foundEvent ? foundEvent.title : null);
//   };

//   useEffect(() => {
//     fetchEvent(date);
//   }, [date]);

//   return (
//     <div>
//       <Calendar
//         className="react-calendar"
//         onChange={setDate}
//         value={date}
//       />
//       <p className="date">{date.toDateString()}</p>
//       <p>{event ? event : "No event on this date"}</p>
//     </div>
//   );
// };

// export default ReactCalender;

