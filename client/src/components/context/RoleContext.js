import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";

const RoleContext = createContext();

//exporting the RoleProvider component
export const RoleProvider = ({ children }) => {
    const { isAuthenticated, getIdTokenClaims } = useAuth0();
    const [role, setRole] = useState();

    useEffect( () => {
        const fetchRole = async () => {
            if (isAuthenticated) {
                try {   
                    const claims = await getIdTokenClaims();
                    const role = claims['https://myapp.example.com/roles'][0] || [];
                    setRole(role);
                    console.log('role set in RoleContext:', role);
                } catch (error){
                    console.log('error fetching role:', error);
                }
            }
        }
        fetchRole();
    }, [isAuthenticated, getIdTokenClaims]);

    return (
        <RoleContext.Provider value={role}>
            {children}
        </RoleContext.Provider>
    )
}

//exporting the useRole hook
export const useRole = () => useContext(RoleContext)