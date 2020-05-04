import React from "react";

const GameInfo = (props) => {
  return (
    <div className="gameinfo">
      credits <span className="credits">{props.credits}</span>
    </div>
  );
};

export default GameInfo;
