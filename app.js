const path = require('path');

const express = require('express');
const expresshbs = require('express-handlebars');

const app = express();

app.engine('hbs', expresshbs({ extname: 'hbs', defaultLayout: 'main-layout', layoutsDir: 'views/layouts'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path-helper');

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => res.status(404).render('page-not-found',  { title : 'Page Not Found' } ));

app.listen(3000);