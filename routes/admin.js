const path = require('path');

const express = require('express');

const adminRoutes = express.Router();
const rootDir = require('../util/path-helper');

adminRoutes.get('/product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

adminRoutes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = adminRoutes;