import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { FaShoppingBasket } from 'react-icons/fa';

const Header = () => {
    const { user } = React.useContext(UserContext);

    return (
        <div className="appHeader">
            <header>
                <Link className="plainLink" to="/">
                    <h1>VERY COOL SHOP</h1>
                </Link>
            </header>
            <nav className="appHeader__nav">
                <ul className="appHeader__nav__innerlist">
                    <li className="appHeader__nav__listitem">
                        <Link className="whiteLink" to="/shop">SHOP</Link>
                    </li>
                    <li className="appHeader__nav__listitem">
                        <Link className="whiteLink" to="/users">USERS</Link>
                    </li>
                    <li className="appHeader__nav__listitem">
                        <Link className="whiteLink" to="/sell">SELL</Link>
                    </li>
                </ul>
                <div className="appHeader__nav__innerlist">
                    <Link className="appHeader__nav__listitem whiteLink" to="/user-profile">{user}</Link>
                    <Link className="appHeader__nav__listitem whiteLink" to="/basket"><FaShoppingBasket/></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;