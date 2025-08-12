import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Users from './components/UsersComponents/Users';
import About from './components/SiteInfo/About';
import Contact from './components/SiteInfo/Contact';

function App() {
  return (
  <Router>
      <div>
        <nav style={navStyle}>
          <Link style={linkStyle} to="/users">Users</Link>
          <Link style={linkStyle} to="/about">About</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
    );
}

const navStyle = {
  display: 'flex',
  backgroundColor: '#1a73e8',
  padding: '10px',
  justifyContent: 'center',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '18px',
  fontWeight: 'bold'
};

export default App;
