interface IUser {
    name: string,
    id: number,
    imageUrl: string,
}

interface IUserDetail {
    login?: string,
    id?: number,
    createdAt?: string,
    URL?: string,
    imageUrl?: string
}

interface IPagination {
    setPrev: () => void;
    setNext: () => void;
    page: number;
}

interface ISearch {
    setUser: (a: string) => void;
    onClick: (a: string) => void;
    user: string;
}

export type { IUser, IUserDetail, IPagination, ISearch }