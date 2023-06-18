import { ACTION_TYPES } from "../../../constants/ActionTypes";
import { useHabitContext } from "../../../context/HabitContext";
import { toast } from "react-toastify";

export const HabitDetailModal = ({ habit, handleHabitDetailModal ,archived}) => {
  const { dispatch } = useHabitContext();

  const handleArchiveButton = () => {
    dispatch({ type: ACTION_TYPES.SET_ARCHIVE, payload: habit });
    handleHabitDetailModal();
    toast.success("Archived!");
  };
  const handleDeleteButton = () => {
    dispatch({ type: ACTION_TYPES.SET_DELETE, payload: habit });
    handleHabitDetailModal();
    toast.error("Deleted!");
  };
  const handleEditButton = () => {
    dispatch({ type: ACTION_TYPES.SHOW_EDIT_HABIT_MODAL });
    handleHabitDetailModal();
    toast.success("Edited successfully!");
  };
  return (
    <>
      <div className="habit-modal">
        <p>Name: {habit.name} </p>
        <p>Repeat: {habit.repeat} </p>
        <p>Goal: {habit.goal} </p>
        <p>Time of day: {habit.timeOfDay} </p>
        <p>Start Date: {habit.startDate} </p>
        <div className="button-container">
          {" "}
          <button onClick={handleHabitDetailModal} className="discard">Close</button>
          <button onClick={handleArchiveButton} className="archive">
            {habit.archived ? "Unarchive" : "Archive"}
       
          </button>
          <button onClick={handleDeleteButton} className="delete">Delete</button>
          {!archived && <button onClick={handleEditButton} className="save">Edit</button>}
        </div>
      </div>
    </>
  );
};
