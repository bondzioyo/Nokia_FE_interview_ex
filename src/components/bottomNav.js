import React from "react";

function BottomNav() {
  return (
    <div className="bottomNav">
      <button className="navButton" id='buttonCancel'>CANCEL</button>
      <button className="navButton" id='buttonBack'>BACK</button>
      <button className="navButton" id='buttonContinue'>CONTINUE</button>
      <button className="navButton" id='buttonSchedule'>SCHEDULE</button>
    </div>
  );
}

export default BottomNav;
