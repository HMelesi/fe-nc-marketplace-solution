import axios from 'axios';

const marketApi = axios.create({
    baseURL: 'https://nc-marketplace.herokuapp.com/api'
})

export const getUsers = () => {
    return marketApi.get('/users')
        .then(response => {
            return response.data.users;
        })
}

export const addKudosToUser = (username, kudos_inc) => {
    return marketApi.patch(`/users/${username}`, { kudos_inc })
    .then(response => {
        return response.data.user;
    })
}

export const postUser = (body) => {
    return marketApi.post('/users', body)
    .then(response => {
        return response.data.user
    })
}

export const getCategories = () => {
    return marketApi.get('/categories')
        .then(response => {
            return response.data.categories;
        })
}

export const getItems = (category_name) => {
    return marketApi.get('/items', {
        params: {
            category_name
        }
    })
    .then(response => {
        return response.data.items;
    })
}

export const addItemToSell = (body) => {
    return marketApi.post('/items', body)
    .then(response => {
        return response.data.item;
    })
}

export const removeItemFromList = (item_id) => {
    return marketApi.delete(`/items/${item_id}`)
}

export const addItemToOrders = (username, item_id) => {
    return marketApi.post(`/users/${username}/orders`, { item_id })
        .then(response => {
            return response.data.item;
        })
}

export const addItemToUserBasket = (username, item_id) => {
    return marketApi.post(`/users/${username}/basket`, { item_id })
        .then(response => {
            return response.data.item;
        })
}

export const removeItemFromBasket = (username, item_id) => {
    return marketApi.delete(`/users/${username}/basket/${item_id}`)
}

export const getBasketItems = (username) => {
    return marketApi.get(`/users/${username}/basket`)
    .then(response => {
        return response.data.items;
    })
}

export const fetchOrders = (username) => {
    return marketApi.get(`/users/${username}/orders`)
    .then(response => {
        return response.data.items;
    })
}