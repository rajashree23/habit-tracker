import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { HabitContextProvider } from "./context/HabitContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <HabitContextProvider>
        <App />
      </HabitContextProvider>
    </Router>
  </StrictMode>
);
