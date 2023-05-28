const mongoose = require('mongoose');
const Field = require('../Fields');
const fs = require('fs');
const quesfield = require('../Iques');

mongoose
  .connect(
    'mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority',

    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.info('Connected successfully');

    readfilefunction();
  });

function readfilefunction() {
  const allfields = fs.readFile('./questions.json', 'utf-8', (err, data) => {
    console.info('Read file successfully');
    importfielddata(data);
  });
}

async function importfielddata(data) {
  const parserdata = JSON.parse(data);

  await quesfield.create(parserdata);

  console.log('Inserted successfully');
}

console.log(process.env);
