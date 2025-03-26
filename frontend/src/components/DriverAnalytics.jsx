import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

// Sample data structure (replace with your actual data)
const driverAnalyticsData = [
  { 
    category: 'Top Performers', 
    segments: [
      { value: 45, color: '#6366f1' },
      { value: 30, color: '#8b5cf6' },
      { value: 25, color: '#0ea5e9' }
    ]
  },
  { 
    category: 'Average Performers', 
    segments: [
      { value: 35, color: '#6366f1' },
      { value: 25, color: '#8b5cf6' },
      { value: 40, color: '#0ea5e9' }
    ]
  },
  { 
    category: 'New Drivers', 
    segments: [
      { value: 20, color: '#6366f1' },
      { value: 50, color: '#8b5cf6' },
      { value: 30, color: '#0ea5e9' }
    ]
  }
];

const colors = {
  'High Performance': '#6366f1',
  'Medium Performance': '#8b5cf6',
  'Low Performance': '#0ea5e9'
};

export const DriverAnalytics = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white rounded-lg shadow-lg p-2 flex flex-col"
    >
      <h3 className="text-sm font-semibold text-center text-gray-800 mb-2 tracking-wider">
        Driver Analytics
      </h3>
      
      <div className="flex-grow">
        <ResponsiveContainer width="95%" height="100%">
          <BarChart 
            data={driverAnalyticsData} 
            layout="vertical"
            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
          >
            {/* Gradient Definitions */}
            <defs>
              {Object.keys(colors).map((colorName, index) => (
                <linearGradient 
                  key={colorName}
                  id={`gradient-${index}`} 
                  x1="0" y1="0" x2="1" y2="0"
                >
                  <stop offset="0%" stopColor={colors[colorName]} stopOpacity={0.7}/>
                  <stop offset="100%" stopColor={colors[colorName]} stopOpacity={1}/>
                </linearGradient>
              ))}
            </defs>

            <XAxis 
              type="number" 
              axisLine={false} 
              tickLine={false} 
              tick={{ 
                fill: '#6b7280', 
                fontSize: 10 
              }}
            />
            <YAxis 
              dataKey="category" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ 
                fill: '#1f2937', 
                fontSize: 10 
              }} 
              width={100}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
                fontSize: '12px',
                backgroundColor: 'white'
              }}
              formatter={(value, name) => [value, name]}
            />
            {Object.keys(colors).map((colorName, index) => (
              <Bar 
                key={colorName}
                dataKey={`segments.${index}.value`} 
                stackId="a" 
                name={colorName}
              >
                {driverAnalyticsData.map((entry, categoryIndex) => (
                  <Cell 
                    key={`cell-${categoryIndex}`}
                    fill={`url(#gradient-${index})`}
                  />
                ))}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DriverAnalytics;