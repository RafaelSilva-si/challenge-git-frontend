import { IUserDetail } from "@/interfaces/users";
import { IUser } from "@/interfaces/users";
import { atom } from "recoil";


export const listUsersState = atom<IUser[]>({
    key: 'usersState',
    default:[]
  });

  export const userState = atom<IUserDetail>({
    key: 'userState',
    default: {}
  });