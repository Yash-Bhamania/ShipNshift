import { useState } from "react";
import navItems from "../../constants/navigation";
import "./header.scss";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="brand">
            <a href="/">ShipNShift</a>
          </div>
          <div className={`navigation ${isMenuOpen ? "open" : ""} `}>
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.path}>{item.name}</a>
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
