import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginSignUp.scss';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Navbar from "../../components/Header/Navbar";
// import { useAuth } from '../AuthContext';

const LoginSignUp = () => {
  const navigate = useNavigate();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUserName = (event) => {
    setUsername(event.target.value);
    console.log(userName);
  };

  const handlePassWord = (event) => {
    setPassword(event.target.value);
  }

  // const { LoginSignUp } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "Ai Trinh" && password === "12345") {
      navigate("/");
      // const userInfo = { username };
      // LoginSignUp(userInfo);
      
    } else {
      setShowErrorMessage(true);
      setUsername('');
      setPassword('');
    }
  };

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <section>  <Navbar />
      <h1>Login</h1>
      {showErrorMessage && <p style={{ color: 'red' }}>The username or password is incorrect!</p>}
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
            onChange={handlePassWord} 
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
        <input type="submit" value="Submit" />
      </form>
      <p>Don't have an account? </p>
      <button onClick={handleRegisterNavigation} style={{ marginTop: '10px' }}>Register here</button>
    </section>
  );
};

export default LoginSignUp;