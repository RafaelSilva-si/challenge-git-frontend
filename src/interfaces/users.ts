interface ICardUser {
    name: string,
    id: number,
    imageUrl: string,
}

interface IModalUser {
    login: string,
    id: number,
    createdAt: string,
    URL: string,
    imageUrl: string
}
export type { ICardUser, IModalUser }