import './MainContent.css';
import Driver from '../driver/Driver';
import Admin from '../admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ role, expectedRole, children }) => {
    if (role !== expectedRole) {
        return <Navigate to='/' replace />;
    }
    return children
}

function MainContent() {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    console.log('main content, authenticatd?', isAuthenticated);
    console.log('user', user);

    const [role, setRole] = useState();

    useEffect(() => {
        const fetchRole = async () => {
            if (isAuthenticated) {
                try {
                    const claims = await getIdTokenClaims();
                    const userRole = claims['https://myapp.example.com/roles'][0] || [];
                    setRole(userRole);
                    console.log('User role:', userRole);
                } catch (error) {
                    console.log('Error fetching role:', error);
                }
            }
        }
        fetchRole();
    }, [getIdTokenClaims, isAuthenticated]);

    console.log('the role state is', typeof role, role);

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