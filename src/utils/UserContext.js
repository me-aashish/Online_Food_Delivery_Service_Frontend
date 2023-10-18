import { useContext, createContext } from "react";

const user = {
   user: {
    name : "Dummy",
    email : "dummy.eamil.com"
   }
};

const UserContext = createContext(user);

export default UserContext;