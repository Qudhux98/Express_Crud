"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routeController/userRoutes");
const todoRoutes_1 = require("./routeController/todoRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(userRoutes_1.UserRouter);
app.use(todoRoutes_1.TodoRouter);
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
