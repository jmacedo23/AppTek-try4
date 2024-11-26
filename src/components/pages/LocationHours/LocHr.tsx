import React from "react";
import MapWithMarker from "./Map";
import Hours from "./Hours";
import "./LocHr.css";

const LocHr: React.FC = () => {
  return (
    <div className="loc-hr-container">
      <h1>Location and Hours</h1>
      <p>Lone Tree, Colorado</p> {/* Added text */}
      <MapWithMarker />
      <Hours /> {/* Added Hours component */}
      {/* Add more content as needed */}
    </div>
  );
};

export default LocHr;
