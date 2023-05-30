const user = require('../../models/iam/Users');
const IamValidationSchema = require('../../validation/iam');

exports.createUser = async (req, res) => {
  try {
    const { error, value } = IamValidationSchema.userSchema.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(400).send('Invalid request:' + JSON.stringify(error.details[0].message));
    } else {
      if (user.find({ email: value.email })) {
        res.status(409).send('User with same email id already exists!!');
      } else {
        const userData = await user.create({
          ...value,
          created_at: new Date(),
          updated_on: null,
        });
        return res.send('User successfully created!!' + JSON.stringify(userData));
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
