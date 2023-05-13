interface IRepos {
    name: string,
    id: number,
    html_url: string,
    owner: {
        id: number,
        name: string,
        imageUrl: string,
        URL: string
    }
}

export type { IRepos }
