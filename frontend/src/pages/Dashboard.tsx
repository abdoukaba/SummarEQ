import { SummaryCard } from '../components/cards/SummaryCard';
import { LineChartComponent } from '../components/charts/LineChart';
import { BarChartComponent } from '../components/charts/BarChart';
import { userGrowthData, userActivityData, userTableData } from '../data/userData';
import React from 'react';

const summaryData = [
  { title: "Total Users", value: "10,234" },
  { title: "Active Users", value: "7,890" },
  { title: "New Users (30d)", value: "1,234" },
];

export const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
    <h1 className="text-2xl font-bold mb-6">User Data Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {summaryData.map((data, index) => (
        <SummaryCard title={data.title} value={data.value} />
      ))}
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">User Growth Over Time</h2>
      <LineChartComponent data={userGrowthData} />
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">User Activity by Category</h2>
      <BarChartComponent data={userActivityData} />
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Data</h2>
    </div>
  </div>
);
