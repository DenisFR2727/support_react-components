import { GoPlus } from "react-icons/go";
import Button from "../ui/button";
import "./aside-panel.css";

export default function SidebarProjects({ onStartAddProject }) {
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
        <ul>list...</ul>
      </div>
    </aside>
  );
}
