import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Form = ({ onClose }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    onClose(); // Close the form after logout
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
      <ul>
        <li>
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={onClose}>
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Form;

