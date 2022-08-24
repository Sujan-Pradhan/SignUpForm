const registerValidation = (req, res, next) => {
  req.check("name", "Name must be required").notEmpty();
  req
    .check("email", "Email is required")
    .notEmpty()
    .isEmail()
    .isLength({
      min: 12,
    })
    .withMessage("Must be in valid format and must be 12 characters ");
  req
    .check("password", "Password required")
    .notEmpty()
    .isLength({
      min: 8,
      max: 20,
    })
    .withMessage("Password most be between 8-20 characters");

  const errors = req.validationErrors();
  if (errors) {
    const showErrors = errors.map((err) => err.msg)[0];
    return res.status(400).json({ error: showErrors });
  }

  next();
};

module.exports.registerValidation = registerValidation;
