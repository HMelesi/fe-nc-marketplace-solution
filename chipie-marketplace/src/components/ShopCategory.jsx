import React from 'react';
import ShopList from './ShopList';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShopCategory = () => {
    const { category } = useParams();

    return (
        <div>
            <p>
                <Link className="plainLink" to="/shop">shop</Link>
                {' '}
                &gt; 
                {' '}
                {category.toLowerCase()}
            </p>
            <h2>{category.toUpperCase()}</h2>
            <ShopList category={category}/>
        </div>
    );
};

export default ShopCategory;