import { ACTION_TYPES } from "../../../constants/ActionTypes";
import { useHabitContext } from "../../../context/HabitContext";

export const HabitDetailModal = ({ habit, handleHabitDetailModal ,archived}) => {
  const { dispatch } = useHabitContext();

  const handleArchiveButton = () => {
    dispatch({ type: ACTION_TYPES.SET_ARCHIVE, payload: habit });
    handleHabitDetailModal();
  };
  const handleDeleteButton = () => {
    dispatch({ type: ACTION_TYPES.SET_DELETE, payload: habit });
    handleHabitDetailModal();
  };
  const handleEditButton = () => {
    dispatch({ type: ACTION_TYPES.SHOW_EDIT_HABIT_MODAL });
    handleHabitDetailModal();
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
