import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import { ACTION_TYPES } from "../../constants/ActionTypes";
import { useHabitContext } from "../../context/HabitContext";

import "./habit.layout.css";

export const HabitFormModal = ({ habit }) => {
  console.log({ habit });
  const [habitData, setHabitData] = useState(
    !habit
      ? {
          id: uuid(),
          name: "",
          repeat: "Daily",
          goal: "1 time Daily",
          timeOfDay: "Any time",
          startDate: "Today",
          archived: false
        }
      : habit
  );
  const { dispatch } = useHabitContext();

  const handleInputChange = (inputFieldKey, e) => {
    setHabitData((habitDataValues) => ({
      ...habitDataValues,
      [inputFieldKey]: e.target.value
    }));
  };
  const handleSubmitButton = () => {
    if (habitData.name) {
      dispatch({ type: ACTION_TYPES.SET_HABIT, payload: habitData });
      dispatch({ type: ACTION_TYPES.HANDLE_MODAL_CLOSE });
    } else {
      toast.error("Name can not be empty");
    }
  };
  return (
    <div className="habit-modal">
      <h2>New Habit</h2>

      <label htmlFor="name">NAME</label>
      <input
        type="text"
        id="name"
        value={habitData.name}
        onChange={(e) => handleInputChange("name", e)}
      />

      <label htmlFor="repeat">REPEAT</label>
      <select id="repeat" onChange={(e) => handleInputChange("repeat", e)}>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>

      <label htmlFor="goal">GOAL</label>
      <select id="goal" onChange={(e) => handleInputChange("goal", e)}>
        <option value="1 time Daily">1 time Daily</option>
        <option value="1 time Weekly">1 time Weekly</option>
        <option value="1 time Monthly">1 time Monthly</option>
      </select>

      <label htmlFor="time">Time Of Day</label>
      <select id="time" onChange={(e) => handleInputChange("timeOfDay", e)}>
        <option value="Any time">Any time</option>
        <option value="Every 2 hours">Every 2 hours</option>
        <option value="Every 6 hours">Every 6 hours</option>
      </select>

      <label htmlFor="start-date">START DATE</label>
      <select
        id="start-date"
        onChange={(e) => handleInputChange("startDate", e)}
      >
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="One week after">One week after</option>
      </select>

      <button
        onClick={() => dispatch({ type: ACTION_TYPES.SHOW_ADD_HABIT_MODAL })}
      >
        Discard
      </button>
      <button onClick={handleSubmitButton}>Save</button>
    </div>
  );
};
