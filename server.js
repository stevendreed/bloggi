const path = require('path');
const express = require ('express');
const session = require('express-session');
const exphbs = require ('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'default',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 6, // 6 hours
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict'
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// included so blog posts can be saved as json
app.use(express.json());

// included to access req.params
app.use(express.urlencoded({ extended: true }));

// set static served pages path to ${REPOSITORY}/public
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// initialize sequelize ORM 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
