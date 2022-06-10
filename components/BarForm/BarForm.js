import React from "react";
// import openIcon from "../../images/openIcon.png";
// import closeIcon from "../../images/closeIcon.png";

const BarForm = ({ ROOM }) => (
  <div className="BarForm">
    <div className="left">
      {/* <img className="openIcon" src={openIcon} alt="online Icon" /> */}
      <h3>{ROOM}</h3>
    </div>
    <div className="right">
      <a href="http://localhost:3000">
        {/* <img className="closeIcon" src={closeIcon} alt="close Icon" /> */}
      </a>
    </div>
  </div>
);

export default BarForm;
