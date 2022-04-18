import { createContext, useContext, useReducer } from "react";

export const context = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </context.Provider>
  );
};

export const useStateValue = () => useContext(context);
