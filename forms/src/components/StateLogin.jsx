import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isEmailInValid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Submitting");
    console.log(enteredValues);

    setEnteredValues({ email: "", password: "" });
  }

  function handleInputChange(identifier, event) {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
          />
          <div className="control-error">
            {isEmailInValid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) => handleInputChange("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
