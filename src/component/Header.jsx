import { NavLink } from "react-router-dom";

import "./header.layout.css";

export const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    background: isActive ? "#7600dc" : "transparent",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    color: isActive ? "white" : "#7600dc",
  });
  return (
    <div className="header-container">
      <h1>Welcome to Habit Tracker</h1>
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/archived" style={getActiveStyle}>
          Archived
        </NavLink>
      </nav>
    </div>
  );
};
