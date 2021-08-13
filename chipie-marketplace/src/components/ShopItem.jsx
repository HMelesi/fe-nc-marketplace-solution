import React from 'react';
import { addItemToUserBasket, removeItemFromList, addItemToOrders } from '../utils/api';
import { UserContext } from '../contexts/UserContext';
import { formatPrice } from '../utils/price';

const ShopItem = ({item, setItems}) => {
    const [alert, setAlert] = React.useState(null);

    const { user } = React.useContext(UserContext);


    const addItemToBasket = (id) => {
        addItemToUserBasket(user, id).then(itemFromApi => {
            setAlert(`${itemFromApi.item_name} added to basket!`)
            setTimeout(() => {
                setAlert(null)
            }, 2000);
        })
    }

    const orderItem = (id) => {
        addItemToOrders(user, id).then(itemFromApi => {
            setAlert(`${itemFromApi.item_name} has been ordered!`)
            setTimeout(() => {
                setAlert(null)
            }, 2000);
        })
    }

    const removeItemFromShop = (id) => {
        removeItemFromList(id).then(() => {
            setItems(currItems => {
                const newItems = [...currItems].filter(newItem => newItem.item_id !== id);
                return newItems;
            })
        })
    }

    const renderAlert = () => {
        if(alert) {
            return <p className="shopitems__container__item__message__alert">{alert}</p>
        } else {
            return null
        }
    }

    return (
    <div className="shopitems__container__item">
                        <img alt={item.item_name} 
                            className="shopitems__container__item__image" 
                            src={item.img_url}
                            onError={(e)=>{
                                e.target.onerror = null; e.target.src="https://www.t-and-b.co.uk/wp-content/uploads/2017/01/default-placeholder.png"}}/>
                        <p>{item.item_name}</p>
                        <p>{item.category_name}</p>
                        <p>{formatPrice(item.price)}</p>
                        <div className="shopitems__container__item__message__space">
                            {renderAlert()}
                        </div>
                        <div className="shopitems__container__item__buttons">
                            <button 
                                className="shopitems__container__item__buttons__button secondaryButton"
                                onClick={() => orderItem(item.item_id)}>
                                ORDER NOW
                            </button>
                            <button 
                                className="shopitems__container__item__buttons__button secondaryButton"
                                onClick={() => addItemToBasket(item.item_id)}>
                                ADD TO BASKET
                            </button>
                            <button 
                                className="shopitems__container__item__buttons__button secondaryButton"
                                onClick={() => removeItemFromShop(item.item_id)}>
                                REMOVE ITEM FROM SHOP
                            </button>
                        </div>
                    </div>
    );
};

export default ShopItem;