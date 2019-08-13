import React, { useState }from "react";
import "./App.css";

const BottomRow = () => {
  const [gameQuarter, setGameQuarter] = useState(1);
  const [isActive, setIsActive] = useState(false);

  function reset() {
    setGameQuarter(0);
    setIsActive(false);
}
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{gameQuarter}</div>
        <button className="button quarterBtn" onClick = {() => setGameQuarter(gameQuarter + 1 )}>New Quarter</button>
        <button className="button resetButton" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
