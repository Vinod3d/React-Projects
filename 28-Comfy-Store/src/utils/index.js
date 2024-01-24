import axios from 'axios';

const productionUrl = ' https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl,
})

export const formatPrice = (price) => {
    const dollersAmount = new Intl.NumberFormat('en-US', {
        style : 'currency',
        currency: 'USD',  // Local preference not working properly
        }).format((price / 100).toFixed(2));
    return dollersAmount;
}