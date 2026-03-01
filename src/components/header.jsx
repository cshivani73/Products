export default function Header() {
    return (
      <header className="header">
        <nav className="navbar">
          <h2 className="logo">John Doe</h2>
  
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
  
        <div className="hero-section">
          <h1>React & Node.js Developer</h1>
          <p>I build modern full-stack web applications.</p>
          <a className="btn-primary" href="#projects">View Projects</a>
        </div>
      </header>
    );
  }