import React from "react";
import Task from "./Task";

const TaskList = ({ task, setTask, mostrarCompletadas }) => {
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

  const editarTarea = (id, nuevoTexto) => {
    setTask(
      task.map((exercice) => {
        if (exercice.id === id) {
          return { ...exercice, texto: nuevoTexto };
        }
        return exercice;
      })
    );
  };

  const borrarTarea = (id) => {
    setTask(
      task.filter((exercice) => {
        if (exercice.id !== id) {
          return exercice;
        }
        return;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {task.length > 0 ? (
        task.map((exercice) => {
          if (mostrarCompletadas) {
            return (
              <Task
                key={exercice.id}
                exercice={exercice}
                toggleCompletda={toggleCompletda}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
            // Si latarea no esta completada la devbolvemos
          } else if (!exercice.completada) {
            return (
              <Task
                key={exercice.id}
                exercice={exercice}
                toggleCompletda={toggleCompletda}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          // si ya esta completada no la devolvemos
            return;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas Agregadas</div>
      )}
    </ul>
  );
};

export default TaskList;
