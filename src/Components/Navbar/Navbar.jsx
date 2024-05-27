import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import menuIcon from '../../Assets/menu-icon.png'; // Update the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const isHomePage = location.pathname === '/';

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} ${isHomePage && !sticky ? 'transparent-nav' : ''}`}>
            <Link to='/' className="nav-logo">Travelo</Link>
            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={handleMenuToggle}>Home</Link></li>
                <li><Link to="/Explore" onClick={handleMenuToggle}>Locations</Link></li>
                <li><Link to="/Aboutus" onClick={handleMenuToggle}>About Us</Link></li>
                <li><Link to="/Contact" onClick={handleMenuToggle}><button className='btn nav-contact'>Contact</button></Link></li>
            </ul>
            <div className="hamburger" onClick={handleMenuToggle}>
                {menuOpen ? (
                    <FontAwesomeIcon icon={faX} />
                ) : (
                    <img src={menuIcon} alt="Menu Icon" />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
