const express = require('express');

const shopRoutes = express.Router();
const adminData = require('./admin');

shopRoutes.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', { 
        products : products, 
        title : 'My Shop', 
        path : '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true 
    } );
});

module.exports = shopRoutes;