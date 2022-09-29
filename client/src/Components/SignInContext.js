import React from "react";
import { useContext, createContext } from "react";

export const isLoggedIn = {
    loggedIn: false
}
const LoginContext = createContext(isLoggedIn)
export default LoginContext

