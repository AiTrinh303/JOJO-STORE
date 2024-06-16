import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-center">LOGIN</h1>
          {showErrorMessage && <p className="text-red-500 mb-4">The username or password is incorrect!</p>}

          <form onSubmit={handleSubmitEvent}>
            <div className="mb-4">
              <label htmlFor="user-email" className="block text-gray-700 font-semibold mb-2">Email:</label>
              <input
                type="email"
                id="user-email"
                name="email"
                placeholder="example123@gmail.com"
                aria-describedby="user-email"
                aria-invalid="false"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                onChange={handleInput}
              />
              <div id="user-email" className="sr-only">
                Please enter a valid username. It must contain at least 6 characters.
              </div>
            </div>
            
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                aria-describedby="user-password"
                aria-invalid="false"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                onChange={handleInput}
              />
              <span
                style={{ position: 'absolute', right: '10px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                role="img"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
              <div id="user-password" className="sr-only">
                Your password should be more than 6 characters.
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
