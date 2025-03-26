import  { useState } from 'react';
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {billingCollectionData } from './ChartsData';
import { FilterButton } from './Filter';

export const Infant = () => {
    const [activeFilter, setActiveFilter] = useState('TGT/ACH');
    return(
    <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            {/* <h3 className="text-sm font-medium text-gray-800">Collection Rate</h3> */}
            <div className="space-x-6 text-center mb-2">
                <FilterButton 
                  active={activeFilter === 'TGT/ACH'} 
                  onClick={() => setActiveFilter('TGT/ACH')}
                >
                  TGT/ACH
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'Infant'} 
                  onClick={() => setActiveFilter('Infant')}
                >
                  Infant
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'DPD 60+'} 
                  onClick={() => setActiveFilter('DPD 60+')}
                >
                  DPD 60+
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'DPD 30+'} 
                  onClick={() => setActiveFilter('DPD 30+')}
                >
                  DPD 30+
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'Payments'} 
                  onClick={() => setActiveFilter('Payments')}
                >
                  Payments
                </FilterButton>
              </div>
            {/* <div className="flex text-xs space-x-2">
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">TGT/ACH</span>
            </div> */}
          </div>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={billingCollectionData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" /> */}
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis domain={[50, 100]} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} tick={{ fontSize: 10 }} />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name === 'tgtAch' ? 'TGT/ACH' : 'Comparison']}
                  contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tgtAch" 
                  stroke="#9747FF" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="TGT/ACH"
                />
                <Line 
                  type="monotone" 
                  dataKey="comparison" 
                  stroke="#0075FF" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Comparison"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
    );
};
