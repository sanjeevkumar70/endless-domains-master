"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/images/icon1.svg";
import img2 from "@/assets/images/icon2.svg";
import img3 from "@/assets/images/icon3.svg";
import img4 from "@/assets/images/icon4.svg";
import img5 from "@/assets/images/icon5.svg";
import img6 from "@/assets/images/icon6.svg";
import img7 from "@/assets/images/icon7.svg";

const tabs = ["Trending", "Old", "Newest"];
const data = new Array(9).fill(null);
const cardsData = [
  {
    id: 1,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 2,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 3,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 4,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 5,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 6,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 7,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 8,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
  {
    id: 9,
    title: "Klink Finance",
    headerIcon: img6,
    icon: img1,
    desc: "Join 1,000,000+ people across the world turning online activity into income ⚡",
    tags: ["Web3", "BNB Ecosystem", "AdTech", "Affiliate Marketing"],
  },
];

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  return (
    <div className="tabs-wrapper">

      <div className="tabs-container">
        <h1>discover</h1>

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

        <div className="grid">
          {/* {data.map((_, i) => (
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
          ))} */}
          {cardsData.map((item) => (
            <div className="card" key={item.id}>

              <div className="card-header">
                <div className="left">

                  {/* <span className="badge"> <img src={item.headerIcon} alt="logo" />{item.title}</span> */}
                  <span className="badge">  <Image src={item.headerIcon} alt="logo" width={25} height={25} />{item.title}</span>
                </div>

                <div className="right">
                  <Image src={item.icon} alt="logo" width={20} height={20} />
                </div>
              </div>

              <p className="desc">{item.desc}</p>

              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TabsComponent;