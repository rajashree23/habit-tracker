import { ACTION_TYPES } from "../constants/ActionTypes";

export const initialState = {
  habits: [],
  displayModalType: null
};

export const HabitReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_HABIT:
      const isHabitPresent = state.habits.find(
        ({ id }) => id === action.payload.id
      );

      return {
        ...state,
        habits: isHabitPresent
          ? state.habits.map((habit) =>
              habit.id === isHabitPresent.id ? { ...action.payload } : habit
            )
          : [...state.habits, action.payload]
      };
    case ACTION_TYPES.SET_ARCHIVE:
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id
            ? { ...habit, archived: !habit.archived }
            : habit
        )
      };
    case ACTION_TYPES.SET_DELETE:
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload.id)
      };

    case ACTION_TYPES.SHOW_ADD_HABIT_MODAL: {
      return {
        ...state,
        displayModalType: ACTION_TYPES.SHOW_ADD_HABIT_MODAL
      };
    }
    case ACTION_TYPES.SHOW_EDIT_HABIT_MODAL: {
      return {
        ...state,
        displayModalType: ACTION_TYPES.SHOW_EDIT_HABIT_MODAL
      };
    }
    case ACTION_TYPES.HANDLE_MODAL_CLOSE: {
      return {
        ...state,
        displayModalType: null
      };
    }
    default:
      return state;
  }
};
