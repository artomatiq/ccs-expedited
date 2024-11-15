import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useRole } from './RoleContext';

export const DriversContext = createContext();

console.log(process.env.REACT_APP_API_URL);

const fetchDrivers = async (setDrivers, setLoading, setError, isAuthenticated, role) => {
    if (isAuthenticated && role === 'admin') {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/drivers`);
            setDrivers(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
};

export const DriversProvider = ({ children }) => {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const role = useRole();
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        fetchDrivers(setDrivers, setLoading, setError, isAuthenticated, role);
    }, [isAuthenticated, role]);

    return (
        <DriversContext.Provider value={{ drivers, loading, error }}>
            {children}
        </DriversContext.Provider>
    );
};
