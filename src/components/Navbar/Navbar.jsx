import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../img/logo-Photorooms.png';
import Modal from '../Modal/Modal';
import Sidebar from '../Sidebar/sidebar.jsx';
import { useGlobalEvent } from '../../context/GlobalEventContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { windowSize } = useGlobalEvent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Redfin Logo" className="logo" />
        </Link>
      </div>

      {windowSize.width >= 980 ? (
        // เงื่อนไขสำหรับหน้าจอกว้างกว่า 980px
        <div className="navbar__menu-actions">
          <nav className="navbar__nav">
            <ul>
              <li className="dropdown">
                <a href="#buy">Buy ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h4>Popular Searches</h4>
                    <Link to="/houses-for-sale">Homes for sale</Link>
                    <a href="#">Condos for sale</a>
                    <a href="#">Land for sale</a>
                    <a href="#">Open houses</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Buying Options</h4>
                    <a href="#">Buy with Redfin</a>
                    <a href="#">Redfin Premier</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Buying Resources</h4>
                    <a href="#">Affordability calculator</a>
                    <a href="#">Home buying guide</a>
                    <a href="#">Find lenders & inspectors</a>
                    <a href="#">Free home buying classes</a>
                    <a href="#">US housing market</a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="#rent">Rent ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h4>Rental Resources</h4>
                    <a href="#">Rental market tracker</a>
                    <a href="#">How much rent can I afford?</a>
                    <a href="#">Should I rent or buy?</a>
                    <a href="#">Renter guide</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Redfin Rental Tools</h4>
                    <a href="#">List my home for rent</a>
                    <a href="#">Rental Tools dashboard</a>
                    <a href="#">US rental market trends</a>
                    <a href="#">Should I sell or rent my home?</a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="#sell">Sell ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h4>My Home</h4>
                    <a href="#">What's my home worth?</a>
                    <a href="#">My home dashboard</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Redfin Selling Options</h4>
                    <a href="#">Why sell with Redfin?</a>
                    <a href="#">Redfin Premier</a>
                    <a href="#">Redfin Full Service</a>
                    <a href="#">Find an agent</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Selling Resources</h4>
                    <a href="#">Home selling guide</a>
                    <a href="#">Will selling pay off?</a>
                    <a href="#">Find handypeople and stagers</a>
                    <a href="#">Home improvement trends</a>
                  </div>
                </div>
              </li>
              <li><a href="#premier">Redfin Premier</a></li>
              <li className="dropdown">
                <a href="#mortgage">Mortgage ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h4>Mortgage</h4>
                    <a href="#">Get pre-approved</a>
                    <a href="#">Today's mortgage rates</a>
                    <a href="#">Payment calculator</a>
                    <a href="#">Become a lender partner</a>
                  </div>
                  <div className="dropdown-column">
                    <h4>Calculators</h4>
                    <a href="#">Payment calculator</a>
                    <a href="#">How much can i afford?</a>
                    <a href="#">Rent vs. buy</a>
                    <a href="#">How to get pre-approved</a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href="#agents">Real Estate Agents ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <a href="#">Find an Agent</a>
                    <a href="#">Join as a Redfin Agent</a>
                    <a href="#">Join our referral network</a>
                    <a href="#">Agent Resource Center</a>
                  </div>
                </div>
              </li>
              <li><a href="#feed">Feed</a></li>
            </ul>
          </nav>
          <div className="navbar__actions">
            <button onClick={openModal} className="join-signin">
              Join / Sign in
            </button>
          </div>
        </div>
      ) : (
        // เงื่อนไขสำหรับหน้าจอแคบกว่า 980px
        <>
          <div className="navbar__menu-actions">
            <span className="sign-in" onClick={openModal}>
              Sign in
            </span>
            <button className="hamburger-menu" onClick={toggleMenu}>
              <svg className="SvgIcon menu hamNavIcon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                d="M20.75 8H3.25A.25.25 0 013 7.75v-1.5A.25.25 0 013.25 6h17.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25zm0 5H3.25a.25.25 0 01-.25-.25v-1.5a.25.25 0 01.25-.25h17.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25zm0 5H3.25a.25.25 0 01-.25-.25v-1.5a.25.25 0 01.25-.25h17.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25z" 
                />
              </svg>
            </button>
          </div>
          <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} logo={logo} />
        </>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Navbar;