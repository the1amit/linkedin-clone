import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticl = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticl("How to reflect on 2020", "10h ago • 2,046 readers")}
      {newArticl(
        "Tech firms hire remote work execs",
        "10h ago • 14,450 readers"
      )}
      {newArticl("Here's who is hiring in Canada", "4d ago • 2,842 readers")}
      {newArticl("UK travel blocked over new strain", "2h ago • 5,344 readers")}
    </div>
  );
}

export default Widgets;
