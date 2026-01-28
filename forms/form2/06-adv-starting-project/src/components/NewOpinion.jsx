"use client";
import { useActionState } from "react";
import { isNotEmpty } from "../lib/validation";
import { OpinionsContext } from "../store/opinions-context";
import { use } from "react";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinionAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if (!isNotEmpty(userName)) {
      errors.push("Please valid user name.");
    }
    if (!isNotEmpty(title)) {
      errors.push("Plese valid title.");
    }
    if (body.trim().length < 50) {
      errors.push("Plese must be between 50 characters long in textarea.");
    }

    if (errors.length > 0) {
      return {
        errors,
        values: {
          userName,
          title,
          body,
        },
      };
    }

    // submit to backend

    await addOpinion({ userName, title, body });

    return {
      errors: null,
    };
  }

  const [stateForm, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={stateForm.values?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={stateForm.values?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={stateForm.values?.body}
          ></textarea>
        </p>
        {stateForm.errors && (
          <ul className="errors">
            {stateForm.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
