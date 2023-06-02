const jwt = require('jsonwebtoken');
const user = require('../models/iam/Users');

const config = process.env;

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).send('Token is missing');
  }

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer' || !token) {
    return res.status(403).send('Invalid token');
  }

  try {
    const decodedId = jwt.decode(token).user_id;
    await user
      .findById(decodedId)
      .then((data) => {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        console.log('decode ' + decoded);
        req.user = decoded;
      })
      .catch((err) => {
        res.status(404).send('User not found in database , Invalid User Token');
      });
  } catch (error) {
    return res.status(401).send('Invalid token');
  }
  return next();
};

module.exports = verifyToken;
