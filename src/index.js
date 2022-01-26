import React from "react";
import ReactDOM from "react-dom";

const firstHottestPepper = "Carolina Reaper (2.2m SHU)";
const secondHottestPepper = "Trinidad Moruga Scorpion (2m SHU)";
const thirdHottestPepper = "7 Pot Douglah (1.8m SHU)";

ReactDOM.render(
  <div>
    <h1>World's Hottest Peppers</h1>
    <ul>
      <li>{firstHottestPepper}</li>
      <li>{secondHottestPepper}</li>
      <li>{thirdHottestPepper}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
