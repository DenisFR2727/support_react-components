import Button from "../ui/button";
import "./title.css";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="title-page">
      <div className="title-content">
        <img src="/logo.png" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <Button onClick={onStartAddProject} className="title-new-btn">
          Create new project
        </Button>
      </div>
    </div>
  );
}
