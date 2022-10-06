import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header p-2 fixed-top">
      <nav className="container-fluid nav align-items-center justify-content-between"> 
        <img src="assets/logo-bg.png" alt="" />
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to='/'>About</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Takenomics</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Roadmap</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Documents</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
