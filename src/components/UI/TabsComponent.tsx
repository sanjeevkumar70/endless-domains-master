"use client";
import { useState } from "react";
// import "../styles/tabs.css";

const tabs = ["Trending", "Old", "Newest"];
const data = new Array(9).fill(null);

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  return (
    <div className="tabs-wrapper">

    <div className="tabs-container">
        <h1>discovery</h1>

      {/* 🔍 Search */}
      <div className="search-box">
        <input type="text" placeholder="search" />
        <button>Search</button>
      </div>

      {/* 🔘 Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🧾 Cards */}
      <div className="grid">
        {data.map((_, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <span className="badge">Klink Finance</span>
            </div>

            <p className="desc">
              Join 1,000,000+ people across the world turning online
              activity into income ⚡
            </p>

            <div className="tags">
              <span>Web3</span>
              <span>BNB Ecosystem</span>
              <span>AdTech</span>
              <span>Affiliate Marketing</span>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default TabsComponent;