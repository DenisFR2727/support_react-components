import { useState } from "react";
import NoProjectSelected from "./components/Title/Title";
import SidebarProjects from "./components/Panel/aside-panel";
import NewProject from "./components/new-project/new-project";
import ToDoProject from "./components/todo-project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
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
    console.log(projectId);
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
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
    content = <ToDoProject project={selectedProject} />;
  }

  return (
    <main className="App">
      <SidebarProjects
        list={projectsState.projects}
        onStartAddProject={handleStartProject}
        selectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
