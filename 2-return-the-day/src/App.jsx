import React, { useState } from 'react';
import './App.css';

function App() {
  const [dayResult, setDayResult] = useState('');

  function getWeekday(day) {
    switch (day) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Wrong, please enter a number between 1 and 7";
    }
  }

  // console.log(getWeekday(1));
  // console.log(getWeekday(0));
  // console.log(getWeekday(2));

  const handleButtonClick = (day) => {
    setDayResult(getWeekday(day));
  };

  return (
    <div className="app-container">
      <h1>Get Weekday</h1>
      <div className="buttons-container">
        {[1, 2, 3, 4, 5, 6, 7].map(day => (
          <button key={day} onClick={() => handleButtonClick(day)}>
            {`Day ${day}`}
          </button>
        ))}
      </div>
      <div className="result-container">
        <p>{dayResult}</p>
      </div>
    </div>
  );
}

export default App;
