import { useContext } from "react";
import { AuthContext } from "../AuthProVider";

const UseAuth = () => {
const auth = useContext(AuthContext)
return auth
};

export default UseAuth;