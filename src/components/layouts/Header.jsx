import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

function Header() {
  const [openNav, setOpenNav] = useState(false)
  const [scrollBottom, setScrollBottom] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setScrollBottom(true) : setScrollBottom(false)
    })
  }, [])

  return (
    <header className={`header p-2 fixed-top px-2 ${scrollBottom && 'active-scroll'}`}>
      <nav className="container-fluid nav align-items-center justify-content-between"> 
        <img src="assets/logo-bg.png" alt="" />
        <button className="btn open-nav" onClick={() => setOpenNav(true)}><FaBars size={40} /></button>
        <ul className={`nav nav-list ${openNav && 'active'}`}>
          <button className="close-nav btn" onClick={() => setOpenNav(false)}><FaTimes /></button>
          <li className="nav-item"><Link className="nav-link" to='/'>About</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Takenomics</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Roadmap</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>Documents</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/'>FAQ</Link></li>
          <li className="nav-item"><button className="btn nav-link">MINT FLOH RAFFLE NFT</button></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
