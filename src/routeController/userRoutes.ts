import express from 'express';
import {
  deleteUserInfo,
  updateUserInfo,
  userLogin,
  userSignUp,
  viewUser,
  viewUsers,
} from '../controller';

export const UserRouter = express.Router();

UserRouter.route('/api/users').get(viewUsers);
UserRouter.route('/api/users/user/:id').get(viewUser);
UserRouter.route('/api/users/new-user').post(userSignUp);
UserRouter.route('/api/users/update-user/:id').put(updateUserInfo);
UserRouter.route('/api/users/signin').post(userLogin);
UserRouter.route('/api/users/delete-user/:id').delete(deleteUserInfo);
