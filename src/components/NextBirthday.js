import React from "react";

const NextBirthday = () => {
  return (
    <div className="next-bday">
      <h2>Name's Birthday is coming up in</h2>
      <div className="countdown">
        <div className="day-box">
          <h3 className="day-value">00</h3>
          <h3 className="day-text">Day</h3>
        </div>
        <div className="hour-box">
          <h3 className="hour-value">00</h3>
          <h3 className="hour-text">Hour</h3>
        </div>
        <div className="minute-box">
          <h3 className="minute-value">00</h3>
          <h3 className="minute-text">Minute</h3>
        </div>
        <div className="second-box">
          <h3 className="second-value">00</h3>
          <h3 className="second-text">Second</h3>
        </div>
      </div>
    </div>
  );
};

export default NextBirthday;
