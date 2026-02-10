import { useState } from "react";
import NoProjectSelected from "./components/Title/Title";
import SidebarProjects from "./components/Panel/aside-panel";
import NewProject from "./components/new-project/new-project";
import ToDoProject from "./components/todo/todo-project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  let content;

  function handleStartProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectDate) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectDate,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleExitAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectedProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }
  function handleAddTaskProject(task) {
    setProjectsState((prevState) => {
      const newTask = {
        ...task,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== projectId,
        ),
        tasks: prevState.tasks.filter((task) => task.projectId !== projectId),
      };
    });
  }
  function handleDeleteTaskId(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleExitAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  } else {
    const selectedProject = projectsState.projects.find(
      (p) => p.id === projectsState.selectedProjectId,
    );
    const projectTasks = projectsState.tasks.filter(
      (task) => task.projectId === projectsState.selectedProjectId,
    );
    content = (
      <ToDoProject
        project={selectedProject}
        onAdd={handleAddTaskProject}
        tasks={projectTasks}
        onDelProject={handleDeleteProject}
        onDelTask={handleDeleteTaskId}
      />
    );
  }

  return (
    <main className="App">
      <SidebarProjects
        projects={projectsState.projects}
        onStartAddProject={handleStartProject}
        selectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
