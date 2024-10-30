"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
exports.TodoRouter = express_1.default.Router();
exports.TodoRouter.route('/api/todos').get(controller_1.viewTodos);
exports.TodoRouter.route('/api/todos/todo/:id').get(controller_1.viewTodo);
exports.TodoRouter.route('/api/todo/new-todo').post(controller_1.todoItem);
exports.TodoRouter.route('/api/todo/update-todo/:id').put(controller_1.updateTodoInfo);
exports.TodoRouter.route('/api/todo/user-todo/:userid').get(controller_1.userTodos);
exports.TodoRouter.route('/api/todo/delete-todo/:id').delete(controller_1.deleteTodoInfo);
