const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100000,
    keys: [keys.cookieKey]
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// Uses Routes
require("./routes/authRoutes")(app);
require("./routes/gratitudeRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
