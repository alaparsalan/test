const passport = require("passport");
const jwt = require("jsonwebtoken");

const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;

const User = require("../models").User;

const { JWT_TOKEN } = require("../config");

passport.use(
  new LocalStrategy(async(email, password, done) => {
    try {
     
    const user = await User.findOne({ where: { email: email.toLowerCase() } })
    if (!user) return done(null, false);
    const isValid = await user.isValidPassword(password)
    if (!isValid) return done(null, false);
    return done(false, user);
  } catch (error) {
    done(error, false);
  }
  
  })
);

passport.use(
  new BearerStrategy((token, done) => {
    const decodedToken = jwt.decode(token, JWT_TOKEN);
    const id = decodedToken && decodedToken.id;
    const expires = decodedToken && new Date(decodedToken.exp * 1000);
    if (expires > Date.now()) {
      console.log("OK");
      return User.findOne({ where: { id } })
        .then((user) => done(null, user))
        .catch(done);
    }
    return done(null, false);
  })
);

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch(done);
});

module.exports = { JWT_TOKEN };
