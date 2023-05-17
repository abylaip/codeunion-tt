import { IUser } from "../../types";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export type UserActionTypes =
  | { type: typeof ADD_USER; payload: IUser }
  | { type: typeof DELETE_USER; payload: string }
  | {
      type: typeof EDIT_USER;
      payload: { userEmail: string; updatedUser: IUser };
    };
