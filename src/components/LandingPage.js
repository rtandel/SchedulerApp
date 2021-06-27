import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function LandingPage() {
  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());





  function addDay(e) {
    e.preventDefault()
    console.log(selectedDate)
    if (days.indexOf(selectedDate) > -1) {
        return;
    }
    let array = [...days];
    array.push(selectedDate);
    console.log(array);
    setDays([...array]);
  }

  return (
    <div>
      {days.length == 0 ? <h1>No days entered yet</h1> : <h1>Non empty</h1>}

      <form onSubmit={addDay}>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
