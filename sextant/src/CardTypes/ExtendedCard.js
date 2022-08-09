import React from "react";
import "./ExtendedCard.css";

const defaultStyling = {
  titleBackgroundColor: "#6699ff",
  titleTextColor: "white",
  valueBackgroundColor: "white",
  valueTextColor: "black",
};

export default function ExtendedCard({
  title,
  value,
  styling = defaultStyling,
}) {
  return (
    <div
      className="extendedCard-container"
      style={{ backgroundColor: styling.valueBackgroundColor }}
    >
      <div
        className="header"
        style={{
          backgroundColor: styling.titleBackgroundColor,
          color: styling.titleTextColor,
        }}
      >
        <h1>{title}</h1>
      </div>
      <div className="content" style={{ color: styling.valueTextColor }}>
        {value}
      </div>
    </div>
  );
}
