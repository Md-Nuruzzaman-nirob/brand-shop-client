import {
    useContext
} from "react";
import {
    AuthContext
} from "../context/ContextProvider";


const useAuth = () => {
    const result = useContext(AuthContext)
    return result
};


export default useAuth;