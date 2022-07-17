import React from "react";
import { useState } from "react";
import "./styles.scss";
import { oneMonth, oneYear } from "./data";
import { yearCompanyItems, monthCompanyItems } from "./dataFunctions";
import TabButton from "./TabButton";

export const LowerImpactPurchases = () => {
  //If yearActive state is false then the oneMonth list will be rendered
  const [yearActive, setYearActive] = useState(false);
  const [tabActive, setTabActive] = useState("30Days");

  // Variables used to show amount of companies in each list, rendered dynamically in the paragraph
  const oneMonthCompaniesTotalCount = oneMonth.length;
  const oneYearCompaniesTotalCount = oneYear.length;

  return (
    <div className="lower-impact-purchases section">
      <h2>Lower Impact Purchases</h2>
      <p>
        There are {oneMonthCompaniesTotalCount} lower impact companies in the
        past month and {oneYearCompaniesTotalCount} lower impact companies in
        the past 12 months.
      </p>
      <div className="tabContainer">
        <ul>
          <TabButton
            className={tabActive === props.tabName ? "active" : "inactive"}
            tabName="Last 30 Days"
            setYearActive={setYearActive}
          />
          <TabButton
            className={tabActive === props.tabName ? "active" : "inactive"}
            tabName="Last 12 Months"
            setYearActive={setYearActive}
          />
        </ul>
      </div>
      <table>
        <tbody>{!yearActive ? monthCompanyItems() : yearCompanyItems()}</tbody>
      </table>
    </div>
  );
};
