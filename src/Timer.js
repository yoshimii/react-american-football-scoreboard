import React, { useState, useEffect }from "react";
import "./App.css";
// import { exportDefaultDeclaration, directive } from "@babel/types";
// import { isatty } from "tty";

const Timer = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(()=> {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return ()=> clearInterval(interval);
    }, [isActive, seconds]);
    
    return (
        <div className="row">
    <div className="time">
        {Math.floor(seconds/60)  + ":" + seconds}
    </div>
    <div className="row">
    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button className="button" onClick={reset}>
      Reset
    </button>
  </div>
        </div>
    );
};


export default Timer