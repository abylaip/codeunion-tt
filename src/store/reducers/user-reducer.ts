import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  UserActionTypes,
} from "../actions/types";
import { IUser } from "../../types";
import usersData from "../../api/users.json";

interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: usersData,
};

const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.email !== action.payload),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.email === action.payload.userEmail) {
            return {
              ...user,
              ...action.payload.updatedUser,
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default userReducer;
