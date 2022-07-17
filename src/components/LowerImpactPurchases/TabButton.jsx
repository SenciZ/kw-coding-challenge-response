import React from "react";
import { useState } from "react";

function TabButton(props) {
  return (
    <li>
      <button
        onClick={() => {
          props.setYearActive((prev) => !prev);
          props.setTabActive((prev) => !prev);
        }}
      >
        {props.tabName}
      </button>
    </li>
  );
}

export default TabButton;
