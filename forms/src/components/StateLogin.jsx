import { useState } from "react";
import Input from "./Input";

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
  const isPasswordInValid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();

    if (
      enteredValues.email.length === 0 ||
      enteredValues.password.length === 0 ||
      isPasswordInValid
    ) {
      return;
    }
    setDidEdit({
      email: false,
      password: false,
    });
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={isEmailInValid && "Please enter a valid email address!"}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={isPasswordInValid && "Please enter a valid password!"}
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
