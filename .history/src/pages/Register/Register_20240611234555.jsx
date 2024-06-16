import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.scss';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowErrorMessage(true);
    } else {
      navigate("/");
    }
  };

  const handleLoginNavigation = () => {
    navigate("/loginsignup");
  };

  return (
    <section>
      <h1>Register</h1>
      {showErrorMessage && <p style={{ color: 'red' }}>Passwords do not match!</p>}

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="userName" 
          placeholder="Username"
          value={userName}
          onChange={handleUserName} 
        />
        
        <div style={{ position: 'relative' }}>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="Password"
            value={password}
            onChange={handlePassword} 
          />
          <span
            style={{ position: 'absolute', right: '5px', top: '75%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            role="img"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </span>
        </div>

        <div style={{ position: 'relative' }}>
          <input 
            type={showPassword ? "text" : "password"} 
            name="confirmPassword" 
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword} 
          />
          <span
            style={{ position: 'absolute', right: '5px', top: '75%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            role="img"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </span>
        </div>  

        <input type="submit" value="Register" />
      </form>

      <p>Already have an account?</p>      
      <button onClick={handleLoginNavigation} style={{ marginTop: '10px' }}>Login here</button>
    </section>
  );
};

export default Register;