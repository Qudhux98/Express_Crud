const express = require('express');

const app = express();
app.use(express.json());

// <======================USERS RECORD======================>
const users = [
  {
    id: 1,
    firstName: 'Cristiano',
    middleName: 'Ronaldo',
    lastName: 'Silva',
    email: 'cristianoron@gmail.com',
    password: 'RONALDO123',
    tel: '+28493336',
  },
  {
    id: 2,
    firstName: 'Neymar',
    middleName: 'Junior',
    lastName: 'Santos',
    email: 'neymarjr@gmail.com',
    password: 'NEYMAR123',
    tel: '+28493337',
  },
  {
    id: 3,
    firstName: 'Kylian',
    middleName: 'Mbappe',
    lastName: 'Lottin',
    email: 'mbappekylian@gmail.com',
    password: 'MBAPPE123',
    tel: '+28493338',
  },
  {
    id: 4,
    firstName: 'Zlatan',
    middleName: 'Ibrahimovic',
    lastName: 'Ali',
    email: 'zlatanibra@gmail.com',
    password: 'ZLATAN123',
    tel: '+28493339',
  },
  {
    id: 5,
    firstName: 'Sergio',
    middleName: 'Ramos',
    lastName: 'Garcia',
    email: 'sergioramos@gmail.com',
    password: 'RAMOS123',
    tel: '+28493340',
  },
  {
    id: 6,
    firstName: 'Luka',
    middleName: 'Modric',
    lastName: 'Marin',
    email: 'lukamodric@gmail.com',
    password: 'MODRIC123',
    tel: '+28493341',
  },
  {
    id: 7,
    firstName: 'Virgil',
    middleName: 'van',
    lastName: 'Dijk',
    email: 'virgildijk@gmail.com',
    password: 'VIRGIL123',
    tel: '+28493342',
  },
  {
    id: 8,
    firstName: 'Kevin',
    middleName: 'De',
    lastName: 'Bruyne',
    email: 'kevindebruyne@gmail.com',
    password: 'BRUYNE123',
    tel: '+28493343',
  },
  {
    id: 9,
    firstName: 'Robert',
    middleName: 'Lewandowski',
    lastName: 'Nowak',
    email: 'robertlewan@gmail.com',
    password: 'LEWANDOWSKI123',
    tel: '+28493344',
  },
  {
    id: 10,
    firstName: 'Erling',
    middleName: 'Braut',
    lastName: 'Haaland',
    email: 'erlinghaaland@gmail.com',
    password: 'HAALAND123',
    tel: '+28493345',
  },
];

//<=====================TODO LIST==================>
const todos = [
  {
    id: 1,
    userId: 3,
    date: '16/10/24',
    title: 'Monday errands',
    isDone: false,
    tasks: [
      'buy groceries',
      'finish project proposal',
      'gym workout',
      'reply to emails',
    ],
  },
  {
    id: 2,
    userId: 7,
    date: '17/10/24',
    title: 'Office work',
    isDone: false,
    tasks: [
      'attend team meeting',
      'prepare presentation slides',
      'submit expense report',
      'call client',
    ],
  },
  {
    id: 3,
    userId: 3,
    date: '18/10/24',
    title: 'Personal growth',
    isDone: false,
    tasks: [
      'read one chapter of a book',
      'meditate for 30 minutes',
      'learn new JavaScript concept',
      'practice coding for 1 hour',
    ],
  },
  {
    id: 4,
    userId: 1,
    date: '19/10/24',
    title: 'Household chores',
    isDone: false,
    tasks: [
      'clean the living room',
      'do the laundry',
      'organize the garage',
      'water the plants',
    ],
  },
  {
    id: 5,
    userId: 3,
    date: '20/10/24',
    title: 'Health & fitness',
    isDone: false,
    tasks: [
      'morning run',
      'prepare healthy meals',
      'yoga session',
      'track calorie intake',
    ],
  },
  {
    id: 6,
    userId: 7,
    date: '21/10/24',
    title: 'Social plans',
    isDone: false,
    tasks: [
      'call a friend',
      'dinner with family',
      'attend study group',
      'watch a movie',
    ],
  },
  {
    id: 7,
    userId: 10,
    date: '22/10/24',
    title: 'Weekend leisure',
    isDone: false,
    tasks: [
      'visit art gallery',
      'bike ride in the park',
      'bake a cake',
      'read a novel',
    ],
  },
];

// <===============USERS APIs===================================>

//Get all existing users=============>
app.get('/api/users', (req, res) => {
  res.status(200).send(users);
});

//New user sign-up===============>
app.post('/api/user/signUp', (req, res) => {
  const newUser = [
    {
      id: req.body.id,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      tel: req.body.tel,
    },
  ];
  users.push(newUser);
  res.status(201).json(newUser);
});

//Existing user sign-in==============>
app.post('/api/users/signIn', (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const findUser = users.find(
    (user) => user.email === userEmail && user.password === userPassword
  );
  if (!findUser) {
    return res.send('User does not exist');
  }
  res.status(200).send(`Welcome ${findUser.firstName}!`);
});

//Get user by Id=====================>
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  res.status(201).send(user.id);
});

//Update user info by Id===============>
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const findUser = users.find((u) => u.id === parseInt(id));
  (findUser.firstName = req.body.firstName),
    (findUser.middleName = req.body.middleName),
    (findUser.lastName = req.body.lastName),
    (findUser.email = req.body.email),
    (findUser.password = req.body.password),
    (findUser.tel = req.body.tel);
  res.status(200).send('Updated successfully');
});

//Delete user by Id=====================>
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const findUser = users.findIndex((u) => u.id === parseInt(id));
  users.splice(findUser, 1);
  res.status(200).send('Successfully deleted');
});

//<==================TODO LIST APIs====================>

//Get the list of existing todos=========>
app.get('/todos', (req, res) => {
  res.status(200).send(todos);
});

// Create todo============================>
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).send(todos);
});

//Get todo by Id===========================>
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    res.status(404).send('Todo not found');
  }
  res.status(200).send(todo);
});

//Update todo by Id========================>
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  let todo = todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    res.status(404).send('Todo not found');
  }
  todo.date = req.body.date;
  todo.title = req.body.title;
  res.status(200).send(todo);
});

//Delete todo by Id=========================>
app.delete('/todo/:id', (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex((u) => u.id === parseInt(id));
  if (todoIndex === -1) return res.status(404).send('todo not found');
  const deletedTodo = todos.splice(todoIndex, 1);
  res
    .status(200)
    .json({ message: 'successfully deleted the below', deletedTodo });
});

//<=================USERS' TODO LIST APIs=========================>

//Get todo lists by user's ID==================>
app.get('/usertodo/:userid', (req, res) => {
  const userId = req.params.userid;
  const confirmUser = users.findIndex((u) => u.id === parseInt(userId));
  if (confirmUser === -1) {
    return res.status(404).send('User does not exist');
  }
  const userTodoList = todos.filter((u) => u.userId === parseInt(userId));
  if (userTodoList.length === 0) {
    res.status(200).send('This user has no todo list');
  } else {
    if (userTodoList.length === 1) {
      return res
        .status(200)
        .send(`This is your todo list ${JSON.stringify(userTodoList)}`);
    }
    res
      .status(200)
      .send(`These are your todo lists ${JSON.stringify(userTodoList)}`);
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
