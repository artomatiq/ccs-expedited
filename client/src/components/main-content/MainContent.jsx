import './MainContent.css';

import Driver from '../driver/Driver';
import Admin from '../admin/Admin';

import {Routes, Route, Navigate} from 'react-router-dom';

const ProtectedRoute = ({role, expectedRole, children}) => {
    if (role !== expectedRole) {
        return <Navigate to='/' replace/>;
    }
    return children
}

function MainContent() {

    const role = 'admin';

    return (
        <Routes>

            <Route path='/' element={<Navigate to={role === 'admin' ? '/admin' : '/driver'} replace/>}/>

            <Route 
                path='admin/*' 
                element={
                <ProtectedRoute role={role} expectedRole={'admin'}>
                    <Admin/>
                </ProtectedRoute>
                }
            />

            <Route
                path='driver/*'
                element={
                    <ProtectedRoute role={role} expectedRole={'driver'}>
                        <Driver/>
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    );
}

export default MainContent;