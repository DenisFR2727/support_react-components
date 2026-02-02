import { useState } from "react";
import NoProjectSelected from "./components/Title/Title";
import SidebarProjects from "./components/Panel/aside-panel";
import NewProject from "./components/new-project/new-project";

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

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <main className="App">
      <SidebarProjects onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
