import { ADD_USER, DELETE_USER, EDIT_USER } from "./types";
import { IUser } from "../../types";

export const addUser = (user: IUser) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (userEmail: string) => {
  return {
    type: DELETE_USER,
    payload: userEmail,
  };
};

export const editUser = (userEmail: string, updatedUser: IUser) => {
  return {
    type: EDIT_USER,
    payload: {
      userEmail,
      updatedUser,
    },
  };
};
