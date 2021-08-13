import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>WELCOME TO THE VERY COOL SHOP</h2>
            <div className="homepage__links">
                <Link className="primaryButton" to="/shop">SHOP ITEMS</Link>
                <Link className="primaryButton" to="/users">VIEW USERS</Link>
                <Link className="primaryButton" to="/sell">SELL AN ITEM</Link>
            </div>
        </div>
    );
};

export default Home;