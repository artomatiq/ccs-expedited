import './AdminDashboard.css'
import AdminLineGraph from '../admin-line-graph/AdminLineGraph';

import DummyData from '../admin-line-graph/DummyData';

function AdminDashboard() {
    return (
        <div className="admin dash-container">
            <div className="dash-top">
                <div>
                </div>
                <div className="date-container">
                    Today <i className='bx bx-chevron-down'></i>
                </div>
                <div className="driver-select-container">
                    Driver 1 <i className='bx bx-chevron-down'></i>
                </div>
            </div>
            <div className="dash-middle">
                <div className="timer">
                    03:25:23
                </div>
                <div className="payable">
                    $2,453.40
                </div>
            </div>
            <div className="dash-bottom">
                <h3></h3>
                <AdminLineGraph data={DummyData} className="line-graph"/>
            </div>
        </div>
    );
}

export default AdminDashboard;