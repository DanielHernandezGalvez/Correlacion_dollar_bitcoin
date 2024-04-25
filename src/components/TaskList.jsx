import React from "react";
import Task from "./Task";

const TaskList = ({ task, setTask }) => {
  const toggleCompletda = (id) => {
    console.log("editando la  tarea con id");
    setTask(
      task.map((exercice) => {
        if (exercice.id === id) {
          return { ...exercice, completada: !exercice.completada };
        }
        return exercice;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {task.length > 0 ? (
        task.map((exercice) => {
          return (
            <Task
              key={exercice.id}
              exercice={exercice}
              toggleCompletda={toggleCompletda}
            />
          );
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas Agregadas</div>
      )}
    </ul>
  );
};

export default TaskList;
