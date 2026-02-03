import { GoPlus } from "react-icons/go";
import Button from "../ui/button";
import "./aside-panel.css";

export default function SidebarProjects({ list, onStartAddProject }) {
  return (
    <aside className="aside-panel">
      <div className="aside-content">
        <h2 className="aside-title">Your Projects</h2>
        <Button
          onClick={onStartAddProject}
          className="add-project-btn"
          icon={<GoPlus />}
        >
          Add Project
        </Button>
        <ul className="list-project">
          {list.map((project) => (
            <li className="project" key={project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
