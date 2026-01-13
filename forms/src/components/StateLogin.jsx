import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";
import useInput from "./hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    reset: resetPassword,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    if (emailValue.length === 0 || passwordValue.length === 0) {
      return;
    }

    console.log("Submitting");
    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();
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
          error={emailHasError && "Please enter a valid email address!"}
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordHasError && "Please enter a valid password!"}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
