import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState([
    { id: 1, texto: "press de banca", completada: false },
    { id: 2, texto: "Sentadilla libre", completada: true },
  ]);
  useEffect(() => {
    localStorage.setItem("task", );
  }, [task])
  const [mostrarCompletadas, setMostrarCompletadas] = useState(false);

  console.log(task);

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
