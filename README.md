# CRUD operation with Expressjs

1. CRUD is an acronym for "Create", "Read", "Update" and "Delete".
2. This tests your understanding in working with APIs (Application Programming Interface).
3. In this module, I created an API for for the CRUD funtion with POST, GET, PUT, and DELETE.
4. This APIs create, get, update, and delete User or Todo list application respectively.
5. This means you can add a new user or get all or any available user, update an existing user's details or delete user.
6. You can also add a new todo list or get all or any available Todo list, update an existing todo list or delete todo list.

# Login System

1. Just as we know that the integration of sign-up and login sytem is neccessary for any website that interacts with clients.
2. This is to avoid spammers and bots ensuring that it really dealing with human beign.
3. The sign-up detail usually contains inputs like name, email, password.
4. I upadted this module to include sign-up and login system where by users have to sign-in with their correct emails and passwords.

# Getting all the todo lists by a particular user

1. In this lesson, todo lists are linked to the users and created an API to get todo lists by userId.
2. This means todo lists are created by different users and each user can get their todo list.
3. This gives us the sense of how a notepad on phones work in a real life scenario.

# Modularization

1. Modularization is a way of creating software by breaking it down into smaller, independent pieces called modules.
2. Each module is like a mini-program that handles a specific part of the bigger program.
3. It is also refered to as Modular programming.
4. The core principles of Modularization are:

   ✅ High cohesion - Everything inside a module is closely related and works towards the same goal.
   ✅ Loose coupling - Modules connect with each other only through their outer layers, so they don't need to know much about each other to work together.
   ✅ Abstraction - Modules hide their inner workings, showing only what's needed for them to be used.
   ✅ Self-containment - Modules have all they need to function on their own, reducing dependence on outside parts.

5. In coding space, readability and re-usability is crucial
6. I mean maintaining a neat and understandable code is important for others to work on it seamlessly.
7. In this module, I created a separate file named "controller.js" for the service methods and controller action
8. I exported it using "export" and then import it in libra.js file by using "import".
9. This way, each file is kept clean and organized

# Route Handler

1. In order to further make the code clean and more manageable, i create another file called "route.js"
2. This file holds all the APIs for required actions.
3. Then, I imported the controller actions in "controller.js" file into "route.js" file
4. Finally, I exported everything inside the "route.js" file to the main entry file"

# TypeScript

1. Have ever heard of "typerscript"? I guess you have because it is noisy in its benefit.
2. Typescript is actually a superset of javascript.
3. This means it has all the features of javascript and additional features which include "statitc typing"
4. Although, typescript can infer the type of a value and disallows you to change the type. However you can also put the type yourself
5. Using typescript is essential and advantageous to anyone that wants to reduce bugs at runtime
6. It allows us to detect bugs even runnung a program and making it a static type checker.
7. One of its core principle is "Structural typing" or "Duck typing".
8. In this module, I converted my JS-based project to TS-based and I can say using typescript is really worth it.
