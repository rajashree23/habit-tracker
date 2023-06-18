import { useState } from "react";
import { ACTION_TYPES } from "../../constants/ActionTypes";
import { useHabitContext } from "../../context/HabitContext";
import { HabitCard } from "./HabitCard";

import "./habit.layout.css";
import { HabitFormModal } from "./HabitFormModal";

export const HabitListing = () => {
  const { habits, displayModalType, dispatch } = useHabitContext();

  return (
    <>
      <div className="habit-container">
        <div
          className="habit-card"
          onClick={() => dispatch({ type: ACTION_TYPES.SHOW_ADD_HABIT_MODAL })}
        >
          <p>Create new habit</p>
        </div>
        {displayModalType === ACTION_TYPES.SHOW_ADD_HABIT_MODAL && (
          <HabitFormModal />
        )}
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
};
