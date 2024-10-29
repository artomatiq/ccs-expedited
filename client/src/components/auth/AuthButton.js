import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function AuthButton() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return isAuthenticated 
    ? (
        <button onClick={() => logout({returnTo: window.location.origin})}>
            Logout
        </button>
    )
    : (
        <button id="logout-button" onClick={loginWithRedirect}>
            Login
        </button>
    )

    // return (
    //     <div>
    //         <button onClick={() => logout({ returnTo: window.location.origin })}>
    //             Logout
    //         </button>

    //         <button id="logout-button" onClick={loginWithRedirect}>
    //             Login
    //         </button>
    //     </div>
    // )
}

export default AuthButton;