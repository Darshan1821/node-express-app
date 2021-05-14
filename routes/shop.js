const path = require('path');

const express = require('express');

const shopRoutes = express.Router();
const rootDir = require('../util/path-helper');

shopRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = shopRoutes;