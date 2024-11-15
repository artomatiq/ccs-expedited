import './MainContent.css';
import Driver from '../driver/Driver';
import Admin from '../admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useRole } from '../context/RoleContext'

const ProtectedRoute = ({ role, expectedRole, children }) => {
    console.log('rendering protected route with role:', role);
    // if (role === undefined) {
    //     return <div>Loading...</div>;
    // }
    if (role !== expectedRole) {
        return <Navigate to='/' />;
    }
    return children
}

function MainContent() {
    const { user, isAuthenticated } = useAuth0();

    console.log('main content, authenticatd?', isAuthenticated);

    const role = useRole();

    if (!role) {
        return <div>Loading role...</div>;
    }

    return (
        <Routes>
            <Route path='/' element={<Navigate to={
                role === 'admin'
                    ? '/admin'
                    : '/driver'
            } />} />
            <Route
                path='admin/*'
                element={
                    <ProtectedRoute role={role} expectedRole={'admin'}>
                        <Admin />
                    </ProtectedRoute>
                }
            />

            <Route
                path='driver/*'
                element={
                    <ProtectedRoute role={role} expectedRole={'driver'}>
                        <Driver />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to="/welcome" />} />

        </Routes>
    );
}

export default MainContent;