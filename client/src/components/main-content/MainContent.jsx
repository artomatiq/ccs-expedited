import './MainContent.css';
import Driver from '../driver/Driver';
import Admin from '../admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ role, expectedRole, children }) => {
    if (role !== expectedRole) {
        return <Navigate to='/' replace />;
    }
    return children
}

function MainContent() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        console.log('loading in MainContent');
        return <div>Loading...</div>
    }

    console.log('main content, authenticatd?', isAuthenticated);
    console.log('user', user);

    let role = 'admin'

    return (
        <Routes>

            <Route path='/' element={<Navigate to={
                role === 'admin'
                    ? '/admin'
                    : role === 'driver'
                    ? '/driver'
                    : '/welcome' //if an authenticated user that's neither a driver nor an admin visits, redirect to welcome
            } replace />} />

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

            <Route path="*" element={<Navigate to="/welcome" replace />} />

        </Routes>
    );
}

export default MainContent;