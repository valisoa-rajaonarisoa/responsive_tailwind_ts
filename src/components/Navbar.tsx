import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';


const Navbar: React.FC = () => {
  // ******************* 1 appel theme 
  const { theme, setTheme } = useTheme();


  // ******************3 change le theme 
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as 'light' | 'dark' | 'system');
  };

  return (
    <nav className="p-4 bg-gray-200 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <select

            // ***************** 2 prendre le clique 
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="p-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
