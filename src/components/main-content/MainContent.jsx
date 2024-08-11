import './MainContent.css';

import AdminDashboard from '../admin/admin-dashboard/AdminDashboard';
import AdminPayroll from '../admin/admin-payroll/AdminPayroll';
import AdminRates from '../admin/admin-rates/AdminRates';
import AdminReports from '../admin/admin-reports/AdminReports';
import AdminSettings from '../admin/admin-settings/AdminSettings';

import DriverDashboard from '../driver/driver-dashboard/DriverDashboard';
import DriverClock from '../driver/driver-clock/DriverClock';
import DriverEarnings from '../driver/driver-earnings/DriverEarnings';
import DriverReports from '../driver/driver-reports/DriverReports';
import DriverSettings from '../driver/driver-settings/DriverSettings';

import {Routes, Route} from 'react-router-dom';

function MainContent() {

    const role = 'admin';

    return (
        <Routes>
            <Route path='/' element={role === 'admin' ? <AdminDashboard/> : <DriverClock/>} />
            <Route path='dashboard' element={role === 'admin' ? <AdminDashboard/> : <DriverDashboard/>} />
            <Route path='payroll' element={<AdminPayroll />} />
            <Route path='rates' element={<AdminRates />} />
            <Route path='earnings' element={<DriverEarnings />} />
            <Route path='clock' element={<DriverClock />} />
            <Route path='reports' element={role === 'admin' ? <AdminReports/> : <DriverReports/>} />
            <Route path='settings' element={role === 'admin' ? <AdminSettings/> : <DriverSettings/>} />
        </Routes>
    );
}

export default MainContent;