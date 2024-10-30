"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
exports.router = express_1.default.Router();
exports.router.route('/api/users').get(controller_1.viewUsers);
exports.router.route('/api/users/user/:id').get(controller_1.viewUser);
exports.router.route('/api/users/new-user').post(controller_1.userSignUp);
exports.router.route('/api/users/update-user/:id').put(controller_1.updateUserInfo);
exports.router.route('/api/users/signin').post(controller_1.userLogin);
exports.router.route('/api/users/delete-user/:id').delete(controller_1.deleteUserInfo);
