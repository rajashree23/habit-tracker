import { useHabitContext } from "../../context/HabitContext";

export const ArchivedHabits=()=>{
    const {habits}=useHabitContext();
    const archivedHabits=habits.filter((habit)=>habit.archived);

    return(
        <div></div>
    )
}