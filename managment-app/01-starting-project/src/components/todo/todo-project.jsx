import { useRef } from "react";
import Input from "../new-project/Input";
import Button from "../ui/button";
import "./todo-project.css";

export default function ToDoProject({ project, onAdd }) {
  const refTask = useRef(null);

  console.log(project);

  function handleAddTask() {
    const task = refTask.current.value;

    onAdd({ task: task });
  }
  return (
    <div className="project-todo">
      <div className="project-select">
        <div className="project-title">
          <h2 style={{ color: "red" }}>{project.title}</h2>
          <Button>Delete</Button>
        </div>
        <div className="project-content">
          <span className="project-due">{project.dueDate}</span>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="todo">
          <h2>Task</h2>
          <div className="todo_task">
            <Input ref={refTask} type="text" />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
          <div className="tasks"></div>
        </div>
      </div>
    </div>
  );
}
