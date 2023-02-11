import React, { useState } from "react";

function ProgressBar(props) {
  const [width, setWidth] = useState(100);

  return (
    <div className="progress-contain">
      <div className="bar-vessel">
        <div className="bar-contain" style={{ width: `${props.value}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
