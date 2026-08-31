import { useState } from "react";
import navItems from "../../constants/navigation";
import "./header.scss";
import { Menu, X } from "lucide-react";
import {Link} from 'react-router'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
const handleClick =()=>{
  setIsMenuOpen(false)
}
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="brand">
            <Link to="/">ShipNShift</Link>
          </div>
          <div className={`navigation ${isMenuOpen ? "open" : ""} `}>
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} onClick={handleClick} >{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="actions">
              <button type="button">Get Quote</button>
            </div>
          </div>

          <button
            className="mobile-menu-toggle"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            type="button"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
            
          </button>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
