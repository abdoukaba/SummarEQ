import React from 'react';

interface SummaryCardProps {
  title: string;
  image?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, image }) => (
  <div style={{ backgroundColor: "#F5EFE7", color: "black", padding: "20px", fontSize: "18px" }} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4" >
    {image && <img src={image} alt={title} className="w-12 h-12 object-contain" />}
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

export default SummaryCard;
