import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikePage from "./pages/LikePage";
import Nav from "./components/Nav";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/like" element={<LikePage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
