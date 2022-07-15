import React from "react";
import { useState } from "react";
import "./styles.scss";
import { oneMonth, oneYear } from "./data";
import { yearCompanyItems, monthCompanyItems } from "./dataFunctions";

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
          <li className={tabActive === "30Days" ? "active" : "inactive"}>
            <button
              onClick={() => {
                setYearActive(false);
                setTabActive("30Days");
              }}
            >
              Last 30 Days
            </button>
          </li>
          <li className={tabActive !== "30Days" ? "active" : "inactive"}>
            <button
              onClick={() => {
                setYearActive(true);
                setTabActive("12Months");
              }}
            >
              Last 12 Months
            </button>
          </li>
        </ul>
      </div>
      <table>
        <tbody>{!yearActive ? monthCompanyItems() : yearCompanyItems()}</tbody>
      </table>
    </div>
  );
};
