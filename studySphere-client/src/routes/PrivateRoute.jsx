import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
