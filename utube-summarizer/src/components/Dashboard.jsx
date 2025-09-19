import React from "react";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to YouTube Summarizer</h1>
        <p className="dashboard-desc">Paste a YouTube video link below to get a summary in all available caption languages. You can download the summary and view your history anytime!</p>
        <form className="dashboard-form">
          <input
            type="text"
            placeholder="Paste YouTube video link here"
            className="dashboard-input"
          />
          <button type="submit" className="dashboard-btn">Summarize</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
