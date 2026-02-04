import { useRef } from "react";
import Button from "../ui/button";
import Input from "./Input";

import "./new-project.css";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  function handleCancel() {}

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length < 10 ||
      enteredDueDate.trim().length === 0
    ) {
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";

    onCancel();

    console.log(enteredTitle);
  }

  return (
    <div className="new-project">
      <menu>
        <li>
          <Button onClick={handleCancel} className="cancel">
            Cancel
          </Button>
        </li>
        <li>
          <Button className="save" onClick={handleSave}>
            Save
          </Button>
        </li>
      </menu>
      <div className="new-project">
        <Input classes="title" ref={title} label={"Title"} />
        <Input classes="description" ref={description} label={"Decription"} />
        <Input classes="due" ref={dueDate} label={"Due Date"} type="date" />
      </div>
    </div>
  );
}
