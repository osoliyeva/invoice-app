import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.onload = () => {
  const theme = localStorage.getItem("theme") || "";
  document.documentElement.classList.add(theme);
};

window.onkeydown = (e) => {
  if (e.key === "Escape") {
    editor.classList.remove("show");
    filter.classList.remove("show");
    editform.classList.remove("show");
  }
};

window.onclick = (e) => {
  if (e.target !== filterController && e.target !== filterBody) {
    filter.classList.remove("show");
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
