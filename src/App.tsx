// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AIInsightPanel from './components/AIInsightPanel';
import { schedulerInsights } from './mockData'; // Using one set of insights for now

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-background-light">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* This is where the routed page will be rendered */}
        </main>
      </div>
      <AIInsightPanel insights={schedulerInsights} />
    </div>
  );
};

export default App;