import React from 'react';
import type { Insight } from '../types';
import { FaExclamationTriangle, FaLightbulb, FaBrain } from 'react-icons/fa';

const insightConfig = {
  alert: { icon: <FaExclamationTriangle />, bg: 'bg-alert-red-bg', border: 'border-alert-red', text: 'text-alert-red' },
  opportunity: { icon: <FaLightbulb />, bg: 'bg-warning-orange-bg', border: 'border-warning-orange', text: 'text-warning-orange' },
  prediction: { icon: <FaBrain />, bg: 'bg-blue-100', border: 'border-primary-blue', text: 'text-primary-blue' },
};

const AIInsightCard: React.FC<{ insight: Insight }> = ({ insight }) => {
  const config = insightConfig[insight.level];
  return (
    <div className={`p-4 rounded-md border-l-4 ${config.bg} ${config.border}`}>
      <div className={`flex items-center gap-2 text-sm font-semibold mb-1 ${config.text}`}>
        {config.icon} {insight.title}
      </div>
      <p className="text-xs text-text-light font-medium mb-2">{insight.category}</p>
      <p className="text-sm text-text-dark leading-relaxed mb-4">{insight.description}</p>
      <div className="flex gap-4">
        <button className="text-sm font-semibold text-primary-blue hover:underline">View Details</button>
        <button className="text-sm font-semibold text-primary-blue hover:underline">Take Action</button>
      </div>
    </div>
  );
};

const AIInsightPanel: React.FC<{ insights: Insight[] }> = ({ insights }) => {
  return (
    <aside className="w-80 bg-white border-l border-border-color p-5 flex-col hidden xl:flex">
      <div className="mb-5">
        <h3 className="font-bold text-lg text-text-dark">AI Insight Panel</h3>
        <p className="text-sm text-text-light">Strategic & Operational Intelligence</p>
      </div>
      <div className="flex flex-col gap-4">
        {insights.map((insight, index) => <AIInsightCard key={index} insight={insight} />)}
      </div>
    </aside>
  );
};
export default AIInsightPanel;