require('dotenv').config();
const jwt = require('jsonwebtoken');
const userDetailModel = require('../../models/iam/UserDetails');
const authService = require('../../services/iam/index');
const user = require('../../models/iam/Users');
// const user = require('../../models/iam/Users');
// const user = require('../../models/iam/Users');
const IamValidationSchema = require('../../validation/iam');

exports.createUser = async (req, res) => {
  try {
    const { error, value } = IamValidationSchema.userSchema.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(400).send('Invalid request:' + JSON.stringify(error.details[0].message));
    } else {
      if (!(await authService.verifyUser(value.ssoIdToken, value.email))) {
        return res.status(401).json({ msg: 'Invalid User! ' });
      }

      const isUserExist = await user.find({ email: value.email });
      if (isUserExist.length !== 0) {
        res.status(409).send('User with same email id already exists!!');
      } else {
        const userDetail = await userDetailModel.create({
          fcmToken: value.fcmToken,
        });
        const userData = await user.create({
          ...value,
          created_at: new Date(),
          updated_on: new Date(),
          userDetail: userDetail._id,
        });

        const token = jwt.sign({ user_id: userData._id }, process.env.TOKEN_KEY, {
          expiresIn: '2h',
        });
        // save user token
        userData.token = token;
        return res.status(200).json({ msg: 'User successfully created!!', data: userData });
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { error, value } = IamValidationSchema.getUserSchema.validate(req.query);
    if (error) {
      return res.status(400).send('Invalid request:' + JSON.stringify(error.details[0].message));
    } else {
      const isUserExist = await user.find({ _id: value.userId });

      if (isUserExist.length !== 0) {
        const userData = await user.findOne({ _id: value.userId }).populate('userDetail');
        return res.send(userData);
      } else {
        res.status(404).send('User not exists!');
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
