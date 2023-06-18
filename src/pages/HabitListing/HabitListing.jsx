import { ACTION_TYPES } from "../../constants/ActionTypes";
import { useHabitContext } from "../../context/HabitContext";

import "./habit.layout.css";

import { HabitFormModal } from "./component/HabitFormModal";
import { HabitCard } from "./component/HabitCard";

export const HabitListing = () => {
  const { habits, displayModalType, dispatch } = useHabitContext();
  const unarchivedHabits = habits.filter(({ archived }) => !archived);

  return (
    <>
      <div className="habit-container">
        <div
          className="habit-card  add-new"
          onClick={() => dispatch({ type: ACTION_TYPES.SHOW_ADD_HABIT_MODAL })}
        >
          <p>Add a new habit</p>
        </div>

        {unarchivedHabits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>

      {displayModalType === ACTION_TYPES.SHOW_ADD_HABIT_MODAL && (
        <HabitFormModal />
      )}
    </>
  );
};
