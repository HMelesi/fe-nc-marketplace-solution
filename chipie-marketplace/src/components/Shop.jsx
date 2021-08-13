import React from 'react';
import {  getCategories } from '../utils/api';
import ShopList from './ShopList';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [categories, setCategories] = React.useState([]);
    
    React.useEffect(() => {
        getCategories().then(categoriesFromApi => {
            setCategories(categoriesFromApi);
        })
    }, []);

    return (
        <div>
            <h2>ALL ITEMS FOR SALE</h2>
            <div className="shopLinks">
                {categories.map(cat => {
                    return <Link
                        to={`/shop/${cat.category_name}`}
                        className="greenLink shopLinks__shopLink"
                        key={cat.category_name}>
                            {cat.category_name.toUpperCase()}
                            </Link>
                })}
            </div>
            <ShopList category={null}/>
        </div>
    );
};

export default Shop;