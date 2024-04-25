import { useState } from "react";
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

  console.log(task);

  return (
    <>
      <div className="contenedor">
        <Header />
        <TaskForm task={task} setTask={setTask} />
        <TaskList task={task} setTask={setTask} />
      </div>
    </>
  );
}

export default App;
