import SummaryCard from '../components/cards/SummaryCard';
import { LineChartComponent } from '../components/charts/LineChart';
import { BarChartComponent } from '../components/charts/BarChart';
import { userGrowthData, userActivityData } from '../data/userData';
import React from 'react';
import { Input } from '../components/search/search';
import NavBar from '../components/NavBar';

const summaryData = [
  { title: "Help", image: "/help.svg" },
  { title: "Settings", image: "/setting-svgrepo-com.svg" },
  { title: "Continue Conversation", image: "/avatar.svg" },
];

const Dashboard = () => (
  <div className="min-h-screen w-screen flex flex-col bg-[#121212] text-white font-sans">
      <NavBar />

    <div className="px-8 py-4 w-200">
      <p className="text-xl mt-2 mb-2 text-white-900">Search</p>
      <Input />
    </div>

    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow mb-6 mx-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Communication</h2>
      <LineChartComponent data={userGrowthData} />
    </div>

    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow mb-6 mx-8">
      <div className="mb-4 text-white">
        <h2 className="text-lg font-semibold">To: <span className="font-normal">Insert Name</span></h2>
        <h2 className="text-lg font-semibold">From: <span className="font-normal">VoiceBotics</span></h2>
      </div>
      <BarChartComponent data={userActivityData} />
    </div>

    <div className="bg-[#181818] p-6 rounded-lg shadow mb-6 mx-8">
      <h2 className="text-2xl font-semibold text-white mb-2">Notes</h2>
      <p className="text-gray-400">You can add your notes here or display dynamic ones.</p>
    </div>

    <div className="px-8 pb-10">
  <h2 className="text-2xl font-semibold text-white mb-4">Quick Actions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {summaryData.map((data, index) => (
      <SummaryCard key={index} title={data.title} image={data.image} />
    ))}
  </div>
</div>
  </div>
);

export default Dashboard;