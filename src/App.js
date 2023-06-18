import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import { HabitListing } from "./pages/HabitListing/HabitListing";

export default function App() {
  return (
    <div>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose="1000"
        limit="1"
        style={{ top: "5.5rem", right: "0.5rem" }}
      />
      <Routes>
        <Route path="/" element={<HabitListing />} />
      </Routes>
    </div>
  );
}
