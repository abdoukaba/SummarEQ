import React from 'react';

interface SummaryCardProps {
  title: string;
  image?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, image }) => (
  <div
    className="bg-[#1e1e1e] text-white p-5 rounded-xl shadow flex flex-col items-center justify-center hover:bg-[#2a2a2a] transition-transform transform hover:scale-105 cursor-pointer"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-12 h-12 object-contain mb-3"
      />
    )}
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

export default SummaryCard;