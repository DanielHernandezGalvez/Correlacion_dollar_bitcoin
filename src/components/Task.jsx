import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ exercice, toggleCompletda, editarTarea, borrarTarea }) => {
  const [editandoTarea, setEditandoTarea] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState(exercice.texto);

  const handleSubmit = (event) => {
    event.preventDefault();
    editarTarea(exercice.id, nuevaTarea)
    setEditandoTarea(false);
  };


  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={exercice.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletda(exercice.id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(event) => setNuevaTarea(event.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          exercice.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => setEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(exercice.id)}
        />
      </div>
    </li>
  );
};

export default Task;
