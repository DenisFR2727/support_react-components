import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/authSlice";
import Input from "./Input/Input";
import useInput from "./hooks/useInput";
import { isEmailValid, isNotEmpty } from "../lib/validation";

const Auth = () => {
  const dispatch = useDispatch();
  const {
    value: emailValue,
    handleChangeInput: changeInputEmail,
    hasError: emailHasError,
    onBlurInputChange: handleEmailBlur,
  } = useInput("", (value) => isEmailValid(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleChangeInput: changeInputPassword,
    hasError: passwordHasError,
    onBlurInputChange: handlePasswordBlur,
  } = useInput("", (value) => isNotEmpty(value));

  function handleLogin(e) {
    e.preventDefault();

    if (emailValue.length === 0 || passwordValue.length === 0) {
      return;
    }

    console.log(emailValue, passwordValue);
    dispatch(authActions.login(true));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <Input
              label="Email"
              htmlFor="email"
              type="email"
              id="email"
              name="email"
              value={emailValue}
              error={emailHasError && "Please enter a valid email address!"}
              onChange={changeInputEmail}
              onBlur={handleEmailBlur}
            />
          </div>
          <div className={classes.control}>
            <Input
              htmlFor="password"
              type="password"
              id="password"
              name="password"
              value={passwordValue}
              error={passwordHasError && "Password is Empty!"}
              onChange={changeInputPassword}
              onBlur={handlePasswordBlur}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
