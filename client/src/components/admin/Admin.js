import AdminDashboard from "./admin-dashboard/AdminDashboard";
import AdminPayroll from "./admin-payroll/AdminPayroll";
import AdminRates from "./admin-rates/AdminRates";
import AdminReports from "./admin-reports/AdminReports";
import AdminSettings from "./admin-settings/AdminSettings";

import {Routes, Route} from 'react-router-dom';

function Admin() {
    return (
        <Routes>
            <Route path='/' element={<AdminDashboard/>} />
            <Route path='dashboard' element={<AdminDashboard/>} />
            <Route path='payroll' element={<AdminPayroll />} />
            <Route path='rates' element={<AdminRates />} />
            <Route path='reports' element={<AdminReports/>} />
            <Route path='settings' element={<AdminSettings/>} />
        </Routes>
    );
}

export default Admin;