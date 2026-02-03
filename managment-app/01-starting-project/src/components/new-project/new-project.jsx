import Button from "../ui/button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="new-project">
      <menu>
        <li>
          <Button>Cancel</Button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Decription"} />
        <Input label={"Due Date"} />
      </div>
    </div>
  );
}
