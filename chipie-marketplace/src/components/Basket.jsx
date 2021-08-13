import React from 'react';
import { getBasketItems, removeItemFromBasket } from '../utils/api';
import { UserContext } from '../contexts/UserContext';
import { formatPrice } from '../utils/price';
import Loading from './Loading';

const Basket = () => {
    const [ basketItems, setBasketItems ] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { user } = React.useContext(UserContext);

    React.useEffect(() => {
        setIsLoading(true);
        getBasketItems(user).then(itemsFromApi => {
            setBasketItems(itemsFromApi);
            setIsLoading(false);
        })
    }, [user]);

    const removeItem = (id) => {
        setIsLoading(true)
        removeItemFromBasket(user, id).then(() => {
            setBasketItems(currItems => {
                const newItems = [...currItems].filter(newItem => newItem.item_id !== id);
                return newItems;
            });
            setIsLoading(false);
        })
    }

    const getBasketTotal = () => {
        let sum = 0;
        basketItems.forEach(item => {
            sum += item.price;
        })
        return formatPrice(sum);
    }

    return (
        <Loading isLoading={isLoading}>
            <p>basket</p>
            <div className="items__container">
                {basketItems.map(item => {
                    return (
                    <div className="items__container__item" key={item.item_id}>
                        <img 
                            alt={item.item_name} 
                            className="items__container__item__image" 
                            src={item.img_url}
                            onError={(e)=>{
                                e.target.onerror = null; e.target.src="https://www.t-and-b.co.uk/wp-content/uploads/2017/01/default-placeholder.png"}}/>
                        <p>{item.item_name}</p>
                        <p>{formatPrice(item.price)}</p>
                        <button 
                            className="secondaryButton"
                            onClick={() => removeItem(item.item_id)}>
                            REMOVE
                        </button>
                    </div>
                    )
                })}
            </div>
            <div className="items__total">
                <p className="items__total__item">TOTAL:</p>
                <p className="items__total__item">{getBasketTotal()}</p>
            </div>
        </Loading>
    );
};

export default Basket;