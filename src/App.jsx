import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // Obtenemos tareas guardadas del localstorage
  const tareasGuardadas = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  // establecemos el estado de las tareas
  const [task, setTask] = useState(tareasGuardadas);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  // accedemos al localstorage y comprobar si mostrar completadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === true;
  }

  // el estado de mostrar tareas completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(
    configMostrarCompletadas
  );

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <>
      <div className="contenedor">
        <Header
          mostrarCompletadas={mostrarCompletadas}
          setMostrarCompletadas={setMostrarCompletadas}
        />
        <TaskForm task={task} setTask={setTask} />
        <TaskList
          task={task}
          setTask={setTask}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </>
  );
}

export default App;
