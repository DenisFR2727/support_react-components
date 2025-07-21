import { useState } from "react";
import "./todo.css";
interface ITasks {
  id: number;
  text: string;
  isCompleted: boolean;
}

const initialTasks: ITasks[] = [
  { id: 1, text: "Buy milk", isCompleted: false },
  { id: 2, text: "Walk the dog", isCompleted: true },
  { id: 3, text: "Read a book", isCompleted: false },
];

export default function TodoList() {
  const [tasks, setTasks] = useState<ITasks[]>(initialTasks);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const toggleStatus = (taskId: number) => {
    const updateStatus = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updateStatus);
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  const noTasks = filteredTask.length === 0;

  return (
    <div className="todo_list">
      <h1>Task 2</h1>
      <div className="filters_ btn">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      {noTasks ? (
        <p>No Tasks!</p>
      ) : (
        <ul>
          {filteredTask.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleStatus(task.id)}
              />
              <span className={task.isCompleted ? "isCompleted" : ""}>
                {task.text}
              </span>
              <button onClick={() => toggleStatus(task.id)}>
                Toggle Status
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 🧩 Завдання #6: Фільтрація задач за статусом
// 🔸 Умова:

// Створи компонент, який:

//     Має список задач (id, text, isCompleted)

//     Показує задачі у списку

//     Має 3 кнопки-фільтри:

//         All

//         Active — показує лише не виконані задачі

//         Completed — показує лише виконані задачі

//     При натисканні на кнопку — список задач змінюється відповідно до фільтра

//     Активний фільтр має бути візуально виділений (наприклад, кольором або підкресленням)

// 📌 Обмеження:

//     Додавати нові задачі чи редагувати — не потрібно

//     Всі задачі вже є у масиві

//     Робити все в одному компоненті
