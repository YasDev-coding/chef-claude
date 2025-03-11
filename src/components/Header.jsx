import "../styles/Header.css";
import logoSrc from "/icons/chef-claude-icon.png";
export default function Header() {
  return (
    <header>
      <nav className="header__nav">
        <img src={logoSrc} alt="Chef Claude Logo" className="nav__logo" />
        <h1 className="nav__h1">Chef Claude</h1>
      </nav>
    </header>
  );
}
