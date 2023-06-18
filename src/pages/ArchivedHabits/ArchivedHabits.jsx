import { useHabitContext } from "../../context/HabitContext";
import { HabitCard } from "../HabitListing/component/HabitCard";

import "./archived.layout.css";

export const ArchivedHabits = () => {
  const { habits } = useHabitContext();
  const archivedHabits = habits.filter((habit) => habit.archived);

  return (
    <div className="archived-container">
      {archivedHabits.length === 0 && <p className="no-msg">No archived habits!</p>}
      {archivedHabits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} archived />
      ))}
    </div>
  );
};
