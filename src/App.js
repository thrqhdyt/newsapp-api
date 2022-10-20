import Category from "./components/Category";
import Pages from "./pages/Pages";
import { FaMix } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './styles/navbar.css'
import Search from "./components/Search";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReactSwitch from "react-switch";


function App() {
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <nav className="navbar">
          <Link to={'/'} style={{textDecoration: 'inherit'}} className='logo'>
            <FaMix />
            <h1>MaqNews</h1>
          </Link>
          <div>
            <Search />
          </div>
          <div className="switch">
            <label>{ theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </nav>
        <Category />
        <Pages />
      </div>
    </ThemeProvider>
  );
};

export default App;
