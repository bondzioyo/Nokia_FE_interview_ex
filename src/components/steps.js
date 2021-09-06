import React from "react";

function Steps() {
  return (
    <div className="stepsField">
      <div className="stepsElement">
        <div className="order1" id='one'>1</div>
        <div className="order2">
          <h5>Network Element</h5>
          <p>At least one Network Element shall be selected</p>
        </div>
      </div>
      <div className="stepsElement">
      <span className='decorLine'></span>
        <div className="order1" id='two'>2</div>
        <div className="order2">
          <h5>Operation Type</h5>
          <p>At least one Network Element shall be selected</p>
        </div>
      </div>
      <div className="stepsElement">
      <span className='decorLine'></span>
        <div className="order1" id='three'>3</div>
        <div className="order2">
        {/* <span className='decorLine'></span> */}
          <h5>Summary</h5>
          <p>Statement of scheduled operation</p>
        </div>
      </div>
      {/* <span className='decorLine'></span> */}
    </div>
  );
}

export default Steps;
