import { useEffect, useState } from "react";
import { Input } from '../components/search/search';
import './home.css';
import NavBar from "../components/NavBar";
import SummaryCard from "../components/cards/SummaryCard";
import mockData from '../data/mockData.json'; 


export default function HomePage() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    console.log("Loaded mock data:", mockData);  
    setSummaries(mockData);
  }, []);

  return (
    <div className="summary-page">
      <NavBar />
      <div className="search-bar">
        <h2>Search</h2>
        <Input type="text" placeholder="Search contacts" />
      </div>

      <div className="summary-panel">
        {summaries.map((summary) => (
          <SummaryCard key={summary._id} summary={summary} />
        ))}
      </div>
    </div>
  );
}