// src/components/charts/ShipmentsByStatusChart.tsx
'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// 1. Define an interface for the component's props
interface ChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = ['#A3A1FB', '#4A90E2', '#F5A623', '#82D8C3', '#D0021B'];

// 2. Update the component to accept and destructure the 'data' prop
const ShipmentsByStatusChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        {/* 3. Use the 'data' prop here */}
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#8A94A6" />
          <YAxis tick={{ fontSize: 12 }} stroke="#8A94A6" />
          <Tooltip cursor={{ fill: 'rgba(247, 249, 252, 0.5)' }} />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShipmentsByStatusChart;