import { createReducer, on } from '@ngrx/store';
import {
  getUser,
  getUserSuccess,
  getUserFailure,
  createUser,
  createUserSuccess,
  createUserFailure,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from '../actions/user.actions';

export interface UserState {
  user: any;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(getUser, (state) => ({ ...state, loading: true })),
  on(getUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(getUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(createUser, (state) => ({ ...state, loading: true })),
  on(createUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(createUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(updateUser, (state) => ({ ...state, loading: true })),
  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(updateUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(deleteUser, (state) => ({ ...state, loading: true })),
  on(deleteUserSuccess, (state) => ({
    ...state,
    user: null,
    loading: false,
    error: null,
  })),
  on(deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
