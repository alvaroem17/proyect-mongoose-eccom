const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).send("Token not found");
  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid");
      const user = await User.findOne({ email: result.email });
      if (!user) return res.status(401).send("User not found");

      res.locals.user = user;

      next();
    }
  );
};

const checkEmail = (req, res, next) => {
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexp.test(req.body.email)) {
    return res.status(401).send("checkEmail: Email not Valid");
  } else {
    next();
  }
};

const checkPassword = (req, res, next) => {
  const password = req.body.password;
  if (
    password.length < 8 ||
    password.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}|;:",.<>/?]).{8,}$;/
    )
  ) {
    return res.send("Your password is invalid");
  }
  next();
};

module.exports = { checkAuth, checkEmail, checkPassword };
