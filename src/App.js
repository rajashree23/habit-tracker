import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import { HabitListing } from "./pages/HabitListing/HabitListing";
import { ArchivedHabits } from "./pages/ArchivedHabits/ArchivedHabits";
import { Header } from "./component/Header";

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
      <Header/>
      <Routes>
        <Route path="/" element={<HabitListing />} />
        <Route path="/archived" element={<ArchivedHabits />} />
      </Routes>
    </div>
  );
}
