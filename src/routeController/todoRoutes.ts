import express from 'express';
import {
  deleteTodoInfo,
  todoItem,
  updateTodoInfo,
  userTodos,
  viewTodo,
  viewTodos,
} from '../controller';

export const TodoRouter = express.Router();

TodoRouter.route('/api/todos').get(viewTodos);
TodoRouter.route('/api/todos/todo/:id').get(viewTodo);
TodoRouter.route('/api/todo/new-todo').post(todoItem);
TodoRouter.route('/api/todo/update-todo/:id').put(updateTodoInfo);
TodoRouter.route('/api/todo/user-todo/:userid').get(userTodos);
TodoRouter.route('/api/todo/delete-todo/:id').delete(deleteTodoInfo);
