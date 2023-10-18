import { useContext, createContext } from "react";

/**
 *  createContext - is used to create global variables in react in order to be saved from prorp drilling
 * 
 *  useContext - is used to use global variables created by createContext.
 */

const user = {
   user: {
    name : "Dummy",
    email : "dummy.eamil.com"
   }
};

const UserContext = createContext(user);

export default UserContext;