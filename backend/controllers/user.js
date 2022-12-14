const User = require("../models").User;
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { compose } = require("compose-middleware");
const { body, check } = require("express-validator");
const { validateReq } = require("../common");
const { JWT_TOKEN, TOKEN_EXPIRATION_TIME } = require("../config");

const SignInValidation = [
  check("username").not().isEmpty().withMessage("must be required").isEmail().withMessage("must be a email").normalizeEmail(),
  check("password").not().isEmpty().withMessage("must be required"),
];
const SignUpValidation = [
  body("password").isLength({ min: 5 }).withMessage("must be at least 5 chars long"),
  body("name").not().isEmpty().withMessage("must be required"),
  body("email").not().isEmpty().withMessage("must be required").isEmail().withMessage("must be a email").normalizeEmail(),
  body("email").custom((email) => {
    return User.findOne({ where: { email } }).then((user) => {
      if (user) {
        return Promise.reject("E-mail already in use");
      }
    });
  }),
];

module.exports = {
  profile: compose([
    (req, res, next) => {
      console.log(req.headers);
      next();
    },
    (req, res) => {
      const token = req.header('Authorization').split(" ")[1]
      const decodedToken = jwt.decode(token, JWT_TOKEN);
      const id = decodedToken && decodedToken.id;
      const expires = decodedToken && new Date(decodedToken.exp * 1000);
      if (expires > Date.now())
      return res.status(401).send({ message:"token expired" })
        console.log("OK", id);
          User.findOne({ where: { id } })
          .then((user) => {
            res.status(200).send({ user });
          })
        }
  ]),
  login: compose([
    SignInValidation,
    validateReq("Sign Up Failed!"),
   async (req, res) => {
      const user = await User.findOne({ where: { email: req.body.username } })
      if (!user)  res.status(401).send({message:"no user!"});
      const isValid = await user.isValidPassword(req.body.password)
      if (!isValid) {
        res.status(401).send({ error:"invalid username or password" });
      }
      const token = jwt.sign(
        {
          id: user.id,
        },
        JWT_TOKEN,
        // { expiresIn: TOKEN_EXPIRATION_TIME }
      );

      res.status(200).send({ token });
    },
  ]),

  create: compose([
    SignUpValidation,
    validateReq("User Registration Failed!"),
    async (req, res) => {
      const { name, email, password } = req.body;

      return User.create({
        name,
        email: email.toLowerCase(),
        password,
      })
        .then((users) => res.status(201).send(users))
        .catch((error) => res.status(400).send(error));
    },
  ]),
  list(req, res) {
    return User.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },
};
