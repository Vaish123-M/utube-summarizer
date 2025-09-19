import React from "react";
import Loginpage from "./components/Loginpage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
