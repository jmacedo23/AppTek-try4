import React from "react";
import "./Hours.css";

const Hours: React.FC = () => {
  return (
    <div className="hours-container">
      <h2>Operating Hours</h2>
      <ul>
        <li>Monday - Friday: 8:00 AM - 5:00 PM MST</li>
        <li>Saturday: Closed</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>
  );
};

export default Hours;
