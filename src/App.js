import React, {useState, useEffect} from 'react';
import CountdownTimer from './components/CountdownTimer';
import classes from './App.module.css';



function App() {
  // const THREE_DAYS_IN_MS = 3*24*60*60;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = THREE_DAYS_IN_MS+ NOW_IN_MS;
  const [inputDate, setInputDate] = useState(0);
  const [targetDateToMS, setTargetDateToMS] = useState(0);

  const inputHandler = (e) => {
  
    setInputDate(e.target.value);

    let newTargetDateToMS = new Date(e.target.value).getTime();
    setTargetDateToMS(newTargetDateToMS);

  };

  // useEffect(()=>{
  //   let newTargetDateToMS = new Date(inputDate).getTime();
  //   setTargetDateToMS(newTargetDateToMS);

  // },[inputDate]);



  return (
    <div className={classes.container}>
      <h1>Countdown Timer</h1>
      <div className={classes.inputStyle}>
        <label>Select a Date and Time</label>
        <input 
          type='datetime-local' 
          value={inputDate} 
          onChange={inputHandler}
          min="2023-06-01T08:30"
          max="2050-06-30T16:30"
          required
        />
      </div>
      <CountdownTimer targetTime = {targetDateToMS}/>
    </div>
  );
}

export default App;
