import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import DriverAnalyticsDashboard from './components/Dashboard';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <DriverAnalyticsDashboard />
    </>
  );
}

export default App;