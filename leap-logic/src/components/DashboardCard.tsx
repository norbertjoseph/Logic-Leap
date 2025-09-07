import React from 'react';

interface DashboardCardProps {
  title: string;
  items: string[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, items }) => {
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-slate">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardCard;