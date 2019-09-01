const Joi = require("joi");

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      req.value["body"] = result.value;
      next();
    };
  },
  schemas: {
    contactSchema: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string()
        .regex(/[+][0-9]{2}\s[0-9]{2}\s[0-9]{6,}/)
        .required()
    })
  }
};
