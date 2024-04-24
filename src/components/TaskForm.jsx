import { useState } from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TaskForm = ({ task, setTask }) => {
    const [inputTask, setInputTask] = useState('')

    const handleInput = (event) => {
        setInputTask(event.target.value)
    }

  const handleSubmit = (event) => {
    event.preventDefault();

    setTask([...task, {
        id: 3,
        texto: inputTask,
        completada: false
    }]);
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTask}
        onChange={(event) => handleInput(event)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default TaskForm;
