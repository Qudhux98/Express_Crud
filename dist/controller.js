"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewUsers = viewUsers;
exports.userSignUp = userSignUp;
exports.updateUserInfo = updateUserInfo;
exports.deleteUserInfo = deleteUserInfo;
exports.userLogin = userLogin;
exports.viewUser = viewUser;
exports.viewTodos = viewTodos;
exports.todoItem = todoItem;
exports.updateTodoInfo = updateTodoInfo;
exports.deleteTodoInfo = deleteTodoInfo;
exports.viewTodo = viewTodo;
exports.userTodos = userTodos;
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
// <===============USERS SERVICE METHODS===================================>
function readUsers() {
    if (users.length === 0) {
        return 'no users yet';
    }
    return users;
}
function adduser(addNewUser) {
    const newUser = addNewUser;
    if (!newUser) {
        return 'Invalid submission';
    }
    users.push(newUser);
    return 'User added successfully';
}
function updateUser(id, newFirstName, newMiddleName, newLastName, newEmail, newPassword, newTel) {
    const findUser = users.find((e) => e.id === parseInt(id));
    if (!findUser) {
        return 'This user does not exist';
    }
    (findUser.firstName = newFirstName),
        (findUser.middleName = newMiddleName),
        (findUser.lastName = newLastName),
        (findUser.email = newEmail),
        (findUser.password = newPassword),
        (findUser.tel = newTel);
    return findUser;
}
function deleteUser(id) {
    const index = users.findIndex((e) => e.id === parseInt(id));
    if (index > users.length - 1) {
        return 'User not found';
    }
    users.splice(index, 1);
    return 'User deleted successfully';
}
function userSignIn(userEmail, userPassword) {
    const findUser = users.find((user) => user.email === userEmail && user.password === userPassword);
    if (!findUser) {
        return 'User does not exist';
    }
    return `Welcome ${findUser.firstName}!`;
}
function getUserById(id) {
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return 'User does not exist';
    }
    return user;
    //<===============================USER CONTROLLER ACTIONS==============================>
}
//Get all existing users=============>
function viewUsers(req, res) {
    res.status(200).send(readUsers());
}
//New user sign-up===============>
function userSignUp(req, res) {
    const addNewUser = req.body;
    res.status(200).send(adduser(addNewUser));
}
//Update user info by Id===============>
function updateUserInfo(req, res) {
    const id = req.params.id;
    const newFirstName = req.body.firstName;
    const newMiddleName = req.body.middleName;
    const newLastName = req.body.lastName;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const newTel = req.body.tel;
    const update = updateUser(id, newFirstName, newMiddleName, newLastName, newPassword, newEmail, newTel);
    res.status(200).send(update);
}
//Delete user by Id=====================>
function deleteUserInfo(req, res) {
    const id = req.params.id;
    const del = deleteUser(id);
    res.status(200).send(del);
}
//Existing user sign-in==============>
function userLogin(req, res) {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const sigIn = userSignIn(userEmail, userPassword);
    res.status(200).send(sigIn);
}
//Get user by Id=====================>
function viewUser(req, res) {
    const id = req.params.id;
    const userById = getUserById(id);
    res.status(200).send(userById);
}
//<=======================TODO LIST SERVICE METHODS============================>
function readTodos() {
    if (users.length === 0) {
        return 'no users yet';
    }
    return todos;
}
function addTodo(addNewTodo) {
    const newTodo = addNewTodo;
    if (!newTodo) {
        return 'Invalid submission';
    }
    todos.push(newTodo);
    return 'User added successfully';
}
function updateTodo(id, newDate, newTitle, newIsDone, newTasks) {
    const findTodo = todos.find((e) => e.id === parseInt(id));
    if (!findTodo) {
        return 'This todo does not exist';
    }
    (findTodo.date = newDate),
        (findTodo.title = newTitle),
        (findTodo.isDone = newIsDone),
        (findTodo.tasks = newTasks);
    return 'TodoList Updated successfully';
}
function deleteTodo(id) {
    const index = todos.findIndex((e) => e.id === parseInt(id));
    if (index > users.length - 1) {
        return 'Todo not found';
    }
    todos.splice(index, 1);
    return 'Todo deleted successfully';
}
function getTodoById(id) {
    const todo = users.find((user) => user.id === parseInt(id));
    if (!todo) {
        return 'Todo does not exist';
    }
    return todo;
}
//<============================TODO LIST CONTROLLER ACTIONS=====================>
//Get the list of existing todos=========>
function viewTodos(req, res) {
    res.status(200).send(readTodos());
}
//New Todo entry======================>
function todoItem(req, res) {
    const addNewTodo = req.body;
    res.status(200).send(addTodo(addNewTodo));
}
//Update todo info by Id===============>
function updateTodoInfo(req, res) {
    const id = req.params.id;
    const newDate = req.body.date;
    const newTitle = req.body.title;
    const newTasks = req.body.tasks;
    const newIsDone = req.body.isDone;
    const update = updateTodo(id, newDate, newTitle, newTasks, newIsDone);
    res.status(200).send(update);
}
//Delete todo by Id=====================>
function deleteTodoInfo(req, res) {
    const id = req.params.id;
    const del = deleteTodo(id);
    res.status(200).send(del);
}
//Get todo by Id=====================>
function viewTodo(req, res) {
    const id = req.params.id;
    const todoById = getTodoById(id);
    res.status(200).send(todoById);
}
//<=================USERS' TODO LIST SERVICE METHODS=========================>
//Get todo lists by user's ID==================>
function userTodoLists(userId) {
    const confirmUser = users.findIndex((u) => u.id === parseInt(userId));
    if (confirmUser === -1) {
        return 'User does not exist';
    }
    const userTodoList = todos.filter((u) => u.userId === parseInt(userId));
    if (userTodoList.length === 0) {
        return 'This user has no todo list';
    }
    else {
        if (userTodoList.length === 1) {
            return `This is your todo list ${JSON.stringify(userTodoList)}`;
        }
        return `These are your todo lists ${JSON.stringify(userTodoList)}`;
    }
}
//<=================USERS' TODO LIST CONTROLLER ACTIONS=========================>
function userTodos(req, res) {
    const userId = req.params.userid;
    const TodoLists = userTodoLists(userId);
    res.status(200).send(TodoLists);
}
