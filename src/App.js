import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Views/Login/login";
import Principal from "./Views/MenuPrincipal/principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
