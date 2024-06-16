import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
  const navigate = useNavigate();

  // State for registration form
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [email, setEmail] = useState('');

  // Handle form inputs
  const handleUserName = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowErrorMessage(true);
    } else {
      // Save profile information to localStorage
      const profile = {
        userName,
        email,
        password
      };
      localStorage.setItem('profile', JSON.stringify(profile));
      
      // Navigate to profile page
      navigate("/profile");
    }
  };

  // Navigate to login page
  const handleLoginNavigation = () => {
    navigate("/login");
  };

  return (
<section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">Register</h1>
        {showErrorMessage && <p className="text-red-500 mb-4">Passwords do not match!</p>}

        <form className="py-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input 
              type="text" 
              id="userName" 
              name="userName" 
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={userName}
              onChange={handleUserName} 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={handleEmail} 
            />
          </div>
        
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              name="password" 
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={password}
              onChange={handlePassword} 
            />
            <span
              style={{ position: 'absolute', right: '10px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              role="img"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password:</label>
            <input 
              type={showPassword ? "text" : "password"} 
              id="confirmPassword" 
              name="confirmPassword" 
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={handleConfirmPassword} 
            />
            <span
              style={{ position: 'absolute', right: '10px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              role="img"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div> 
        
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-700">Already have an account?</p>      
          <button 
            onClick={handleLoginNavigation} 
            className="text-blue-500 hover:underline mt-2"
          >
            Login here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;


