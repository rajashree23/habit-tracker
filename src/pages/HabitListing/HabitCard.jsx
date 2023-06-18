import { useState } from "react";
import { ACTION_TYPES } from "../../constants/ActionTypes";
import { useHabitContext } from "../../context/HabitContext";
import { HabitDetailModal } from "./component/HabitDetailModal";
import "./habit.layout.css";
import { HabitFormModal } from "./HabitFormModal";

export const HabitCard = ({ habit }) => {
  const { displayModalType } = useHabitContext();
  const [showHabitDetailModal, setShowHabitDetailModal] = useState(false);

  const handleHabitDetailModal = () =>
    setShowHabitDetailModal((showHabitDetailModal) => !showHabitDetailModal);

  return (
    <>
      <div className="habit-card" onClick={handleHabitDetailModal}>
        <p>{habit.name}</p>
      </div>

      {showHabitDetailModal && (
        <HabitDetailModal
          habit={habit}
          handleHabitDetailModal={handleHabitDetailModal}
        />
      )}
      {displayModalType === ACTION_TYPES.SHOW_EDIT_HABIT_MODAL && (
        <HabitFormModal habit={habit} />
      )}
    </>
  );
};
