import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      //dispatch action from hooks
    }
    else {
        setShowErrorMessage(true);
        setInput({
            username: "",
            password: "",
        });
      }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>  
         <h1>Login</h1>
            {showErrorMessage && <p style={{ color: 'red' }}>The username or password is incorrect!</p>}

        <form onSubmit={handleSubmitEvent}>
          <div className="form_control">
            <label htmlFor="user-email">Email:</label>
            <input
              type="email"
              id="user-email"
              name="email"
              placeholder="example@yahoo.com"
              aria-describedby="user-email"
              aria-invalid="false"
              onChange={handleInput}
            />
            <div id="user-email" className="sr-only">
              Please enter a valid username. It must contain at least 6 characters.
            </div>
          </div>
          <div className="form_control,  position: 'relative' }}">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={handleInput}
            />
            <div id="user-password" className="sr-only">
              your password should be more than 6 character
            </div>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
    </>
  );
};

export default Login;