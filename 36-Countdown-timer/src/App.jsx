
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () =>{
    setIsStart(true);
  }

  const handleReset = () =>{
    setIsStart(false);
    clearInterval(timerId);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerId(null);
  }

  const handlePause = ()=>{
    setIsStop(true);
    clearInterval(timerId);
  }

  const handleResume = ()=>{
    setIsStop(false);
    runTimer(seconds, minutes, hours);

  }

  const handleInput = (e) =>{

    const value = parseInt(e.target.value);
    const id = e.target.id;
    if(id === 'hours'){
      setHours(value);
    } else if (id === 'minutes'){
      setMinutes(value);
    } else{
      setSeconds(value);
    }
  }

  const runTimer = (sec, min, hr, tid) =>{
    if (hours === 0 && minutes === 0 && seconds === 0) {
      handleReset();
      return;
    }


    if(sec > 0){
      setSeconds((s)=> s - 1);
    } else if(sec === 0 && min > 0){
      setMinutes((m)=> m-1);
      setSeconds(59);
    } else {
      setHours((h)=> h-1);
      setMinutes(59);
      setSeconds(59);
    }
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid)
      },1000)

      setTimerId(tid);
    }

    return () =>{
      clearInterval(tid);
    }
  }, [isStart, hours, minutes, seconds])

  return (
    <>
      <h1>Countdown Timer</h1>
      {!isStart && <div className="input-container">
        <div className="input-box">
          <input type="text" id='hours' placeholder='HH' onChange={handleInput}/>
          <input type="text" id='minutes' placeholder='MM' onChange={handleInput}/>
          <input type="text" id='seconds' placeholder='SS' onChange={handleInput}/>
        </div>
        <button 
          className='timer-button'
          onClick={handleStart}
        >Start</button>
      </div>}

      {isStart && <div className="show-container">
        <div className="timer-box">
          <div>{hours < 10 ? `0${hours}` : hours} </div>
          <span>:</span>
          <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
          <span>:</span>
          <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>

        <div className="action-box">
          <button className='timer-button' onClick={handleReset}>Reset</button>
          {isStop ? (
            <button className='timer-button' onClick={handleResume}>Resume</button>
          ) : (
            <button className='timer-button' onClick={handlePause}>Pause</button>

          )}
        </div>
      </div>}
    </>
  )
}

export default App
