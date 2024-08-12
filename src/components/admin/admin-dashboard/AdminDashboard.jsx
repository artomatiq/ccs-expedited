import './AdminDashboard.css'
import AdminLineGraph from '../admin-line-graph/AdminLineGraph';

import DummyData from '../admin-line-graph/DummyData';

function AdminDashboard() {

    const payroll = 1327.40;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const formattedPayroll = formatter.format(payroll);

    return (
        <div className="admin dash-container">
            <div className="dash-top">
                <div>
                </div>
                <div className="date-container">
                    This Week <i className='bx bx-chevron-down'></i>
                </div>
                <div className="driver-select-container">
                    All Drivers <i className='bx bx-chevron-down'></i>
                </div>
            </div>
            <div className="dash-middle">
                <div className="timer">
                    <h3>Drive Time</h3>
                    <div className="dash drive-timer">
                        <div className="hours">
                            62h
                        </div>
                        <div className="minutes">
                            43m
                        </div>
                        <div className="seconds">
                            27s
                        </div>
                    </div>
                </div>
                <div className="payable">
                    <h3>Payroll</h3>
                    <div className="dash payroll-amount">
                        {formattedPayroll}
                    </div>
                </div>
            </div>
            <div className="dash-bottom">
                <h3>Annual Overview</h3>
                <div className="graph-container">
                    <AdminLineGraph data={DummyData} className="line-graph" />
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;