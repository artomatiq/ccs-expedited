import './AdminDashboard.css'
import AdminLineGraph from '../admin-line-graph/AdminLineGraph';

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
                <AdminLineGraph dataa={4}/>
            </div>
        </div>
    );
}

export default AdminDashboard;