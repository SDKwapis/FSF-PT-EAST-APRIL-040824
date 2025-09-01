const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // gives the user a limited tim to be logged in. for security?
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // it's the countdown for how long the session will last before logging you out
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // determines whether or not the http prefix will be used
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // determines whether or not the https prefix will be used to send the cookies securely.
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // determines how strict the rules will be about sending the cookies with cross-site requests
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
