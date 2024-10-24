import DriverClock from "./driver-clock/DriverClock";
import DriverDashboard from "./driver-dashboard/DriverDashboard";
import DriverEarnings from "./driver-earnings/DriverEarnings";
import DriverReports from "./driver-reports/DriverReports";
import DriverSettings from "./driver-settings/DriverSettings";

import {Routes, Route} from 'react-router-dom'

function Driver() {
    return (
        <Routes>
            <Route path='/' element={<DriverClock/>} />
            <Route path='dashboard' element={<DriverDashboard/>} />
            <Route path='earnings' element={<DriverEarnings/>} />
            <Route path='clock' element={<DriverClock />} />
            <Route path='reports' element={<DriverReports/>} />
            <Route path='settings' element={<DriverSettings/>} />
        </Routes>
    );
}

export default Driver;