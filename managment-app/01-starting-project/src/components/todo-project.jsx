export default function ToDoProject(project) {
  console.log(project);
  return (
    <div className="project-todo">
      <div className="project-select">
        <div>
          <h2 style={{ color: "red" }}>{project.title}</h2>
        </div>
      </div>
    </div>
  );
}
