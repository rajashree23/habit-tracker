import { createContext, useContext, useReducer } from "react";
import { HabitReducer, initialState } from "../reducer/HabitReducer";

const HabitContext = createContext();

export const HabitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HabitReducer, initialState);

  return (
    <HabitContext.Provider
      value={{
        habits: state.habits,
        dispatch: dispatch,
        displayModalType: state.displayModalType
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitContext = () => useContext(HabitContext);
