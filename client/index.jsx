import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import App from "./components/App.jsx";
// import React from "react";


const appRoot = document.getElementById("app");

const root = createRoot(appRoot);

root.render(<App />);