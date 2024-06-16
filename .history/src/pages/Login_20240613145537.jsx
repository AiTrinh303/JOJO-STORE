import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve profile information from localStorage
    const storedProfile = JSON.parse(localStorage.getItem('profile'));

    // Check if the entered email and password match the stored profile
    if (storedProfile && input.email === storedProfile.email && input.password === storedProfile.password) {
      navigate("/");
    } else {
      setShowErrorMessage(true);
      setInput({
        email: "",
        password: "",
      });
    }
  };

  // Function to handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    setShowErrorMessage(false);
  };

  // Function to navigate to the registration page
  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">LOGIN</h1>
        {showErrorMessage && <p className="text-red-500 mb-4">The email or password is incorrect!</p>}

        <form className="py-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-3">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example123@gmail.com"
              aria-describedby="user-email"
              aria-invalid={showErrorMessage ? "true" : "false"}
              className="w-full px-3 py-3 border border-gray-300 rounded-md"
              onChange={handleInput}
              value={input.email}
            />
            <div id="user-email" className="sr-only">
              Please enter a valid email.
            </div>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-3">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              aria-describedby="user-password"
              aria-invalid={showErrorMessage ? "true" : "false"}
              className="w-full px-3 py-3 border border-gray-300 rounded-md"
              onChange={handleInput}
              value={input.password}
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

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </form>

       
        <div className="text-center mt-6">
          <p className="text-gray-700">Don't have an account?</p>
          <button
            onClick={handleRegisterNavigation}
            className="text-blue-500 hover:underline"
          >
            Register here
          </button>
        <div></div>  
      </div>
    </div>
  );
};

export default Login;


