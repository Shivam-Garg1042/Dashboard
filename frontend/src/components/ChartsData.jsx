// Sample data based on image 3
 export const growthData = [
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
  
  export const billingCollectionData = [
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
  
  export const documentPendencyData = [
    { month: 'Oct', cheque: 0, others: 11 },
    { month: 'Nov', cheque: 10, others: 3 },
    { month: 'Dec', cheque: 17, others: 3 },
    { month: 'Jan', cheque: 39, others: 1 },
    { month: 'Feb', cheque: 85, others: 0 },
    { month: 'Mar', cheque: 74, others: 0 },
  ];
  
  export const paymentMethodsData = [
    { month: 'Sep', cash: 56, online: 36, qr: 8 },
    { month: 'Oct', cash: 51, online: 46, qr: 3 },
    { month: 'Nov', cash: 49, online: 45, qr: 6 },
    { month: 'Dec', cash: 51, online: 44, qr: 5 },
    { month: 'Jan', cash: 63, online: 33, qr: 4 },
    { month: 'Feb', cash: 48, online: 46, qr: 6 },
  ];
  
  export const infantData = [
    { month: 'Jul', d7: 343, d15: 78, d30: 51, collection: 60 },
    { month: 'Aug', d7: 272, d15: 98, d30: 61, collection: 55 },
    { month: 'Sep', d7: 450, d15: 113, d30: 70, collection: 65 },
    { month: 'Oct', d7: 338, d15: 76, d30: 104, collection: 70 },
    { month: 'Nov', d7: 325, d15: 73, d30: 53, collection: 62 },
    { month: 'Dec', d7: 392, d15: 47, d30: 64, collection: 58 },
    { month: 'Jan', d7: 533, d15: 51, d30: 42, collection: 65 },
    { month: 'Feb', d7: 463, d15: 74, d30: 73, collection: 68 },
  ];
  
  export const driverQuadrantData = [
    { month: 'Oct', '60+D7': 138, '60-D7+': 243, '60-D7-': 292 },
    { month: 'Nov', '60+D7': 192, '60-D7+': 292, '60-D7-': 421 },
    { month: 'Dec', '60+D7': 298, '60-D7+': 365, '60-D7-': 530 },
    { month: 'Jan', '60+D7': 236, '60-D7+': 148, '60-D7-': 440 },
    { month: 'Feb', '60+D7': 279, '60-D7+': 137, '60-D7-': 456 },
    { month: 'Mar', '60+D7': 365, '60-D7+': 193, '60-D7-': 762 },
  ];

  export const leadershipQuadrantData = [
    { city: 'Saharanpur', collection: 150, growth: 50 },
    { city: 'Agra', collection: 300, growth: 100 },
    { city: 'Lucknow', collection: 280, growth: 120 },
    { city: 'Gurugram', collection: 220, growth: 180 },
    { city: 'Mathura', collection: 250, growth: 200 },
    { city: 'Karnal', collection: 150, growth: 50 },
    { city: 'Delhi', collection: 320, growth: 250 },
    { city: 'Noida', collection: 280, growth: 220 },
    { city: 'Jaipur', collection: 300, growth: 280 },
    { city: 'Gwalior', collection: 320, growth: 300 }
  ];


  export const dealerPerformanceData = [
    { month: 'July', d15: 78, d30: 61, d7: 343, notPaid: 98 },
    { month: 'Aug', d15: 98, d30: 70, d7: 272, notPaid: 113 },
    { month: 'Sep', d15: 113, d30: 104, d7: 450, notPaid: 76 },
    { month: 'Oct', d15: 76, d30: 53, d7: 338, notPaid: 325 },
    { month: 'Nov', d15: 73, d30: 64, d7: 325, notPaid: 392 },
    { month: 'Dec', d15: 47, d30: 42, d7: 533, notPaid: 51 },
    { month: 'Jan', d15: 51, d30: 73, d7: 463, notPaid: 74 },
    { month: 'Feb', d15: 74, d30: 64, d7: 133, notPaid: 73 }
  ];

  

  export const driverAnalyticsData = [
    { 
      category: '60km+D7-', 
      segments: [
        { name: 'green', value: 1500 },
        { name: 'red', value: 0 },
        { name: 'yellow', value: 0 },
        { name: 'orange', value: 0 }
      ]
    },
    { 
      category: '60km-D7+', 
      segments: [
        { name: 'green', value: 0 },
        { name: 'red', value: 0 },
        { name: 'yellow', value: 0 },
        { name: 'orange', value: 1800 }
      ]
    },
    { 
      category: '60km+D15-', 
      segments: [
        { name: 'green', value: 0 },
        { name: 'red', value: 828 },
        { name: 'yellow', value: 0 },
        { name: 'orange', value: 0 }
      ]
    },
    { 
      category: '60km+D15+', 
      segments: [
        { name: 'green', value: 0 },
        { name: 'red', value: 500 },
        { name: 'yellow', value: 0 },
        { name: 'orange', value: 0 }
      ]
    },
    { 
      category: '60km-D7', 
      segments: [
        { name: 'green', value: 0 },
        { name: 'red', value: 0 },
        { name: 'yellow', value: 700 },
        { name: 'orange', value: 0 }
      ]
    },
    { 
      category: '60km+D7', 
      segments: [
        { name: 'green', value: 0 },
        { name: 'red', value: 0 },
        { name: 'yellow', value: 0 },
        { name: 'orange', value: 306 }
      ]
    }
  ];

  export const colors = {
    green: '#4ade80',
    red: '#f87171',
    yellow: '#eab308',
    orange: '#f97316'
  };