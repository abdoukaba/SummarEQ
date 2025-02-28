import React from 'react';

interface SummaryCardProps {
    title: string;
    value: string | number;
  }
  
  export const SummaryCard = ({ title, value }: SummaryCardProps) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
