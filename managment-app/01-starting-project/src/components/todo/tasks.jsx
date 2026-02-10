import Button from "../ui/button";

export default function Tasks({ tasks, onDelTask }) {
  function handleDeleteTask(taskId) {
    onDelTask(taskId);
  }

  return (
    <ul className="tasks">
      {tasks?.length > 0 ? (
        tasks.map((t) => (
          <li key={t.id} className="tasks-list">
            <span>{t.task}</span>
            <Button onClick={() => handleDeleteTask(t.id)}>Clear</Button>
          </li>
        ))
      ) : (
        <p>Not add Task</p>
      )}
    </ul>
  );
}
