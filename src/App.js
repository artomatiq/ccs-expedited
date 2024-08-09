import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Dashboard from './components/admin/dashboard/Dashboard';
import Payroll from './components/admin/payroll/Payroll';
import Reports from './components/admin/reports/Reports';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
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
        {showSidebar
            ? <Sidebar className="show" setMenuSelection={setMenuSelection} />
            : <Sidebar className="hide" setMenuSelection={setMenuSelection} />
        }
        <div className="main-container">
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
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
