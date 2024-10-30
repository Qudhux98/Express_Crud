"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
exports.UserRouter = express_1.default.Router();
exports.UserRouter.route('/api/users').get(controller_1.viewUsers);
exports.UserRouter.route('/api/users/user/:id').get(controller_1.viewUser);
exports.UserRouter.route('/api/users/new-user').post(controller_1.userSignUp);
exports.UserRouter.route('/api/users/update-user/:id').put(controller_1.updateUserInfo);
exports.UserRouter.route('/api/users/signin').post(controller_1.userLogin);
exports.UserRouter.route('/api/users/delete-user/:id').delete(controller_1.deleteUserInfo);
