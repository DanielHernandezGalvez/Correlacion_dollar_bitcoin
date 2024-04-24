import React from "react";
import Task from "./Task";

const TaskList = ({ task }) => {
  return (
    <ul className="lista-tareas">
      {task.length > 0 ? (
        task.map((exercice) => {
          return <Task key={exercice.id} exercice={exercice} />;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas Agregadas</div>
      )}
    </ul>
  );
};

export default TaskList;
