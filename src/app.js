const express = require('express');
const path = require('path');
// const morgan = require("morgan");
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// set engine, view
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'view'));

// set path
route(app);

app.listen(port, () => console.log(`Listening at https://localhost:${port}`));
