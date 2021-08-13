import React from 'react';
import { getItems } from '../utils/api';
import Loading from './Loading';
import ShopItem from './ShopItem';

const ShopList = ({category}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        if(category) {
            getItems(category)
            .then(itemsFromApi => setItems(itemsFromApi))
            .then(() => {
                setIsLoading(false);
            })
        } else {
            getItems()
            .then(itemsFromApi => setItems(itemsFromApi))
            .then(() => {
                setIsLoading(false);
            })
        }
    }, [category]);

    return (
        <Loading isLoading={isLoading}>
        <div className="shopitems__container">
            {items.map((item) => {
                return (
                    <ShopItem 
                        key={item.item_id} 
                        setItems={setItems}
                        item={item} 
                        />
                );
            })}
        </div>         
        </Loading>
    );
};

export default ShopList;