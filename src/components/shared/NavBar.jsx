import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppleLogo from "./AppleLogo";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBar = [
    { id: "id2", name: "Store", Link: "/" },
    { id: "id3", name: "Mac", Link: "/" },
    { id: "id4", name: "ipad", Link: "/" },
    { id: "id5", name: "iphone", Link: "/" },
    { id: "id6", name: "Watch", Link: "/" },
    { id: "id7", name: "Vision", Link: "/" },
    { id: "id8", name: "Airpods", Link: "/" },
    { id: "id9", name: "Tv & Home", Link: "/" },
    { id: "id10", name: "Entertainment", Link: "/" },
    { id: "id11", name: "Accessories", Link: "/" },
    { id: "id12", name: "Support", Link: "/SupportPage" },
  ];

  const utilityNav = [
    { id: "id13", name: <Search size={16} className="icon" />, Link: "/" },
    { id: "id14", name: <ShoppingBag size={16} className="icon" />, Link: "/" },
  ];

  return (
    <>
      <div className="nav-container">
        <nav className="navbar" aria-label="Main navigation">
          <Link className="nav-brand" to="/" onClick={() => setIsMenuOpen(false)} aria-label="Apple home">
            <AppleLogo classname="icon" />
          </Link>

          <ul className="nav-links">
            {navBar.map((bar, index) => (
              <li key={index}>
                <Link to={bar.Link} onClick={() => setIsMenuOpen(false)}>{bar.name}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {utilityNav.map((item) => (
              <Link key={item.id} to={item.Link} className="nav-action-link" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              className="nav-toggle"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-header">
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-menu-list">
          {navBar.map((bar, index) => (
            <li key={index}>
              <Link to={bar.Link} onClick={() => setIsMenuOpen(false)}>{bar.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}