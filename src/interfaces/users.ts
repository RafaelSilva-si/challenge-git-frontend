interface IUser {
    name: string,
    id: number,
    imageUrl: string,
}

interface IUserDetail {
    login: string,
    id: number,
    createdAt: string,
    URL: string,
    imageUrl: string
}
export type { IUser, IUserDetail }