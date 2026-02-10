import { useRef } from "react";
import Input from "../new-project/Input";
import Button from "../ui/button";
import "./todo-project.css";
import Tasks from "./tasks";

export default function ToDoProject({
  project,
  onAdd,
  tasks,
  onDelProject,
  onDelTask,
}) {
  const refTask = useRef(null);
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleAddTask() {
    const enteredTask = refTask.current.value;

    if (enteredTask.trim().length === 0) {
      return;
    }
    onAdd({ task: enteredTask });

    refTask.current.value = "";
  }

  function handleDelete() {
    onDelProject();
  }

  return (
    <div className="project-todo">
      <div className="project-select">
        <div className="project-title">
          <h2 style={{ color: "red" }}>{project.title}</h2>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        <div className="project-content">
          <span className="project-due">{formattedDate}</span>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="todo">
          <h2 className="todo_title">Tasks</h2>
          <div className="todo_task">
            <Input ref={refTask} type="text" className="todo_task-change" />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
          <Tasks tasks={tasks} onDelTask={onDelTask} />
        </div>
      </div>
    </div>
  );
}
