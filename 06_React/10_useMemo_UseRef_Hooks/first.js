import React, { useCallback, useMemo, useRef, useState} from "react";
import ReactDOM from "react-dom/client"


function StopWatch(){
  
  const [time,setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false) 
  const intervalRef = useRef(null);

  function start(){
    if(!isRunning){
    setisRunning(true);  
    intervalRef.current = setInterval(()=>{
      setTime((time)=>time+1);
    },1000)
    }
  }

  function stop(){
    if(isRunning){
    setisRunning(false);
    clearInterval(intervalRef.current);
    }
  }
  
  function reset(){
    setisRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch:  {time}</h1>
      
      <div className="but">
      <button onClick={()=>start()}>Start</button>
      
      <button onClick={()=>stop()}>Stop</button>
      
      <button onClick={()=>reset()}>Reset</button>
      </div>
    </>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch></StopWatch>);