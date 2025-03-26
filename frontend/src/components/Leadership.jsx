
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,ScatterChart,ZAxis,Scatter } from 'recharts';
import { leadershipQuadrantData } from './ChartsData';



  export const Leadership = () => {
    
    return(
<div className="bg-white rounded-lg shadow p-3 flex flex-col">
            <h3 className="text-sm text-center font-medium text-gray-800 mb-2">Leadership Quadrant</h3>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    dataKey="growth" 
                    name="Growth" 
                    unit="%" 
                    tick={{ fontSize: 10 }}
                    axisLine={false} 
                    tickLine={false}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="collection" 
                    name="Collection" 
                    unit="%" 
                    tick={{ fontSize: 10 }}
                    axisLine={false} 
                    tickLine={false}
                  />
                  <ZAxis type="category" dataKey="city" name="City" />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }} 
                    contentStyle={{ 
                      borderRadius: '4px', 
                      border: 'none', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
                      fontSize: '12px' 
                    }} 
                    formatter={(value, name, props) => [value, name, props.payload.city]}
                  />
                  <Scatter 
                    name="Cities" 
                    data={leadershipQuadrantData} 
                    fill="#8884d8" 
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
    );
};