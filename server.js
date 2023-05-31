const express = require('express');
const app = express();
const Nexmo = require('nexmo');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const usersinfo = require('./models/iam/Users');
const iamRouter = require('./routers/iam');
const usersroute = require('./routers/userrouter');
const crimialrouter = require('./routers/criminalroute');
const Fields = require('./models/jobCategories/Fields');
const ques = require('./Iques');
// const data = require('./interfront');
// const closecont = require('./closecontactsdb');
// const surmodel = require('./survey');
// const sur = require('./scr');
const auth = require('./middleware/auth');
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//process.env.MONGO_URL/////
//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
mongoose
  .connect('mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connected!!');
  })
  .catch((error) => {
    console.Consolelog('Connection falied!!', error);
  });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// users.collection.drop();

// app.get('/c', async (req, res) => {
//   await sur();
// });

// app.get('/api/jobssector', async (req, res) => {
//   const counte = await surmodel.findById('616fbd75f1141935cea8a43a');
//   console.log(counte);
//   const con = counte.counter + 1;
//   await surmodel.findOneAndUpdate({ name: 'counter' }, { counter: con });
//   const jobs = await Fields.find();

//   res.json({
//     joby: jobs,
//   });
// });

// app.get('/a', async (req, res) => {
//   const d = await closecont.find({ _id: '5feb52c95cfd470017e33505', closecontact: '5fda60fc7eab4a0017120270' });
//   console.log(d);
// });

//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

app.post('/api/questions', async (req, res) => {
  const { jobprofile } = req.body;

  const questions = await ques.find({ title: jobprofile });

  res.json({
    qs: questions,
  });
});



// not using currently

app.post('/auth/login', async (req, res) => {
  const { userid, pass, num, loc1, loc2 } = req.body;

  try {
    const user = await usersinfo.create({
      name: userid,
      password: pass,
      number: num,
      location1: loc1,
      location2: loc2,
    });

    res.send('success');
  } catch (err) {
    res.send('Error signing up');
  }
});

// App routes will be starting from here

app.use('/apifor/users', usersroute); // All users routes handler

//  This route will be hit when the user will upload image/videos of the criminal

app.use('/api/criminal', crimialrouter);

// for interview app

// app.get('/tasks', (req, res) => {
//   var da = data;
//   console.log(da);
//   res.status(200).json(da);
// });

app.post('/api', async (req, res) => {
  try {
    const { name, gender } = req.body;

    if (!(name && gender)) {
      res.status(401).send('Required!');
    }

    // usersinfo.
    const user = await usersinfo.create({
      name,
      gender,
    });

    res.status(201).send('Entry created successfully!!');
  } catch (err) {}
});

app.use('/user', iamRouter);

// app.use('/check/loggedin', loginrouter);
// app.use('/location/toall', loginrouter);

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});

//GKDa0yvdKR1ZScgx

//mongodb+srv://niku:<password>@cluster0.fglxc.mongodb.net/test

//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
//qObaF401D1ej4Vj4
