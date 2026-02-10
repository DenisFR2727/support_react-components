import { useRef } from "react";
import Button from "../ui/button";
import Input from "./Input";

import "./new-project.css";
import Modal from "../Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef(null);

  const title = useRef(null);
  const description = useRef(null);
  const dueDate = useRef(null);

  function handleCancel() {
    onCancel();
  }

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim().length === "" ||
      enteredDescription.trim().length < 5 ||
      enteredDueDate.trim().length === ""
    ) {
      modalRef.current.open();
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
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okey">
        <h2>Invalid Input </h2>
        <p>Oops ... Looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="project-add">
        <menu>
          <li>
            <Button className="cancel" onClick={handleCancel}>
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
          <Input
            classes="description"
            ref={description}
            label={"Decription"}
            textarea
          />
          <Input classes="due" ref={dueDate} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}
