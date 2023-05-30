const Joi = require('joi');

class IamValidationSchema {
  userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/[6-9]{1}[0-9]{9}/)
      .message(`Invalid number!!`),
  });
}
const iamValidationSchema = new IamValidationSchema();
module.exports = iamValidationSchema;