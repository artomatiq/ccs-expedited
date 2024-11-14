import './MainContent.css';
import Driver from '../driver/Driver';
import Admin from '../admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ role, expectedRole, children }) => {
    console.log('rendering protected route with role:', role);
    if (role !== expectedRole) {
        return <Navigate to='/' />;
    }
    return children
}

function MainContent() {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    console.log('main content, authenticatd?', isAuthenticated);

    const [role, setRole] = useState();

    useEffect(() => {
        const fetchRole = async () => {
            if (isAuthenticated) {
                try {
                    const claims = await getIdTokenClaims();
                    const userRole = claims['https://myapp.example.com/roles'][0] || [];
                    setRole(userRole);
                    console.log('main content: role:', userRole);
                } catch (error) {
                    console.log('Error fetching role:', error);
                } finally {
                }
            }
        }
        fetchRole();
    }, [getIdTokenClaims, isAuthenticated]);

    if (!role) {
        console.log('MainContent: loading role');
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