import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    // console.log(user)
const location = useLocation()
// console.log(location)




    if(loading){
        return <p>loading</p>

    }
    if(user && user.email){

        return  children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;