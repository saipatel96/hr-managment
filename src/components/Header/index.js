
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
  <>
    <nav className="nav-header navbar-expand-lg navbar-dark bg-dark">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://media.glassdoor.com/sqll/2239481/rubixe-squarelogo-1584699443842.png"
          alt="website logo"
        />
        <p className="logo-title">rubixe</p>
        <ul className="nav-menu ml-auto">
          <li className="nav-menu-item">Home</li>

          <li className="nav-menu-item">Services</li>
          <li className="nav-menu-item">products</li>
          <li className="nav-menu-item">AI intership</li>
          <li className="nav-menu-item">career</li>
          <li className="nav-menu-item">Blog</li>
          <li className="nav-menu-item">About us</li>
          <li className="nav-menu-item">Contact Us</li>
        </ul>
      </div>
    </nav>
  
  </>
);
export default Header;
