const express = require('express');

const adminRoutes = express.Router();

const products = [];

adminRoutes.get('/product', (req, res, next) => {
    res.render('add-product', { title : 'Add Product', path : '/admin/product' });
});

adminRoutes.post('/product', (req, res, next) => {
    products.push( { title : req.body.title } );
    res.redirect('/');
});

exports.routes = adminRoutes;
exports.products = products;