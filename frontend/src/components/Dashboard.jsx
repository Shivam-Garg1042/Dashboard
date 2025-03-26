import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from 'recharts';
import {   documentPendencyData, dealerPerformanceData, driverAnalyticsData ,colors} from "./ChartsData.jsx";
import { Growth } from './Growth.jsx';
import { Infant } from './Infant.jsx';
import { Leadership } from './Leadership.jsx';
import { DocumentPendency } from './Document.jsx';
import DriverAnalytics from './DriverAnalytics.jsx';


const DriverAnalyticsDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('Growth');
  const [zoneFilter, setZoneFilter] = useState('All');
  const [monthFilter, setMonthFilter] = useState('Mar');
  

  
  


  // Component for metric cards with improved design
  const MetricCard = ({ icon, title, value, subtitle, className = '', subValue = null, color = 'blue' }) => {
    const colorClasses = {
      blue: 'from-blue-500 to-blue-400',
      purple: 'from-purple-500 to-purple-400',
      green: 'from-green-500 to-green-400',
      teal: 'from-teal-500 to-teal-400',
      orange: 'from-orange-500 to-orange-400',
      red: 'from-red-500 to-red-400',
    };
    
    return (
      <div className={`bg-white rounded-lg shadow p-3 ${className} border-l-4 border-${color}-500 hover:shadow-md transition-shadow`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-medium text-gray-700">{title}</h3>
          <div className={`text-${color}-500 bg-${color}-50 p-1 rounded-full`}>{icon}</div>
        </div>
        <div className="flex items-baseline">
          <span className={`text-base font-bold text-${color}-700`}>{value}</span>
          {subtitle && <span className="ml-2 text-xs text-gray-600">{subtitle}</span>}
        </div>
        {subValue && (
          <div className="mt-1 text-xs text-gray-600">{subValue}</div>
        )}
      </div>
    );
  };

  // Component for filter buttons
  const FilterButton = ({ active, onClick, children }) => {
    return (
      <button
        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${active ? 'bg-indigo-600 text-white shadow-sm' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Component for selector dropdowns
  const Selector = ({ label, value, options = ['All'], onChange }) => {
    return (
      <div className="flex flex-col">
        <label className="text-xs text-gray-500 mb-1">{label}</label>
        <div className="relative">
          <select
            value={value}
            onChange={onChange}
            className="appearance-none bg-indigo-50 text-gray-700 border border-gray-200 rounded py-1 pl-3 pr-8 w-full text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-0 top-0 h-full flex items-center pr-2 pointer-events-none">
            {/* <ChevronDown size={14} className="text-gray-500" /> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 p-1 h-screen overflow-hidden font-sans">
      <div className="h-full flex flex-col space-y-3">
        {/* Header Section - Compact */}
        <div className="flex items-center justify-between space-x-2">
          <h1 className="text-xl font-bold text-gray-800">City Management</h1>
          
          <div className="flex items-center space-x-2">
            <Selector 
              label="Zone" 
              value={zoneFilter} 
              options={['All', 'CITY', 'URBAN', 'RURAL']} 
              onChange={(e) => setZoneFilter(e.target.value)} 
            />
            <Selector 
              label="Month" 
              value={monthFilter} 
              options={['Mar', 'Feb', 'Jan', 'Dec', 'Nov', 'Oct']} 
              onChange={(e) => setMonthFilter(e.target.value)} 
            />
            
            {/* <button className="ml-2 p-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded flex items-center gap-1 transition-colors">
              {/* <Download size={14} /> */}
              {/* Export
            </button> */} 
          </div>
        </div>
        
        {/* Metrics Row - Compact */}
        <div className="grid grid-cols-6 gap-2">
        <div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-base font-medium text-gray-700">Total Drivers</h3>
        <div className="bg-blue-50 text-blue-500 p-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-gray-800">2K</span>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>FinBat: 654</span>
          <span>iBat: 954</span>
          <span>iBat Lite: 954</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-medium text-gray-700">LTO Growth</h3>
        <div className="bg-green-50 text-green-500 p-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-baseline">
          <span className="text-xs  text-gray-600">Current 47%</span>
          <span className="text-xs text-gray-600">NAD</span>
          <span className="text-xs text-gray-600">Churn 44%</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>654/1K</span>
          <span>213</span>
          <span>441/1K</span>
        </div>
      </div>
    </div>
          {/* <MetricCard 
            // icon={<DollarSign size={16} />} 
            title="Collection" 
            value="48%" 
            subValue={<div className="text-xs">₹68L / ₹143L</div>} 
            className="col-span-1"
            color="purple"
          /> */}

          {/* collection */}
           <div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-medium text-gray-700">Collection</h3>
        <div className="bg-purple-50 text-purple-500 p-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            <path d="M6 16h12"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-800">Current 71%</span>
        <span >₹363 L/₹510 L</span>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          
          
        </div>
      </div>
    </div>

    {/* DPD 60+ */}

    <div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700">DPD 60+</h3>
        <h3 className="text-sm font-medium text-gray-700">DPD 30+</h3>
        <div className="bg-red-50 text-gray-500 p-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <path d="M12 8v4"/>
            <path d="M12 16h.01"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Drivers</span>
          <span>EMI's</span>
          <span>Outstanding</span>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-800">
          <span>226</span>
          <span>787</span>
          <span>₹ 42 L</span>
        </div>
      </div>
    </div>
         {/* Document */}

        
<div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
  <div className="flex justify-between items-center mb-1">
    <h3 className="text-base font-medium text-gray-700">Document Pendency</h3>
    <div className="bg-orange-50 text-orange-500 p-1.5 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="flex  justify-normal gap-8">
      <span className="text-sm text-gray-600">Current</span>
      <span className="text-sm text-gray-600">Overall</span>
    </div>
    <div className="flex justify-normal gap-12">
      <span className="text-base font-bold text-gray-800">228</span>
      <span className="text-base font-bold text-gray-800">252</span>
    </div>
  </div>
</div>
         {/* NBFC */}
         <div className="bg-white rounded-lg shadow-md p-2 border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
  <div className="flex justify-between items-center mb-2">
    <div className="flex space-x-2">
      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">NBFC</span>
      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">OEM</span>
    </div>
    <div className="bg-teal-50 text-teal-500 p-1.5 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
        <line x1="15" y1="21" x2="15" y2="9"/>
      </svg>
    </div>
  </div>
  <div className="flex flex-col">
    <span className="text-base font-bold text-gray-800">423</span>
    <span className="text-xs text-gray-600">Partnership</span>
  </div>
</div>
        </div>

        
         

        {/* Charts Grid - Compact and Responsive */}
        <div className="grid grid-cols-3 gap-3 overflow-hidden flex-grow">
          {/* Growth Chart */}
          <Growth/>

          {/* TGT/ACH Chart */}
          <Infant/>
            {/* Leadership Quadrant Chart */}
            <Leadership/>
          

          {/* Payments Chart */}
          {/* <div className="bg-white rounded-lg shadow p-3 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-800">Payment Methods</h3>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">C-SAT: 4.8</span>
            </div>
            <div className="flex gap-3 mb-1 justify-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-1"></div>
                <span className="text-xs text-gray-600">Cash</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></div>
                <span className="text-xs text-gray-600">Online</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-sky-400 mr-1"></div>
                <span className="text-xs text-gray-600">QR</span>
              </div>
            </div>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={paymentMethodsData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, '']}
                    contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="cash" stroke="#2563eb" strokeWidth={2} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="online" stroke="#10b981" strokeWidth={2} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="qr" stroke="#38bdf8" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div> */}

          {/* Infant Chart */}
          {/* <div className="bg-white rounded-lg shadow p-3 flex flex-col">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Infant Performance</h3>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={infantData.slice(-6)} barSize={12} barGap={0} barCategoryGap={8} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                  />
                  <Bar dataKey="d7" name="D7" stackId="a" fill="#4ade80" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="d15" name="D15" stackId="a" fill="#fbbf24" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="d30" name="D30" stackId="a" fill="#f87171" radius={[0, 0, 3, 3]} />
                  <Line 
                    type="monotone" 
                    dataKey="collection" 
                    stroke="#6366f1" 
                    strokeWidth={2} 
                    name="Collection" 
                    dot={{ r: 3 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div> */}
            <div className="bg-white rounded-lg shadow p-3 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-800">Dealer Analytics</h3>
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">C-Sat</span>
      </div>
      
      <div className="flex gap-3 mb-1 justify-center">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
          <span className="text-xs text-gray-600">D15</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-orange-400 mr-1"></div>
          <span className="text-xs text-gray-600">D30</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
          <span className="text-xs text-gray-600">D7</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-gray-400 mr-1"></div>
          <span className="text-xs text-gray-600">Not Paid</span>
        </div>
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={dealerPerformanceData} 
            barSize={20} 
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" /> */}
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }} 
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '4px', 
                border: 'none', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
                fontSize: '12px' 
              }}
            />
            <Bar dataKey="d15" stackId="a" fill="#eab308" name="D15" />
            <Bar dataKey="d30" stackId="a" fill="#f97316" name="D30" />
            <Bar dataKey="d7" stackId="a" fill="#4ade80" name="D7" />
            <Bar dataKey="notPaid" stackId="a" fill="#9ca3af" name="Not Paid" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    {/* Driver Analytics */}
          {/* <div className="bg-white rounded-lg shadow p-2 flex flex-col">
      <h3 className="text-sm font-medium text-center text-gray-800 mb-2">Driver Analytics</h3>
      
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={driverAnalyticsData} 
            layout="vertical"
            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
          >
            <XAxis 
              type="number" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              dataKey="category" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10 }} 
              width={100}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                borderRadius: '4px', 
                border: 'none', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
                fontSize: '12px' 
              }}
            />
            {Object.keys(colors).map((colorName, index) => (
              <Bar 
                key={colorName}
                dataKey={`segments.${index}.value`} 
                stackId="a" 
                fill={colors[colorName]}
                name={colorName}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div> */}
    <DriverAnalytics/>
          {/* Driver Quadrant Chart */}
          {/* <div className="bg-white rounded-lg shadow p-3 flex flex-col">
            <h3 className="text-sm font-medium text-gray-800 mb-2">Driver Segments</h3>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={driverQuadrantData} barSize={14} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: '12px' }}
                  />
                  <Bar dataKey="60+D7" name="Low Risk" fill="#4ade80" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="60-D7+" name="Medium Risk" fill="#fbbf24" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="60-D7-" name="High Risk" fill="#f87171" radius={[0, 0, 3, 3]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-1 gap-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                <span className="text-xs text-gray-600">Low Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-400 mr-1"></div>
                <span className="text-xs text-gray-600">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
                <span className="text-xs text-gray-600">High Risk</span>
              </div>
            </div>
          </div> */}

                    {/* Document Pendency Chart */}
                    <DocumentPendency/>
        </div>
      </div>
    </div>
  );
};

export default DriverAnalyticsDashboard;