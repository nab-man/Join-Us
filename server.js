const express = require('express');
const app = express();
const routes = require("./controllers/index.js");
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const cors = require('cors')
var sslRedirect = require('heroku-ssl-redirect').default


const PORT = process.env.PORT || 3000;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true
}

app.use(sslRedirect());

app.use(cors(corsOptions))
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening at port ", PORT));
});
