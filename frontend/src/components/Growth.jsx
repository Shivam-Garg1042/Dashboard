import  { useState } from 'react';
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { growthData } from './ChartsData';
import { FilterButton } from './Filter';

export const Growth = () => {
    const [activeFilter, setActiveFilter] = useState('Growth');
    return(
    <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          {/* <h3 className="text-sm font-medium text-gray-800 mb-2">Growth</h3> */}
          <div className="space-x-8 text-center mb-2">
                <FilterButton 
                  active={activeFilter === 'Growth'} 
                  onClick={() => setActiveFilter('Growth')}
                >
                  Growth
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'NBFC'} 
                  onClick={() => setActiveFilter('NBFC')}
                >
                  NBFC
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'Churn'} 
                  onClick={() => setActiveFilter('Churn')}
                >
                  Churn
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'NAD'} 
                  onClick={() => setActiveFilter('NAD')}
                >
                  NAD
                </FilterButton>
                <FilterButton 
                  active={activeFilter === 'Revenue'} 
                  onClick={() => setActiveFilter('Revenue')}
                >
                  Revenue
                </FilterButton>
              </div>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" /> */}
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis domain={[0, 500]} axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <Tooltip 
                  formatter={(value, name) => [value, name]}
                  contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="achievement" 
                  stroke="#000000" 
                  strokeWidth={2} 
                  dot={{ r: 3 }}
                  name="Achievement"
                />
                <Line 
                  type="monotone" 
                  dataKey="directSale" 
                  stroke="#9747FF" 
                  strokeWidth={2} 
                  dot={{ r: 3 }}
                  name="Direct Sale"
                />
                <Line 
                  type="monotone" 
                  dataKey="partnership" 
                  stroke="#0075FF" 
                  strokeWidth={2} 
                  dot={{ r: 3 }}
                  name="Partnership"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
    );
}