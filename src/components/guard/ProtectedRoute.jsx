import AuthContext from "../../common/context/appContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const location = useLocation(); 
    const authData = useContext(AuthContext); 

    if (location.pathname === '/' && !authData?.loading && !authData?.token) {
        return children;
    }

    if (!authData?.token || (location.pathname === '/' && authData?.token)) { 
        return <Navigate to={'/redirect'} replace />
    }  

    return children;
}
