// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import LogisticsDashboard from './pages/LogisticsDashboard.tsx';
import SchedulerDashboard from './pages/SchedulerDashboard.tsx';
import AIHubDashboard from './pages/AIHubDashboard.tsx'; // 1. Import the new page
import AlertsBriefsDashboard from './pages/AlertsBriefsDashboard'; // 1. Import the new page
import { RoleProvider } from './context/RoleContext.tsx'; // 1. Import the provider


// Define the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/logistics" replace />,
      },
      {
        path: 'logistics',
        element: <LogisticsDashboard />,
      },
      {
        path: 'scheduler',
        element: <SchedulerDashboard />,
      },
      { // 2. Add the new route for AI Hub
        path: 'ai-hub',
        element: <AIHubDashboard />,
      },
      // You can add routes for your other pages here
      {
        path: 'alerts', // 2. Add the new route
        element: <AlertsBriefsDashboard />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    
    <RoleProvider>
      <RouterProvider router={router} />
    </RoleProvider>
  </React.StrictMode>
);