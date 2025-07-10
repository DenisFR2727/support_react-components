import { useState } from 'react';
import './todo.css';
interface ITasks {
    id: number;
    text: string;
    isCompleted: boolean;
}

const initialTasks: ITasks[] = [
    { id: 1, text: 'Buy milk', isCompleted: false },
    { id: 2, text: 'Walk the dog', isCompleted: true },
    { id: 3, text: 'Read a book', isCompleted: false },
];

export default function TodoList() {
    const [tasks, setTasks] = useState<ITasks[]>(initialTasks);
    const noTasks = tasks.every((task) => task.isCompleted);

    const toggleStatus = (taskId: number) => {
        const updateStatus = tasks.map((task) =>
            task.id === taskId
                ? { ...task, isCompleted: !task.isCompleted }
                : task
        );
        setTasks(updateStatus);
    };

    if (noTasks) {
        return <p>No Tasks!</p>;
    }
    return (
        <div>
            <h1>Task 2</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => toggleStatus(task.id)}
                        />
                        <span className={task.isCompleted ? 'isCompleted' : ''}>
                            {task.text}
                        </span>
                        <button onClick={() => toggleStatus(task.id)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Умова:

// Створи компонент, який:

//     Має список задач (to-do):

//         Кожна задача має: id, text, isCompleted

//     Кожна задача відображається зі статусом (✅ або ⏳)

//     Є кнопка "Змінити статус" — перевертає isCompleted (true ⇄ false)

//     Завершені задачі — показуються з перекресленим текстом (або зеленим кольором)

// 🧠 Приклад задач:

// 🔨 Що має бути:

//     useState для масиву задач ✅

//     кнопка "Toggle Status" 🟰 оновлення поля isCompleted

//     стилізація (перекреслений або зелений/сірий) залежно від статусу

//     якщо задач немає — показати повідомлення No tasks
