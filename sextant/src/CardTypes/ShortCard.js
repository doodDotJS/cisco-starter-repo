import React from "react";
import "./ShortCard.css";

const defaultStyling = {
  titleBackgroundColor: "#6699ff",
  titleTextColor: "white",
  valueBackgroundColor: "white",
  valueTextColor: "black",
};

export default function ShortCard({ title, value, styling = defaultStyling }) {
  return (
    <div
      className="shortCard-container"
      style={{ backgroundColor: styling.valueBackgroundColor }}
    >
      <div
        className="key"
        style={{ backgroundColor: styling.titleBackgroundColor }}
      >
        <h1 style={{ color: styling.titleTextColor }}>{title}</h1>
      </div>
      <div className="value" style={{ color: styling.valueTextColor }}>
        {value}
      </div>
    </div>
  );
}
