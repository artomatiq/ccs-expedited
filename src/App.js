import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Dashboard from './components/admin/admin-dashboard/AdminDashboard';
import Payroll from './components/admin/admin-payroll/AdminPayroll';
import Reports from './components/admin/admin-reports/AdminReports';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);
  const [menuSelection, setMenuSelection] = useState(null);
  const [user, setUser] = useState('admin');

  const selectedComponent = () => {
    switch (menuSelection) {
      case null:
      case 'Dashboard':
        return <Dashboard />
      case 'Payroll':
        return <Payroll />
      case 'Reports':
        return <Reports />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className='app-container'>

      <div className='top-row'>
            <Sidebar 
              setMenuSelection={setMenuSelection} 
              showSidebar={showSidebar} 
              setShowSidebar={setShowSidebar} 
              className={showSidebar? 'show' : 'hide'}
            />
        <div className='main-container'>
          <Header />
          {selectedComponent()}
        </div>
      </div>

      <div className='bottom-row'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
