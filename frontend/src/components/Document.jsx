
import { LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { documentPendencyData } from './ChartsData';

export const DocumentPendency = () => {
    
    return(
<div className="bg-white rounded-lg shadow p-3 flex flex-col">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Document Pendency</h3>
            <div className="flex gap-4 mb-1 justify-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-600 mr-1"></div>
                <span className="text-xs text-gray-600">Cheque</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
                <span className="text-xs text-gray-600">Others</span>
              </div>
            </div>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={documentPendencyData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" /> */}
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    formatter={(value, name) => [value, name === 'cheque' ? 'Cheque' : 'Others']}
                    contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cheque" 
                    stroke="#6366f1" 
                    strokeWidth={2} 
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="others" 
                    stroke="#a855f7" 
                    strokeWidth={2} 
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
    );
};