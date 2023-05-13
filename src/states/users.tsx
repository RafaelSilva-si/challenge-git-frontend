import { IUserDetail } from "@/interfaces/users";
import { IUser } from "@/interfaces/users";
import { atom } from "recoil";


export const listUsersState = atom<IUser[]>({
    key: 'usersState',
    default:[
      {
        name: 'rafaelsilva-si',
        id: 1234534,
        imageUrl:'https://avatars.githubusercontent.com/u/77937182?v=4',
      },
      {
        name: 'diego-shawandpartners',
        id: 453242,
        imageUrl:
          'https://avatars.githubusercontent.com/u/80269900?v=4',
      },
    ]
  });

  export const userState = atom<IUserDetail>({
    key: 'userState',
    default: {
        login: 'diego-shawandpartners',
        id: 1234,
        createdAt: '2008-04-24',
        URL: 'https://github.com/diego-shawandpartners',
        imageUrl: 'https://avatars.githubusercontent.com/u/80269900?v=4'
    }
  });