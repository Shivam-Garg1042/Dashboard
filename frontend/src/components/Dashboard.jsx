import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Download, Filter, ChevronDown, Users, TrendingUp, DollarSign, Clock, FileText, Bank } from 'lucide-react';

const DriverAnalyticsDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('Growth');
  const [zoneFilter, setZoneFilter] = useState('All');
  const [monthFilter, setMonthFilter] = useState('Mar');
  
  // Sample data based on image 3
  const growthData = [
    { month: 'Jul', achievement: 246, directSale: 300, partnership: 223 },
    { month: 'Aug', achievement: 223, directSale: 325, partnership: 100 },
    { month: 'Sep', achievement: 81, directSale: 261, partnership: 89 },
    { month: 'Oct', achievement: 266, directSale: 400, partnership: 150 },
    { month: 'Nov', achievement: 261, directSale: 400, partnership: 200 },
    { month: 'Dec', achievement: 182, directSale: 320, partnership: 100 },
    { month: 'Jan', achievement: 180, directSale: 300, partnership: 170 },
    { month: 'Feb', achievement: 168, directSale: 410, partnership: 100 },
    { month: 'Mar', achievement: 122, directSale: 350, partnership: 150 },
  ];
  
  const billingCollectionData = [
    { month: 'Jul', tgtAch: 91, comparison: 82 },
    { month: 'Aug', tgtAch: 91, comparison: 84 },
    { month: 'Sep', tgtAch: 90, comparison: 84 },
    { month: 'Oct', tgtAch: 83, comparison: 76 },
    { month: 'Nov', tgtAch: 92, comparison: 80 },
    { month: 'Dec', tgtAch: 91, comparison: 77 },
    { month: 'Jan', tgtAch: 96, comparison: 76 },
    { month: 'Feb', tgtAch: 94, comparison: 76 },
    { month: 'Mar', tgtAch: 70, comparison: 56 },
  ];
  
  const documentPendencyData = [
    { month: 'Oct', cheque: 0, others: 11 },
    { month: 'Nov', cheque: 10, others: 3 },
    { month: 'Dec', cheque: 17, others: 3 },
    { month: 'Jan', cheque: 39, others: 1 },
    { month: 'Feb', cheque: 85, others: 0 },
    { month: 'Mar', cheque: 74, others: 0 },
  ];
  
  const paymentMethodsData = [
    { month: 'Sep', cash: 56, online: 36, qr: 8 },
    { month: 'Oct', cash: 51, online: 46, qr: 3 },
    { month: 'Nov', cash: 49, online: 45, qr: 6 },
    { month: 'Dec', cash: 51, online: 44, qr: 5 },
    { month: 'Jan', cash: 63, online: 33, qr: 4 },
    { month: 'Feb', cash: 48, online: 46, qr: 6 },
  ];
  
  const infantData = [
    { month: 'Jul', d7: 343, d15: 78, d30: 51, collection: 60 },
    { month: 'Aug', d7: 272, d15: 98, d30: 61, collection: 55 },
    { month: 'Sep', d7: 450, d15: 113, d30: 70, collection: 65 },
    { month: 'Oct', d7: 338, d15: 76, d30: 104, collection: 70 },
    { month: 'Nov', d7: 325, d15: 73, d30: 53, collection: 62 },
    { month: 'Dec', d7: 392, d15: 47, d30: 64, collection: 58 },
    { month: 'Jan', d7: 533, d15: 51, d30: 42, collection: 65 },
    { month: 'Feb', d7: 463, d15: 74, d30: 73, collection: 68 },
  ];
  
  const driverQuadrantData = [
    { month: 'Oct', '60+D7': 138, '60-D7+': 243, '60-D7-': 292 },
    { month: 'Nov', '60+D7': 192, '60-D7+': 292, '60-D7-': 421 },
    { month: 'Dec', '60+D7': 298, '60-D7+': 365, '60-D7-': 530 },
    { month: 'Jan', '60+D7': 236, '60-D7+': 148, '60-D7-': 440 },
    { month: 'Feb', '60+D7': 279, '60-D7+': 137, '60-D7-': 456 },
    { month: 'Mar', '60+D7': 365, '60-D7+': 193, '60-D7-': 762 },
  ];

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
    <div className="bg-gray-50 p-3 h-screen overflow-hidden font-sans">
      <div className="h-full flex flex-col space-y-3">
        {/* Header Section - Compact */}
        <div className="flex items-center  justify-between space-x-2">
          <h1 className="text-xl  font-bold text-gray-800">City Management</h1>
          
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
            
            <button className="ml-2 p-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded flex items-center gap-1 transition-colors">
              {/* <Download size={14} /> */}
              Export
            </button>
          </div>
        </div>
        
        {/* Metrics Row - Compact */}
        <div className="grid grid-cols-6 gap-3">
          <MetricCard 
            // icon={<Users size={16} />} 
            title="Total Drivers" 
            value="223" 
            subValue={<div className="flex justify-between text-xs"><span>LTO: 101</span><span>Direct: 122</span></div>} 
            className="col-span-1"
            color="blue"
          />
          <MetricCard 
            // icon={<TrendingUp size={16} />} 
            title="LTO Growth" 
            value="29%" 
            subValue={<div className="text-xs">Churn: 13 | NAD: 88/350</div>} 
            className="col-span-1"
            color="green"
          />
          <MetricCard 
            // icon={<DollarSign size={16} />} 
            title="Collection" 
            value="48%" 
            subValue={<div className="text-xs">₹68L / ₹143L</div>} 
            className="col-span-1"
            color="purple"
          />
          <MetricCard 
            // icon={<Clock size={16} />} 
            title="DPD 60+" 
            value="44 Drivers" 
            subValue={<div className="text-xs">EMI's: 175 | Outstanding: ₹10L</div>} 
            className="col-span-1"
            color="red"
          />
          <MetricCard 
            // icon={<FileText size={16} />} 
            title="Document Pendency" 
            value="81 Current" 
            subValue={<div className="text-xs">Overall: 251</div>} 
            className="col-span-1"
            color="orange"
          />
          <MetricCard 
            // icon={<Bank size={16} />} 
            title="NBFC" 
            value="13 Partners" 
            className="col-span-1"
            color="teal"
          />
        </div>

        
         

        {/* Charts Grid - Compact and Responsive */}
        <div className="grid grid-cols-3 gap-3 overflow-hidden flex-grow">
          {/* Growth Chart */}
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
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
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
              dot={{ r: 4 }}
              name="Achievement"
            />
            <Line 
              type="monotone" 
              dataKey="directSale" 
              stroke="#9747FF" 
              strokeWidth={2} 
              dot={{ r: 4 }}
              name="Direct Sale"
            />
            <Line 
              type="monotone" 
              dataKey="partnership" 
              stroke="#0075FF" 
              strokeWidth={2} 
              dot={{ r: 4 }}
              name="Partnership"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

          {/* TGT/ACH Chart */}
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
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
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
          {/* Document Pendency Chart */}
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
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
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

          {/* Payments Chart */}
          <div className="bg-white rounded-lg shadow p-3 flex flex-col">
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
          </div>

          {/* Infant Chart */}
          <div className="bg-white rounded-lg shadow p-3 flex flex-col">
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
          </div>

          {/* Driver Quadrant Chart */}
          <div className="bg-white rounded-lg shadow p-3 flex flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverAnalyticsDashboard;