import { useState } from "react";
import NoProjectSelected from "./components/Title/Title";
import SidebarProjects from "./components/Panel/aside-panel";
import NewProject from "./components/new-project/new-project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
  console.log(projectsState.projects);
  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleExitAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="App">
      <SidebarProjects onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
