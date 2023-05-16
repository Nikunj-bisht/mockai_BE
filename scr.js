const sur = require('./survey');

module.exports = async function call() {
  await sur.create({ name: 'counter', counter: 0 });
};
