import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute() {
const {isAuth} = useAuthContext();

    // Nested routes render only after auth has been established.
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
