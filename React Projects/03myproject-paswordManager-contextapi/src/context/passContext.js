import { createContext } from "react";
import { useContext } from "react";

export const passContext = createContext()

export const usePasswords = () => useContext(passContext);

