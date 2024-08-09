import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from './sidebar/Sidebar'

import Dashboard from './dashboard/Dashboard';
import Payroll from './payroll/Payroll';
import Reports from './reports/Reports';



function Admin() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const selectedComponent = () =>{
        switch(selectedMenu) {
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
        <>
            <Sidebar/>
            <div className="main-container">
                <Header/>
                {selectedComponent()}
            </div>
        </>
    );
}

export default Admin;