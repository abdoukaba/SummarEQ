import SummaryCard from '../components/cards/SummaryCard';
import { LineChartComponent } from '../components/charts/LineChart';
import { BarChartComponent } from '../components/charts/BarChart';
import { userGrowthData, userActivityData, userTableData } from '../data/userData';
import React from 'react';

const summaryData = [
  { title: "Help", image: "/help.svg"},
  { title: "Settings", image: "/setting-svgrepo-com.svg"},
  { title: "Continue Conversation", image: "/avatar.svg"},
];

export const Dashboard = () => (
  <div className="min-h-screen w-screen flex flex-col items-stretch bg-gray-100 dark:bg-gray-900 p-6">

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Communication</h2>
      <LineChartComponent data={userGrowthData} />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 w-full">
  <div className="mb-4">
    <h2 className="text-xl font-semibold">To: <span className="font-normal">"Insert Name"</span></h2>
    <h2 className="text-xl font-semibold">From: <span className="font-normal">VoiceBotics</span></h2>
  </div>
    <BarChartComponent data={userActivityData} />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>
    </div>

    <h1 className="text-2xl font-bold mb-6"></h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
      {summaryData.map((data, index) => (
        <SummaryCard key={index} title={data.title} image={data.image} />
      ))}
    </div>

  </div>
);