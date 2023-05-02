import { createAction, props } from '@ngrx/store';

export enum UserActionTypes {
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',
  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFailure = '[User] Create User Failure',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFailure = '[User] Update User Failure',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFailure = '[User] Delete User Failure'
}

export const getUser = createAction(UserActionTypes.GetUser);

export const getUserSuccess = createAction(
  UserActionTypes.GetUserSuccess,
  props<{ user: any }>()
);

export const getUserFailure = createAction(
  UserActionTypes.GetUserFailure,
  props<{ error: any }>()
);

export const createUser = createAction(
  UserActionTypes.CreateUser,
  props<{ user: any }>()
);

export const createUserSuccess = createAction(
  UserActionTypes.CreateUserSuccess,
  props<{ user: any }>()
);

export const createUserFailure = createAction(
  UserActionTypes.CreateUserFailure,
  props<{ error: any }>()
);

export const updateUser = createAction(
  UserActionTypes.UpdateUser,
  props<{ user: any }>()
);

export const updateUserSuccess = createAction(
  UserActionTypes.UpdateUserSuccess,
  props<{ user: any }>()
);

export const updateUserFailure = createAction(
  UserActionTypes.UpdateUserFailure,
  props<{ error: any }>()
);

export const deleteUser = createAction(
  UserActionTypes.DeleteUser,
  props<{ userId: string }>()
);

export const deleteUserSuccess = createAction(
  UserActionTypes.DeleteUserSuccess,
  props<{ userId: string }>()
);

export const deleteUserFailure = createAction(
  UserActionTypes.DeleteUserFailure,
  props<{ error: any }>()
);
