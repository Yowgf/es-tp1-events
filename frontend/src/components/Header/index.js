import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/map" className="header-link">Map</Link>
                <Link to="/register" className="header-link">Register</Link>
            </nav>
        </div>
    )
}

export default Header
