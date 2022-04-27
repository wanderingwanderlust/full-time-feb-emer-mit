import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

function RequireAuth() {
    let auth = useAuth();
    console.log(auth)
    let location = useLocation();

    if(!auth.user) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return <Outlet />
}

export default RequireAuth;