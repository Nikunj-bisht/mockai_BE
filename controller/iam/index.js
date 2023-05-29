const user = require('../../models/iam/Users');

exports.createUser = async (req, res) => {
  try {
    const { name, phoneNumber, email } = req.body;
    const userData = await user.create({
      name,
      email: email,
      phoneNumber: phoneNumber,
    });
    res.status(201).send('Success!!');
  } catch (error) {
    console.log(error, 'zzz error');
    res.send('');
  }
};
