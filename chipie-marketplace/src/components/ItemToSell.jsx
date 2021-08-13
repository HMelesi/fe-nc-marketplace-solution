import React from 'react';
import { getCategories, addItemToSell } from '../utils/api';

const ItemToSell = () => {
    const [body, setBody] = React.useState({
        item_name: '',
        description: '',
        img_url: '',
        price: 0,
        category_name: ''
    });
    const [categories, setCategories] = React.useState([]);
    const [alert, setAlert] = React.useState(null);

    React.useEffect(() => {
        getCategories().then(categoriesFromApi => {
            setCategories(categoriesFromApi);
        })
    }, [])

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setBody(currBody => {
            let copyBody = Object.assign({}, currBody);
            if(id === "price") {
                const numberValue = parseInt(value)
                if(numberValue) {
                    copyBody.price = numberValue;
                } 
            } else {
                copyBody[id] = value;
            }
            return copyBody;
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(body)
        addItemToSell(body).then(item => {
            setAlert(`${item.item_name} added to shop!`)
            setTimeout(() => {
                setAlert(null)
            }, 2000);
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
        <div>
            <p>Fill out the details below to sell an item at the Very Cool Shop</p>
            <form className="itemForm" onSubmit={handleOnSubmit}>
                <label htmlFor="item_name">
                    ITEM NAME:
                </label>
                <input
                    className="itemForm__input"
                    required
                    value={body.item_name}
                    id="item_name"
                    onChange={handleOnChange}
                />
                <label htmlFor="description">
                    DESCRIPTION:
                </label>
                <input
                    className="itemForm__input"
                    required
                    value={body.description}
                    id="description"
                    onChange={handleOnChange}
                />
                <label htmlFor="img_url">
                    IMAGE URL:
                </label>
                <input
                    className="itemForm__input"
                    required
                    value={body.img_url}
                    id="img_url"
                    onChange={handleOnChange}
                />
                <label htmlFor="price">
                    PRICE:
                </label>
                <input
                    className="itemForm__input"
                    required
                    value={body.price}
                    id="price"
                    onChange={handleOnChange}
                />
                <label htmlFor="category">
                    CATEGORY:
                </label>
                <select 
                    className="itemForm__input"
                    id="category_name" 
                    name="category_name" 
                    value={body.category_name} 
                    onChange={handleOnChange}
                    required
                >
                    <option defaultValue></option>
                    {categories.map(category => {
                        return <option key={category.category_name}>{category.category_name}</option>
                    })}
                </select>
                <button className="secondaryButton">
                    LIST ITEM
                </button>
                <div className="shopitems__container__item__message__space">
                    {renderAlert()}
                </div>
            </form>
        </div>
    );
};

export default ItemToSell;